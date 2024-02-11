import { z } from "zod"
 
export const createUserFormSchema = z.object({
  username: z.string().min(2).max(50),
})