import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-24 static z-10">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center  h-full">
        <div className="flex justify-between">
          <img src={Logo} alt="/" className="mr-10" />
          <div className="hidden md:flex ">
            <ul className="flex items-center ">
              <li className="px-4 text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
                Features
              </li>
              <li className="px-4 text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
                Pricing
              </li>
              <li className="px-4 text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
                Resources
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="py-2 px-5 rounded-3xl text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
            Login
          </button>
          <button className="py-2 px-5 rounded-3xl ml-4 bg-[#2acfcf] hover:bg-opacity-50 text-white">
            Sign Up
          </button>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[#bfbfbf]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#bfbfbf]" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full max-w-[90%] mx-auto bg-[#3b3054] text-white absolute top-[96px]  left-[1.5rem] right-[auto]   justify-center text-center rounded-lg z-10"
              : "absolute top-[-100%]"
          }
        >
          <ul className="flex-col items-center py-4 max-w-[80%] mx-auto">
            <li className="py-4">Features</li>
            <li className="py-4">Pricing</li>
            <li className="py-4 border-b border-b-white">Resources</li>
            <button className="py-2 px-5 rounded-3xl mt-2">Login</button>
          </ul>
          <div className="flex-col justify-center items-center pb-8 max-w-80%">
            <button className="py-2 px-5 w-[75%] rounded-3xl ml-4 bg-[#2acfcf] hover:bg-opacity-50 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
