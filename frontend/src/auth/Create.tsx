import axios from 'axios'

import { createUserFormSchema } from './schema'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import { setCookie } from '@/utils/Cookies'

export function Create() {

  const context = useContext(AuthContext)

  // 1. Define your form.
  const form = useForm<z.infer<typeof createUserFormSchema>>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof createUserFormSchema>) {
    const response = await axios.post("http://localhost:3000/v1/createUser", values);
    console.log(response.data.message, response.data.userId);
    // context.login();
  }

	return (
    <Form {...form}>
      <div className='flex relative bg-white/10 rounded-3xl w-3/4 h-full flex-col items-center justify-center'>
        <p className='mb-5 text-2xl font-bold'>Create account</p>
        <Link className="absolute bottom-0 left-0 p-5 text-sm" to='/'>Return to the main page</Link>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-col gap-2 w-1/2">
          <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" type="text" className="text-black" {...field} />
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
                      <Input placeholder="Your email" type="text" className="text-black" {...field} />
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
                      <Input placeholder="Your password" type="password" className="text-black" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
          />
          <Button className='bg-indigo-800 p-2' type="submit">
            Sign up
          </Button>
            
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account? 
            <Link to='/login' className="text-white font-bold ml-1">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
	)
}

export default Create
