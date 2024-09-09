import React from "react";
import { PhoneIcon, HomeIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-white text-center">
      <div className="mx-auto p-5 ">
        <p className=" mb-12 text-4xl sm:text-6xl text-rose-950 font-black font-lobster underline">
          Visit One of Our Locations
        </p>
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2">
          <div>
            <div>
              <h2 className="text-4xl text-red-900 -mt-3 sm:mt-3 mb-3 sm:text-4xl sm:tracking-tight font-cinzel hover:underline">
                El Faro 1
              </h2>
              <h2 className="text-3xl font-medium text-gray-900  sm:text-4xl sm:tracking-tight underline font-lobster">
                Summit
              </h2>

              <div className="mt-2 text-2xl  font-dosis">
                <div className="inline-flex">
                  <HomeIcon
                    className="h-6 w-6 text-red-500 fill-red-700"
                    aria-hidden="true"
                  />
                </div>
                <p className=" text-black ">6136 S Archer Rd</p>

                <p className=" text-black">Summit, IL 60501</p>
              </div>

              <div className="mt-3 ">
                <div className="inline-flex">
                  <PhoneIcon
                    className="h-6 w-6 text-yellow-300 fill-yellow-200 "
                    aria-hidden="true"
                  />
                </div>

                <div className="font-dosis mt-1 text-2xl text-black">
                  <p>+1 (708) 563-1022</p>
                  <div className="mt-1 ">
                    <div className="inline-flex mt-2">
                      <ClockIcon
                        className="h-6 w-6 text-blue-400 "
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <p className=" text-black mb-2">Mon - Sun 6am to 3am</p>
                </div>

                <Link href="/elfaro">
                  <button
                    className={`
                              relative z-0 mt-4 items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                              border-red-500 bg-red-800 px-4 py-2 font-semibold
                              uppercase text-white transition-all duration-500 font-cinzel mb-8
                              
                              before:absolute before:inset-0
                              before:-z-10 before:translate-x-[150%]
                              before:translate-y-[150%] before:scale-[2.5]
                              before:rounded-[100%] before:bg-yellow-300
                              before:transition-transform before:duration-1000
                              before:content-[""]

                              hover:scale-105 hover:text-black
                              hover:border-yellow-400
                              hover:before:translate-x-[0%]
                              hover:before:translate-y-[0%]
                              active:scale-95`}
                  >
                    <span className="2xl:text-2xl">View the Menu</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-4xl  text-red-900 mt-6 mb-5 md:mt-3 md:mb-3 sm:text-4xl  sm:tracking-tight font-cinzel hover:underline">
                El Faro 2
              </h2>
              <h2 className="text-3xl font-medium text-gray-900  sm:text-4xl sm:tracking-tight underline font-lobster">
                Riverside
              </h2>

              <div className="mt-2 text-2xl  font-dosis">
                <div className="inline-flex">
                  <HomeIcon
                    className="h-6 w-6 text-red-500 fill-red-700"
                    aria-hidden="true"
                  />
                </div>
                <p className=" text-black">3422 S Harlem Ave</p>

                <p className=" text-black px-9">Riverside, IL 60546</p>
              </div>

              <div className="mt-3 ">
                <div className="inline-flex">
                  <PhoneIcon
                    className="h-6 w-6 text-yellow-300 fill-yellow-200"
                    aria-hidden="true"
                  />
                </div>

                <div className="font-dosis mt-1 text-2xl text-black">
                  <p>+1 (708) 777-1347</p>
                  <div className="mt-1 ">
                    <div className="inline-flex mt-2">
                      <ClockIcon
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <p className=" text-black mb-2">Tues- Sun 8am to 10pm</p>
                </div>

                <Link href="/elfarotwo">
                  <button
                    className={`
                    relative z-0 mt-4 md:mt-3 items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                    border-red-500 bg-red-800 px-4 py-2 font-semibold
                    uppercase text-white transition-all duration-500 font-cinzel mb-8
                              
                              before:absolute before:inset-0
                              before:-z-10 before:translate-x-[150%]
                              before:translate-y-[150%] before:scale-[2.5]
                              before:rounded-[100%] before:bg-yellow-300
                              before:transition-transform before:duration-1000
                              before:content-[""]

                              hover:scale-105 hover:text-black
                              hover:border-yellow-400
                              hover:before:translate-x-[0%]
                              hover:before:translate-y-[0%]
                              active:scale-95`}
                  >
                    <span className="2xl:text-2xl">View the Menu</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
