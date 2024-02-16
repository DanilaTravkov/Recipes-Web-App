import '../custom.css'
import '../override.css'

// import Link from "react-router-dom"



export function NavigationMenuDemo() {
  return <div></div>
}

export const Header = () => {
	return (
		<header className="h-1/6 flex items-center">
			<div className="flex justify-center w-1/4 font-extrabold text-3xl">Logo</div>

			<div className="flex justify-center w-1/2 space-x-8">
				<NavigationMenuDemo />
			</div>

			<div className="flex justify-center w-1/2 space-x-2">

				<div className="flex relative rounded-full h-8 w-8 hover:w-1/2 transition-all ease-in-out">
					<input type="text" className="relative bg-red rounded-full w-full transition-all ease-in-out p-2" />
					<img src="src/assets/svg/search.svg" alt="search" className="absolute top-0 right-0 w-8 h-8 p-1" />
				</div>

				<div className="w-1/2 flex justify-start">
					<div className="border-2 border-white rounded-full h-8 w-8 p-0.5">
						<img src="src/assets/svg/user.png" alt="user" />
					</div>
				</div>

			</div>
		</header>
	)
}
