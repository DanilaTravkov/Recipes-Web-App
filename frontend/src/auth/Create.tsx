import  {createUserFormSchema} from './schema'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'

export function Create() {

  const context = useContext(AuthContext)

  // 1. Define your form.
  const form = useForm<z.infer<typeof createUserFormSchema>>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createUserFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(context.message)
  }

	return (
    <Form {...form}>
      <div className='w-1/3'>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-2 w-full mt-4">
          <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
          />
          <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
          />
          <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
          />
          <Button type="submit">
            Sign up
          </Button>
            
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account? 
            <Link to='/sign-in' className="text-primary-500 font-bold ml-1">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
	)
}

export default Create
