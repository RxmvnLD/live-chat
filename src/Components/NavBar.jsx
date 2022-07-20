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
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <nav className="flex justify-center bg-white shadow-xl">
          <div className="flex flex-col w-full max-w-5xl py-4 text-xs md:flex-row md:justify-center md:py-2 md:flex md:px-12 px-7 md:text-base">
            <h1 className="self-start text-2xl font-semibold cursor-pointer md:self-center md:basis-56 hover:text-blue-400">
              IxTaKal
            </h1>
            <input
              type="text"
              name="user-search"
              className="w-full px-4 py-1 mt-2 bg-gray-200 border-2 border-gray-300 rounded-lg md:self-center md:w-1/4 md:m-auto"
              placeholder="🔍 search for a chat"
            />
            <div className="flex-row items-center hidden gap-5 text-3xl md:flex ">
              <Link to="/">
                <AiOutlineHome />
              </Link>
              <Link to="/newchat">
                <BiMessageSquareEdit />
              </Link>
              <CgAddR />
              <Link to="/discover">
                <AiOutlineCompass />
              </Link>
              <Link to="/favourites">
                <AiOutlineHeart />
              </Link>
              <Link to="/account">
                <CgProfile />
              </Link>
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
