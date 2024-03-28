"use client";

import { useState, useEffect } from "react";
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
  };

  const [isScrollTop, setIsScrollTop] = useState(true); // Diatur sebagai true awalnya
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    // Fungsi untuk menangani event scroll
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsScrollTop(scrollTop < lastScrollTop ? true : false);
      setLastScrollTop(scrollTop); // Menyimpan posisi scroll terakhir
      console.log(scrollTop);
      console.log("Last:", lastScrollTop);
      console.log(isScrollTop);
    };

    // Menambahkan event listener pada saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]); // Dipanggil hanya sekali saat komponen dimount

  return (
    <>
      <div className="flex justify-center">
        <nav
          className={`fixed w-3/4 shadow-lg m-8 rounded-lg z-20 duration-200 ${
            lastScrollTop === 0 ? " bg-gray-700" : "backdrop-blur-md"
          } ${!isScrollTop ? "opacity-0" : ""}`}
        >
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
                  className="text-gray-400 focus:outline-none"
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
                    <CollectionIcon
                      className="h-6 w-6 mr-1"
                      aria-hidden="true"
                    />
                    Projects
                  </div>
                </Link>
                <Link
                  href="/"
                  className="hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
                >
                  <div className="flex items-center">
                    <DeviceMobileIcon
                      className="h-6 w-6 mr-1"
                      aria-hidden="true"
                    />
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="grid justify-center  px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="text-center hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-center hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
                >
                  Projects
                </Link>
                <Link
                  href="/"
                  className="text-center hover:bg-slate-100 hover:text-gray-800 ease-in duration-100 p-3 rounded-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
