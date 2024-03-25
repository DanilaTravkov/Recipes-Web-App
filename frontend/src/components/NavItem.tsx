import React, { useState } from 'react'
import '../custom.css'

export const NavWindow = ({items}: {items: string[]}) => {

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	return (
    <ul className="absolute flex flex-col mt-2 w-36 z-10 bg-gradient-to-b from-dark-3 via-dark-3/90 to-dark-4 rounded-b-xl">
      {
        items.map((item, index) => (
          <div key={index}>
          <li 
            onMouseOver={() => setHoveredItem(item)} 
            onMouseOut={() => setHoveredItem(null)} 
            className=' p-2'>
            {item}
          </li>
          <span className={`bg-slate-500 m-0 h-[2px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === item ? "w-full" : "w-0"}`} />
          </div>
        ))
      }
    </ul>
  ) 
};

export const DropdownNavItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <li
      className='transition-colors ease-in-out cursor-default'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center justify-center'>
        <p className="hover:text-white/70">{title}</p>
        <img
          className={`ml-2 w-3 h-3 transform ${isDropdownVisible ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-300`}
          src="src/assets/other/arrow-down.png"
          alt="arrow"
        />
      </div>
      <div className={`transition-all duration-300 ${isDropdownVisible ? 'opacity-1' : 'opacity-0'}`}>
        {children}
      </div>
    </li>
  );
};
