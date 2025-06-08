import {useQuery, UseQueryOptions, QueryKey} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import request from "@/utils/api-client";
import type {StoreKeyTypeMap} from '@/types/store'
import {useStore} from "@/hooks/useStore";

type UseFetchProps<K extends keyof StoreKeyTypeMap, TQueryKey extends QueryKey> = {
    key: TQueryKey
    url: string
    params?: Record<string, unknown>
    enabled?: boolean
    storeKey?: K
    options?: Omit<
        UseQueryOptions<StoreKeyTypeMap[K], AxiosError, StoreKeyTypeMap[K], TQueryKey>,
        'queryKey' | 'queryFn'
    >
}

export function useFetch<K extends keyof StoreKeyTypeMap, TQueryKey extends QueryKey>(props: UseFetchProps<K, TQueryKey>) {
    const {
        key,
        url,
        params,
        enabled = true,
        options,
        storeKey
    } = props
    const set = useStore((state) => state.set)
    useQuery<StoreKeyTypeMap[K], AxiosError, StoreKeyTypeMap[K], TQueryKey>({
        queryKey: key,
        queryFn: async () => {
            const res = await request.get<StoreKeyTypeMap[K]>(url, {params})
            if (storeKey) {
                set(storeKey, res.data)
            }
            return res.data
        },
        enabled,
        ...options,
    })
}
