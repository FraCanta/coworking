"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" mx-auto w-full px-2 sm:px-20">
      <div className="mx-2 px-2 md:mx-10">
        <div className="flex items-center justify-between py-8 md:justify-start md:space-x-10">
          <div className="flex flex-1 justify-start lg:w-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={200}
                height={200}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              />
            </Link>
          </div>

          <nav className="hidden space-x-10 md:flex">
            <Link
              className={
                pathname == "/factory"
                  ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                  : "text-base font-semibold text-neutral-100 hover:text-neutral-300"
              }
              href="/factory"
            >
              Factory
            </Link>

            <Link
              className={
                pathname == "/contatti"
                  ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                  : "text-base font-medium text-neutral-100 hover:text-neutral-300"
              }
              href="/contatti"
            >
              Contatti
            </Link>
          </nav>
        </div>
      </div>

      {/* <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <Image src="/dark-logo.png" alt="" width={35} height={35} />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
              <Link
                className={
                  pathname == "/about"
                    ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                    : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                }
                href="/about"
              >
                
                About
              </Link>

              <Link
                className={
                  pathname == "/projects"
                    ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                    : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                }
                href="/projects"
              >
                Projects
              </Link>

              <Link
                className={
                  pathname == "/resources"
                    ? "text-base font-bold text-neutral-500 hover:text-neutral-900"
                    : "text-base font-medium text-neutral-500 hover:text-neutral-900"
                }
                href="/resources"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition> */}
    </div>
  );
};

export default Navbar;
