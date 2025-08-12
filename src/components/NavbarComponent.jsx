import React from "react";
import logo from "../assets/logo.svg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="bg-mainBlue py-[15px]">
      <div className="w-[90%] mx-auto flex flex-col justify-between items-center gap-[20px] lg:flex-row">
        <div className="flex flex-col justify-between items-center gap-[20px] md:flex-row md:gap-[60px]">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </Link>
          <div className="flex items-center bg-white rounded-[25px]">
            <input
              type="text"
              className="py-[10px] px-[20px] rounded-[25px]"
              placeholder="Search"
            />
            <button className="bg-mainYellow text-white py-[12px] px-[40px] rounded-[25px]">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-[30px]">
          <div className="flex justify-between items-center gap-2 text-[14px] text-white">
            <IoPersonOutline size={18} />
            <SignedOut>
              <SignInButton mode="modal" />
              <SignUpButton mode="modal">
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-[14px] sm:text-[14px] h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className="flex justify-between items-center gap-2 text-[14px] text-white">
            <CiHeart size={18} />
            <div className="bg-mainYellow rounded-full w-[20px] h-[20px] flex justify-center items-center text-[12px]">
              0
            </div>
            <p>Favorite</p>
          </div>
          <div className="flex justify-between items-center gap-2 text-[14px] text-white">
            <CiShoppingCart size={18} />
            <div className="bg-mainYellow rounded-full w-[20px] h-[20px] flex justify-center items-center text-[12px]">
              0
            </div>
            <Link to={"/cart"}>Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
