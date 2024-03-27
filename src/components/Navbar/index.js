"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuAlt1Icon, XCircleIcon } from "@heroicons/react/outline";
import {
  HomeIcon,
  CollectionIcon,
  DeviceMobileIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4  md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <h1 className="text-2xl">MRA</h1>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XCircleIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:flex md:flex-row md:gap-10">
            <Link
              href="/"
              className="hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
            >
              <div className="flex items-center">
                <HomeIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                Home
              </div>
            </Link>
            <Link
              href="/"
              className="hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
            >
              <div className="flex items-center">
                <CollectionIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                Projects
              </div>
            </Link>
            <Link
              href="/"
              className="hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
            >
              <div className="flex items-center">
                <DeviceMobileIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="grid justify-center gap-5 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/"> Home</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
