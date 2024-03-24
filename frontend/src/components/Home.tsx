// import { AuthContext } from "@/context/AuthProvider"
// import { useContext } from 'react'
// import { Navigate } from "react-router-dom"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { searchFormSchema } from "../auth/schema"
import React, { useContext } from "react"
import { Button } from "@/components/ui/button"

import '../custom.css'
import { Header } from "./Header"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AuthContext } from "@/context/AuthProvider"
import { Hero } from "./Hero"

export const Home = () => {

	// const form = useForm<z.infer<typeof searchFormSchema>>({
	// 	resolver: zodResolver(searchFormSchema),
	// 	defaultValues: {
	// 		search: ""
	// 	},
	// })
	
	// function onSubmit(values: z.infer<typeof searchFormSchema>) {
	// 	// TODO
	// }

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
		<div>
			<div id="first" className="flex flex-col w-full h-screen">
				<Header />
				<Hero />
			</div>

			<div id="second" className="flex w-full h-screen bg-white/80">
				<div className="relative w-1/2 h-full">
					<img src="src/assets/other/sushi.jpeg" className="absolute h-1/2 w-1/2 right-0 m-10 bg-black/80 rounded-xl" />
					<img src="src/assets/other/meat_and_potatos.jpeg" className="absolute h-1/2 w-1/2 bottom-0 left-1/4 mb-24 bg-black/40 rounded-xl" />
					<img src="src/assets/other/strawberry_and_granola.jpeg" className="absolute h-1/2 w-1/2 m-20 mt-24 ml-10 bg-black/60 rounded-xl" />
				</div>
				<div className="flex w-1/2 h-full items-center jusity-center px-20">
					<div>
						<p className="text-4xl font-bold text-dark-3">Choose the best dishes</p> 
						<p className="text-4xl font-normal mb-10 text-dark-3">From our monthly top</p>
						<Table>
							{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
							<TableBody>
								<TableRow className="hover:bg-black/20 text-black">
									<TableCell className="font-medium">Sofi</TableCell>
									<TableCell>
									<Avatar>
										<AvatarImage src="src/assets/other/no_profile_picture.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									</TableCell>
									<TableCell>4.82</TableCell>
									<TableCell>*Top recipe*</TableCell>
								</TableRow>
								<TableRow className="hover:bg-black/20 text-black">
									<TableCell className="font-medium">Michael</TableCell>
									<TableCell>
									<Avatar>
										<AvatarImage src="src/assets/other/no_profile_picture.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									</TableCell>
									<TableCell>4.09</TableCell>
									<TableCell>*Top recipe*</TableCell>
								</TableRow>
								<TableRow className="hover:bg-black/20 text-black">
									<TableCell className="font-medium">Kortney</TableCell>
									<TableCell>
									<Avatar>
										<AvatarImage src="src/assets/other/no_profile_picture.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									</TableCell>
									<TableCell>2.06</TableCell>
									<TableCell>*Top recipe*</TableCell>
								</TableRow>
								<TableRow className="hover:bg-black/20 text-black">
									<TableCell className="font-medium">Alex</TableCell>
									<TableCell>
									<Avatar>
										<AvatarImage src="src/assets/other/no_profile_picture.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									</TableCell>
									<TableCell>1.88</TableCell>
									<TableCell>*Top recipe*</TableCell>
								</TableRow>
								<TableRow className="hover:bg-black/20 text-black">
									<TableCell className="font-medium">Ollie</TableCell>
									<TableCell>
									<Avatar>
										<AvatarImage src="src/assets/other/no_profile_picture.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									</TableCell>
									<TableCell>1.71</TableCell>
									<TableCell>*Top recipe*</TableCell>
								</TableRow>
							</TableBody>
						</Table>

					</div>
				</div>
			</div>

			<div id="third" className="flex w-full h-screen">

			</div>
				
		</div>
	)
}
