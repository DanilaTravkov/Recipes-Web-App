import '../custom.css'
import '../override.css'

import React, { useLayoutEffect, useState } from 'react'
import { DropdownNavItem, NavWindow } from './NavItem'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { UserIcon } from './UserIcon'
import { AuthContext } from '@/context/AuthProvider'

import { tokenInterface } from '@/types/authTypes'
import { Link } from 'react-router-dom'

export function MyNavigationMenu() {
  return <>
		<ul className='flex justify-center space-x-10'>
			<DropdownNavItem title="About">
				<NavWindow items={["Lisence", "Creators", "Why us?"]} />
			</DropdownNavItem>
			<DropdownNavItem title="Daily">
				<NavWindow items={["Dialy menu"]} />
			</DropdownNavItem>
			<DropdownNavItem title="Categories">
				<NavWindow items={["Vegan", "Sea food", "Lenten", "Carnivorous"]} />
			</DropdownNavItem>
			<DropdownNavItem title="Information">
				<NavWindow items={["Read policy", "Contact support", "Connections"]} />
			</DropdownNavItem>
		</ul>
	</>
}

export const Header = () => {

	const [isScrolled, setIsScrolled] = useState(false);

	const context: tokenInterface = React.useContext(AuthContext);

	// useLayoutEffect(() => {
	// 	const header = document.getElementsByName("header");
	// 	const handleSCroll = () => {
	// 		if (window.scrollY > (50)) {
	// 			setIsScrolled(true);
	// 		} else {
	// 			setIsScrolled(false);
	// 		}
	// 	}
	// 	window.addEventListener("scroll", handleSCroll)

	// 	return () => {
	// 		removeEventListener("scroll", handleSCroll)
	// 	}

	// }, [])

	return (
		<header className={`h-1/6 flex items-center border-b border-slate-500 transition-all duration-500 ease-in-out ${isScrolled ? "bg-slate-900/20 backdrop-blur-lg" : ""}`}>
			<div className="flex justify-center w-1/4 font-extrabold text-3xl">Logo</div>

			<div className="w-1/3">
				<MyNavigationMenu />
			</div>

			<div className="flex justify-center items-center w-1/2 space-x-2">

				<Dialog>
				<DialogTrigger asChild>
					<div className={`flex relative h-8 w-8 transition-colors ease-in-out`}>
						<button type="submit" className="relative w-full p-2" />
						<img src="src/assets/svg/search.svg" alt="search" className="transition-colors ease-in-out rounded-full absolute top-0 right-0 w-8 h-8 p-1 bg-violet-500 hover:bg-violet-600 cursor-pointer" />
					</div>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px] h-1/2 bg-dark-3 border-none flex flex-col">
					<DialogHeader>
						<DialogTitle>Search for recipes</DialogTitle>
						<DialogDescription>
							If you cannot find your recipe here, try searching by keywords or be the first to create.
						</DialogDescription>
					</DialogHeader>

					<Command className='bg-dark-3'>
						<CommandInput placeholder="Search by name or keyword..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading="Suggestions">
								<CommandItem>Calendar</CommandItem>
								<CommandItem>Search Emoji</CommandItem>
								<CommandItem>Calculator</CommandItem>
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Settings">
								<CommandItem>Profile</CommandItem>
								<CommandItem>Billing</CommandItem>
								<CommandItem>Settings</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</DialogContent>
			</Dialog>
			
			{
				context.token ? <UserIcon /> :
				<>
					<span>|</span>
					<Link to={'/login'}>
						<p className='font-bold hover:text-white/70 transition-colors duration-300 ease-in-out'>Log in</p>
					</Link>
				</> 
			}

			</div>
		</header>
	)
}
