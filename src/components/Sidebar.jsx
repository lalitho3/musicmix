import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { links } from '../assets/constants'
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({handleClick}) => {
  return (
    <div className="mt-10">
      {
        links.map(link => (
          <NavLink key={link.name} to={link.to}
           className="flex flex-row justify-start items-center my-8 text-md font-medium text-gray-300 hover:text-blue-500"
           onClick={() => handleClick && handleClick(setMenuOpen(true))}>
            <link.icon className="w-6 h-6 mr-4" />
            {link.name}
          </NavLink>
        ))
      }
    </div>
  )
}

const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-tr from-blue-900 to-indigo-700">
        <h1 className="text-center font-bold text-4xl text-white p-0 m-0">MusicMix</h1>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {menuOpen ? (
          <RiCloseLine 
          onClick={()=> setMenuOpen(false)}
          className="w-6 h-6 text-white mr-2" />
        ) : (
          <HiOutlineMenu
          onClick={()=> setMenuOpen(true)}
          className="w-6 h-6 text-white mr-2" />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tr from-blue-900 to-indigo-700 backdrop-blur-lg z-10 p-6 md:hidden
      smooth-transition ${menuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="text-center font-bold text-4xl text-white p-0 m-0">MusicMix</h1>
        <NavLinks handleClick={()=>setMenuOpen(false)} />
      </div>

    </>
  )

};

export default Sidebar;
