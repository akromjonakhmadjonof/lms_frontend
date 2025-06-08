import axios from 'axios';
import {toast} from "react-hot-toast";

function getSubdomain() {
    if (typeof window === 'undefined') return '';
    const host = window.location.hostname;
    const parts = host.split('.');
    return parts.length > 1 ? parts[0] : '';
}

const subdomain = getSubdomain();
const baseURL = subdomain
    ? `http://${subdomain}.localhost:9090/api/v1`
    : 'http://localhost:3000/api/v1/uz';
const baseURLProd = subdomain
    ? `https://${subdomain}.talaba365.uz/api/v1`
    : 'https://talaba365/api/v1/uz';

function getLocale(): string {
    if (typeof document !== 'undefined') {
        const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
        return match?.[1] || 'uz-latn';
    }
    return 'uz-latn';
}

const request = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? baseURLProd : baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const noRetryRoutes = ['/auth/login', '/auth/refresh'];

request.interceptors.request.use((config) => {
    const lang = getLocale();
    if (config.url && !config.url.startsWith('/auth/refresh')) {
        config.url = `/${lang}${config.url}`;
    }
    return config;
});

request.interceptors.response.use(
    response => {
        const method = response.config.method?.toLowerCase();
        if (method !== 'get' && response.data?.message) {
            toast.success(response.data.message);
        }
        return response;
    },
    async error => {
        const originalRequest = error.config;

        const shouldSkipRetry = noRetryRoutes.some(route =>
            originalRequest.url?.includes(route)
        );

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !shouldSkipRetry
        ) {
            originalRequest._retry = true;

            try {
                await request.post('/auth/refresh');
                return request(originalRequest);
            } catch (refreshError) {
                const err = refreshError as { response?: { data?: { message?: string } } };

                toast.error(
                    err.response?.data?.message ||
                    'Session expired. Please log in again.'
                );
                return Promise.reject(refreshError);
            }

        }

        toast.error(error.response?.data?.message || 'Something went wrong');
        return Promise.reject(error);
    }
);


export default request;
