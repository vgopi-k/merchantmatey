"use client";
import Link from "next/link";
//import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Home",
    "Fiction",
    "Non-Fiction",
    "Business"
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/buy">
          <span className="flex items-center space-x-2 text-xl font-medium text-black-500 dark:text-gray-100">
            <span className="-mt-0.5 whitespace-nowrap text-2xl font-bold">Your Book Store</span>
            </span>
            <div className="mt-2">
                <Image
                  src="/img/mm.svg"
                  alt="Powered by MerchantManty"
                  width="250"
                  height="50"
                />
            </div>
          
        </Link>
                
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

