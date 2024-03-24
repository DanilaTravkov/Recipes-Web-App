import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '@/context/AuthProvider';
import { tokenInterface } from '@/types/authTypes';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

export const UserIcon = () => {

	const context: tokenInterface = useContext(AuthContext);

	const [hovered, setHovered] = useState<boolean | null>(null);
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);

	return (
		<>
			<div>
				<div 
					onMouseOver={() => setHovered(true)} 
					className={`border-2 border-white rounded-full h-8 w-8 p-0.5 transition-colors ease-in-out duration-300 hover:border-white/70`}
				>
					<img src="src/assets/svg/user.png" alt="user" />
				</div>
			</div>

			<ul 
				onMouseLeave={() => setHovered(false)} 
				className={`flex items-center relative left-2 z-10  transition-opacity duration-300 ease-in-out space-x-2 ${hovered ? "opacity-1" : "opacity-0"}`}
			>
				<div>
					<Link 
						to="/profile"
						onMouseOver={() => setHoveredItem(1)} 
						onMouseOut={() => setHoveredItem(null)} 
						className='py-1 pr-2 cursor-pointer'>
							Profile
					</Link>
					<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 1 ? "w-full" : "w-0"}`} />
				</div>
				<div>
					<Link
						to=""
						onMouseOver={() => setHoveredItem(2)} 
						onMouseOut={() => setHoveredItem(null)} 
						className='py-1 pr-2 cursor-pointer'>
							Settings
					</Link >
					<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 2 ? "w-full" : "w-0"}`} />
				</div>
				<div>
					<AlertDialog>
						<AlertDialogTrigger>
							<div
							onMouseOver={() => setHoveredItem(3)} 
							onMouseOut={() => setHoveredItem(null)} 
							className='py-1 cursor-pointer'>
								Log out
							</div>
							<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 3 ? "w-full" : "w-0"}`} />

						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
								<AlertDialogDescription>
								You will have to log in again to create recipes.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>
								<Link to="/login" onClick={context.logout}>
									Log out
								</Link>
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</ul>
		</>
	)
}
