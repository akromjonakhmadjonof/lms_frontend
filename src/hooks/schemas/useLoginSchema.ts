import { z } from 'zod'
import { useTranslations } from 'next-intl'

export const useLoginSchema = () => {
    const t = useTranslations('auth')

    return z.object({
        email: z.string({
            required_error: t('email_required'),
            invalid_type_error: t('email_invalid')
        }).email(t('email_invalid')),

        password: z.string({
            required_error: t('password_required'),
            invalid_type_error: t('password_required')
        }).min(10, t('password_min')),
    })
}

export type LoginDTO = z.infer<ReturnType<typeof useLoginSchema>>
