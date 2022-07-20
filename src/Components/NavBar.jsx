import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineCompass,
} from "react-icons/ai";
import { CgProfile, CgAddR } from "react-icons/cg";
import { BiMessageSquareEdit } from "react-icons/bi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <nav className="bg-white shadow-xl flex justify-center">
          <div className=" flex flex-col md:flex-row md:justify-center max-w-5xl py-4 md:py-2 md:flex md:px-12 px-7  w-full text-xs md:text-base">
            <h1 className="self-start md:self-center text-2xl md:basis-56 cursor-pointer font-semibold hover:text-blue-400">
              IxTaKal
            </h1>
            <input
              type="text"
              name="user-search"
              className="rounded-lg md:self-center border-2 border-gray-300 px-4 py-1 w-full md:w-1/4 mt-2 md:m-auto bg-gray-200"
              placeholder="🔍 search"
            />
            <div className="md:flex flex-row items-center hidden text-3xl gap-5 ">
              <AiOutlineHome />
              <BiMessageSquareEdit />
              <CgAddR />
              <AiOutlineCompass />
              <AiOutlineHeart />
              <CgProfile />
            </div>
          </div>

          <button
            className="absolute inline-flex items-center p-2 ml-3 text-3xl rounded-lg md:hidden focus:outline-none right-8 top-2 focus:ring-2 focus:ring-purple-400"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div>{isOpen ? <VscClose /> : <BiMenu />}</div>
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
