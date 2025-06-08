import {useMutation as useMutationRequest, useQueryClient, UseMutationResult} from '@tanstack/react-query'
import {AxiosError, AxiosResponse} from 'axios'
import request from "@/utils/api-client";

type Method = 'post' | 'put' | 'patch' | 'delete'

type MutationOptions<TData, TVariables> = {
    url: string
    method: Method
    invalidateKeys?: (string | readonly unknown[])[]
    onSuccess?: (data: TData) => void
    onError?: (err: AxiosError) => void
    variables?: TVariables
}

function useMutation<TData, TVariables>(
    options: MutationOptions<TData, TVariables>
): UseMutationResult<TData, AxiosError, TVariables, unknown> & {
    loading: boolean
    success: boolean
} {
    const {url, method, invalidateKeys, onSuccess, onError} = options
    const queryClient = useQueryClient()

    const mutation = useMutationRequest<TData, AxiosError, TVariables>({
        mutationFn: async (variables: TVariables) => {
            let res: AxiosResponse<TData>

            if (method === 'delete') {
                res = await request.delete<TData>(url, {data: variables})
            } else {
                res = await request[method]<TData>(url, variables)
            }

            return res.data
        },
        onSuccess: (data: TData) => {
            if (invalidateKeys) {
                invalidateKeys.forEach((key) =>
                    queryClient.invalidateQueries({queryKey: Array.isArray(key) ? key : [key]})
                )
            }
            onSuccess?.(data)
        },
        onError,
    })


    return {
        ...mutation,
        loading: mutation.isPending,
        success: mutation.isSuccess
    }
}


export default useMutation
