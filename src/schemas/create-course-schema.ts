import { z } from 'zod'

export const createCourseSchema = z.object({
    name: z.string().min(3, 'Name is too short'),
    description: z.string().min(10, 'Description is too short'),
})

export type CreateCourseDTO = z.infer<typeof createCourseSchema>
