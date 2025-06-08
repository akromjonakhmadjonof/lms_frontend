import { z } from 'zod'
import { useTranslations } from 'next-intl'

export const useRoleSchema = () => {
    const t = useTranslations('roles')

    return z.object({
        name: z.string({
            required_error: t('name_required'),
            invalid_type_error: t('name_invalid')
        }).min(2, t('name_min')).max(50, t('name_max')),

        label: z.string({
            required_error: t('label_required'),
            invalid_type_error: t('label_invalid')
        }).min(2, t('label_min')).max(50, t('label_max')),

        description: z.string().optional(),

        priority: z.coerce.number({
            invalid_type_error: t('priority_invalid')
        }).min(0, t('priority_min')).optional(),
    })
}

export type RoleDTO = z.infer<ReturnType<typeof useRoleSchema>>
