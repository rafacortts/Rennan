"use client";

import Image from "next/image";
import React from "react";

import { NavItems } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image src={"/"} width={20} height={20} alt={"Logo"} className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">Rennan</span>
          </div>
          <ul className="hidden lg:flex  ml-14 space-x-12 text-lg">
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-7 items-center justify-center">
            <Link
              href={"/"}
              className="bg-black text-white rounded-md py-2 px-3 flex gap-2 items-center border-2 border-black transition-all hover:bg-white hover:text-black "
            >
              Get Started
              <BsArrowRight/>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col ">
            <button onClick={toggleMenu} className="text-4xl">
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col backdrop-blur-lg  justify-center items-center lg:hidden nav-links">
            <ul>
              {NavItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href={"/"} className="py-2 px-3 border rounded-md">
                Lorem
              </Link>
              <Link
                href={"/"}
                className="bg-gradient-to-r from-green-500 to-green-700 rounded-md py-2 px-3 "
              >
                Get Start
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
