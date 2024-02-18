import React, { useState } from 'react'
import '../custom.css'

export const NavWindow = ({text}: {text: string}) => {
	return <div className="absolute bg-white/10 p-5 mt-2 rounded">{text}</div>
}

export const NavItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <>
      <li className='transition-colors ease-in-out cursor-default'>
        <div 
					className='flex items-center justify-center'
					onMouseOver={handleHover}
        	onMouseOut={handleMouseOut}
				>
          <p className="hover:text-white/70">{title}</p>
          <img className={`ml-2 w-3 h-3 transform ${hovered ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-300`} src="src/assets/other/arrow-down.png" alt="arrow" />
        </div>
        <div className={`transition-opacity duration-300 ${hovered ? 'opacity-1' : 'opacity-0'}`}>
          {children}
        </div>
      </li>
    </>
  );
};

