import axios from 'axios'

import { createUserFormSchema, loginUserFormSchema } from './schema'
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
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

	const context = useContext(AuthContext);

	const navigate = useNavigate();

	const form = useForm<z.infer<typeof loginUserFormSchema>>({
	resolver: zodResolver(loginUserFormSchema),
	defaultValues: {
		username: "",
		password: "",
		email: ""
	},
	});

	async function onSubmit(values: z.infer<typeof loginUserFormSchema>) {
	try {
		const {username, email, password} = values;
		const response = await axios.post("http://localhost:3000/v1/login", {username, password});
		const { accessToken, refreshToken } = response.data;
		console.log("Access: ", accessToken, '\n', "Refresh: ", refreshToken);
		context.login({ accessToken, refreshToken });
		navigate("/");
		
	} catch (error) {
		console.error('Error logging in:', error);
	}
  }

	return (
		<Form {...form}>
			<div className='flex relative bg-white/10 rounded-3xl w-3/4 h-full flex-col items-center justify-center'>
			<p className='mb-5 text-xl font-bold'>Log in to your account</p>
			<Link className="absolute bottom-0 left-0 p-5 text-sm" to='/'>Return to the main page</Link>

				<form className="space-y-2 flex flex-col gap-2 w-1/2" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input className="text-black" placeholder="Enter username" {...field} />
								</FormControl>
								{/* <FormDescription>This is your public display name.</FormDescription> */}
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
									<Input className="text-black"  placeholder="Enter email" {...field} />
								</FormControl>
								{/* <FormDescription>This is your public display name.</FormDescription> */}
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
									<Input className="text-black"  type="password" placeholder="Enter password" {...field} />
								</FormControl>
								{/* <FormDescription>This is your public display name.</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className='bg-indigo-800 p-2' type="submit">
						Sign in
					</Button>

					<p className="text-small-regular text-light-2 text-center mt-2">
            			Don't have an account? 
            			<Link to='/create' className="text-white font-bold ml-1">Sign up</Link>
          			</p>
				</form>
			</div>
		</Form>
	)
}
