import { z } from 'zod'

//common password check logic
export const passwordSchema = z.string().min(6, { message: 'Insert correcr password' })


export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Insert correcr gmail' }),
    password: passwordSchema
})

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        fullName: z.string().min(2, { message: 'Insert Name and Surname' }),
        confirmPassword: passwordSchema
    })
).refine(data => data.password === data.confirmPassword, {
    message: 'Password incorrect',
    path: ['confirmPassword']
})

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>