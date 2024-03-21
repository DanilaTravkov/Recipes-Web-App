import React, { useState } from 'react'
import '../custom.css'

export const NavWindow = ({items}: {items: string[]}) => {

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	return (
    <ul className="absolute mt-2 w-24 z-10">
      {
        items.map((item, key) => (
          <>
          <li 
            onMouseOver={() => setHoveredItem(item)} 
            onMouseOut={() => setHoveredItem(null)} 
            className='py-2' key={key}>
            {item}
          </li>
          <span className={`bg-white m-0 p-0 h-[1px] rounded-full block transition-all ease-in-out duration-300 ${hoveredItem === item ? "w-full" : "w-0"}`} />
          </>
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
      <div className={`transition-opacity duration-300 ${isDropdownVisible ? 'block opacity-1' : 'opacity-0'}`}>
        {children}
      </div>
    </li>
  );
};
