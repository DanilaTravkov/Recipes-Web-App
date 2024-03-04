import React, { useState } from 'react'
import '../custom.css'

export const NavWindow = ({items}: {items: string[]}) => {
	return (
    <ul className="absolute mt-2 rounded w-24">
      {
        items.map((item, key) => (
          <li className='py-2 w-2/3' key={key}>
            {item}
          </li>
        ))
      }
    </ul>
  ) 
}

export const NavItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [hoveredHeader, setHoveredHeader] = useState(false);

  return (
    <>
      <li className='transition-colors ease-in-out cursor-default'>
        <div 
					className='flex items-center justify-center'
					onMouseOver={() => setHoveredHeader(true)}
          onMouseOut={() => setHoveredHeader(true)}
				>
          <p className="hover:text-white/70">{title}</p>
          <img className={`ml-2 w-3 h-3 transform ${hoveredHeader ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-300`} src="src/assets/other/arrow-down.png" alt="arrow" />
        </div>
        <div onMouseOver={() => setHoveredHeader(true)} onMouseOut={() => setHoveredHeader(false)} className={`transition-opacity duration-300 ${hoveredHeader ? 'block opacity-1' : 'opacity-0'}`}>
          {children}
        </div>
      </li>
    </>
  );
};

