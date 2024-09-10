"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "El Faro Summit", href: "/elfaro" },
  { name: "El Faro Riverside", href: "/elfarotwo" },
  { name: "About Us", href: "/aboutus" },
  { name: "Order Online", href: "/order" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = () => {
    setMobileMenuOpen(false); // Close the mobile menu on navigation
  };

  return (
    <div className="bg-white sticky z-50 top-0 right-0 left-0 pt-2 2xl:pt-1 font-lobster">
      <nav className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
        <Link href='/'>
      <p className="text-3xl text-red-950 font-extrabold lg:hidden">El Faro</p>
      </Link>
        <Link href="/" className="lg:-m-1.5 lg:p-1.5 md:-m-1.5 md:p-1.5">
          <span className="sr-only ">El Faro </span>
          <Image
            className="h-10 2xl:h-15 w-auto hover:saturate-200 "
            src="/logo.png"
            alt="home"
            width={20}
            height={20}
          />
        </Link>

{/* mobile view */}
        <div className="flex lg:hidden text-center">
     
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10 text-red-950" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.button
                type="button"
                className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-6 text-gray-900 rounded hover:text-red-600"
                whileHover={{ scale: 1.3 }}
                onClick={handleNav}
              >
                {item.name}
              </motion.button>
            </Link>
          ))}
        </div>
      </nav>



      <Dialog
        as="div"
        className="lg:hidden z-30 absolute"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50" />
        <Dialog.Panel className="fixed inset-0 left-0 z-10 w-full h-full bg-white px-6 py-6 sm:max-w-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">El Faro</span>
              <Image
                className="h-10 w-auto hover:saturate-200"
                src="/logo.png"
                alt="home"
                width={20}
                height={20}
              />
            </Link>
                
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-10 text-red-600" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-8 py-10 left-5">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.p
                      onClick={handleNav}
                      className="-mx-3 block rounded-lg px-3 py-4 font-semibold leading-7 text-gray-900 text-4xl md:text-6xl hover:text-red-600 font-lobster"
                      whileHover={{ scale: 1.15 }}
                      initial={{ x: -150 }}
                      animate={{ x: 20 }}
                      transition={{
                        duration: 0.8,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      {item.name}
                    </motion.p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
