"use client";
import Link from "next/link";
//import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  

  return (
    <div className="w-full">
      <div className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
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
                
      </div>
    </div>
  );
}

