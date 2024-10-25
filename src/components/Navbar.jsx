import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuState = () => {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <div className="sticky top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-primaryColor py-7 px-12 text-primaryText">
        <a href="/" aria-label="Homepage" className="font-oswald">
          <h2>P.S</h2>
        </a>
        <div className="sm:flex hidden gap-5 font-poppins">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
        <div className="relative sm:hidden flex">
          <button onClick={toggleMenuState}>
            {openMenu ? <IoClose aria-label="Close menu" size={22} /> : <AiOutlineMenu aria-label="Open menu" size={22} />}
          </button>
          <div className={`${openMenu ? 'flex flex-col gap-2' : 'hidden'} rounded-md font-poppins absolute top-7 right-0 bg-white text-gray-800 p-3`}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-secondaryText">

      </div>
    </div>
  )
}

export default Navbar
