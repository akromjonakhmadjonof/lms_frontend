import createMiddleware from 'next-intl/middleware';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const PUBLIC_ROUTES = ['login', 'forgot-password'];
const DEFAULT_PRIVATE_PATH = 'dashboard';
const LOCALES = ['en', 'uz', 'uz-latn', 'ru'];

export default function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const segments = pathname.split('/');
    const locale = LOCALES.includes(segments[1]) ? segments[1] : null;

    if (!locale) {
        return intlMiddleware(request);
    }

    const cleanedPath = segments.slice(2).join('/');

    const isPublicPage = PUBLIC_ROUTES.some((route) =>
        cleanedPath === route || cleanedPath.startsWith(`${route}/`)
    );

    const token = request.cookies.get('access_token');
    console.log(token)

    if (token && isPublicPage) {
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}/${DEFAULT_PRIVATE_PATH}`;
        return NextResponse.redirect(url);
    }

    if (!token && !isPublicPage) {
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}/login`;
        return NextResponse.redirect(url);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
