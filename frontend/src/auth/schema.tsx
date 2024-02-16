import { z } from "zod"
 
export const createUserFormSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email(),
  password: z.string().min(6).max(30),
})

export const loginUserFormSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email(),
  password: z.string().min(6).max(30)
})

export const searchFormSchema = z.object({
  search: z.string().min(2).max(30)
})

