import { useState } from 'react';

export const UserIcon = () => {

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
			className={`flex backdrop-blur relative left-2 z-10 transition-opacity duration-300 ease-in-out ${hovered ? "opacity-1" : "opacity-0"}`}
			>
				<div>
					<li 
						onMouseOver={() => setHoveredItem(1)} 
						onMouseOut={() => setHoveredItem(null)} 
						className='py-1 pr-2 cursor-pointer'>
						Profile
					</li>
					<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 1 ? "w-full" : "w-0"}`} />
				</div>
				<div>
					<li 
						onMouseOver={() => setHoveredItem(2)} 
						onMouseOut={() => setHoveredItem(null)} 
						className='py-1 pr-2 cursor-pointer'>
						Privacy
					</li>
					<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 2 ? "w-full" : "w-0"}`} />
				</div>
				<div>
					<li 
							onMouseOver={() => setHoveredItem(3)} 
							onMouseOut={() => setHoveredItem(null)} 
							className='py-1 cursor-pointer'>
							Settings
						</li>
						<span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === 3 ? "w-full" : "w-0"}`} />
				</div>
			</ul>
		</>
	)
}
