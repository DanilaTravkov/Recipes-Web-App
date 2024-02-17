import '../custom.css'
import '../override.css'

import React, { useState } from 'react'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MyNavigationMenu() {
  return <>
		<ul className='flex justify-center space-x-8'>
			<li className='hover:text-white/70 transition-colors ease-in-out cursor-default'>About</li>
			<li className='hover:text-white/70 transition-colors ease-in-out cursor-default'>Daily</li>
			<li className='hover:text-white/70 transition-colors ease-in-out cursor-default'>Categories</li>
			<li className='hover:text-white/70 transition-colors ease-in-out cursor-default'>Policy</li>
		</ul>
	</>
}

export const Header = () => {

	const [searchInput, setSearchInput] = useState<string>("")
	const [openSearch, setOpenSearch] = useState<boolean>(false)

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value)
	}

	const handleFocus = () => {
		openSearch ? setOpenSearch(false) :  setOpenSearch(true)
		setSearchInput("")
		console.log(openSearch)
	}



	return (
		<header className="h-1/6 flex items-center">
			<div className="flex justify-center w-1/4 font-extrabold text-3xl">Logo</div>

			<div className="w-1/3">
				<MyNavigationMenu />
			</div>

			<div className="flex justify-center w-1/2 space-x-2">

				<div className={`flex relative rounded-full h-8 ${openSearch ? "w-1/3" : "w-8"} hover:w-1/3 transition-all ease-in-out`}>
					<input value={searchInput} onChange={handleSearch} onBlur={handleFocus} onFocus={handleFocus} type="text" className="relative bg-red rounded-full w-full transition-all ease-in-out p-2" />
					<img src="src/assets/svg/search.svg" alt="search" className="absolute top-0 right-0 w-8 h-8 p-1" />
				</div>

				<div className="flex justify-start">
					<div className="border-2 border-white rounded-full h-8 w-8 p-0.5">
						<img src="src/assets/svg/user.png" alt="user" />
					</div>
				</div>

			</div>
		</header>
	)
}
