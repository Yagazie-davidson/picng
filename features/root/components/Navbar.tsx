"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-24 pt-7 relative">
      <Image
        alt="logo"
        src="https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa6a747bd271e6ca1a5128_optimized_380.webp"
        width={180}
        height={180}
      />
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-3 text-black md:text-white text-lg font-normal absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
      >
        <button
          className="md:hidden self-end text-black"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <ul className="space-y-4 md:space-y-0 md:flex md:space-x-3 w-full md:w-auto">
          <li>
            <a href="" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="" onClick={closeMenu}>
              Objectives
            </a>
          </li>
          <li>
            <a href="" onClick={closeMenu}>
              Pi-CNG
            </a>
          </li>
        </ul>
        <Button className="md:hidden w-full bg-[#E0DB00] font-normal text-sm hover:bg-[#05AA4E] hover:text-white text-black py-5 px-5">
          Apply Now
        </Button>
      </div>
      <Button className="hidden md:flex bg-[#E0DB00] font-normal text-sm hover:bg-[#05AA4E] hover:text-white text-black py-5 px-5">
        Apply Now
      </Button>
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
