// import { AuthContext } from "@/context/AuthProvider"
// import { useContext } from 'react'
// import { Navigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { searchFormSchema } from "../auth/schema"
import { Button } from "@/components/ui/button"

import '../custom.css'
import { Header } from "./Header"

export const Home = () => {

	const form = useForm<z.infer<typeof searchFormSchema>>({
		resolver: zodResolver(searchFormSchema),
		defaultValues: {
			search: ""
		},
	})
	
	function onSubmit(values: z.infer<typeof searchFormSchema>) {
		// TODO
	}

	// const context = useContext(AuthContext)
	const isLoading = false

	return isLoading ? (
		// Render skeleton while content is loading
			<div className="flex w-full">
				<section className="flex flex-col flex-none w-1/4 bg-white/5 p-10">
					<div className="bg-lime-500/80 w-full h-1/5 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/70 w-full h-4/5 rounded-3xl skeleton"></div>
				</section>
				<section className="flex flex-col flex-grow w-1/2 bg-white/10 p-10">
					<div className="bg-lime-500/70 w-full h-4/5 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/80 w-full h-1/5 rounded-3xl skeleton"></div>
				</section>
				<section className="flex flex-col flex-none w-1/6 bg-white/20 p-10">
					<div className="bg-lime-500/70 w-full h-1/4 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/80 w-full h-1/6 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/70 w-full h-1/6 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/80 w-full h-1/6 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/70 w-full h-1/6 mb-10 rounded-3xl skeleton"></div>
					<div className="bg-lime-500/80 w-full h-1/6 rounded-3xl skeleton"></div>
				</section>
			</div>
	) : (
		// If not loading - render content
		<div className="flex flex-col w-full">

		<Header />

		<div className="flex h-full">
			<section className="w-1/2 p-10 pt-0">
				<div className="flex flex-col justify-center h-full px-24">
					<p className="text-4xl font-bold">Find the perfect recipe</p> 
					<p className="text-4xl font-normal mb-10">Create and start sharing</p>
					<p className="mb-10 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit recusandae accusamus libero repellat architecto aspernatur possimus quae tempore at fugiat non nam illum quod deserunt magnam, quas laborum incidunt?</p>
					<Button className='bg-indigo-700 p-2 w-1/2' type="submit">
            Explore 
          </Button>
				</div>
			</section>

			<section className="w-1/2 flex p-5 pr-0 pb-20 space-x-8">
				<div className="h-full w-4/5 max-w-ful overflow-hidden rounded-lg custom-element ">
					<img alt="photo" src="src/assets/other/food1.jpeg" className="h-full w-full object-cover" />
				</div>
				<div className="h-full w-1/3 max-w-full overflow-hidden rounded-lg custom-element">
					<img alt="photo" src="src/assets/other/food6.jpeg" className="h-full w-full object-cover" />
				</div>
				<div className="h-full w-1/4 max-w-full overflow-hidden rounded-l-lg custom-element">
					<img alt="photo" src="src/assets/other/food3.jpeg" className="h-full w-full object-cover" />
				</div>
			</section>

		</div>
		</div>
	)
}
