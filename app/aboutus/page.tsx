"use client";

import { motion, useReducedMotion } from "framer-motion";

import Founder from "./Founder";

import item1 from "/public/menu1.jpg";
import item2 from "/public/menu2.jpg";
import item3 from "/public/menu3.jpg";
import item4 from "/public/menu4.png";
import item5 from "/public/menu5.jpeg";
import item6 from "/public/menu6.jpg";
import item7 from "/public/menu7.jpg";
import item8 from "/public/menu8.jpg";
import item9 from "/public/menu9.jpg";

// Update the images array to type StaticImageData[]
const images: StaticImageData[] = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
];

import FoodGrid from "../components/FoodGrid";

import { StaticImageData } from "next/image";

export default function TimelinePage() {
  const shouldReduceMotion = useReducedMotion(); // Type is inferred
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative lg:grid place-items-center hidden md:block">
        <h1
          className="font-bold font-pacifico text-red-900 md:top-48 lg:top-0 lg:right-52 md:text-8xl 2xl:text-9xl relative z-10 text-stroke-2px text-stroke-black 
          "
        >
          El Faro
        </h1>
        <img src="/bglighthouse.png" className=" absolute md:h-[65vh] lg:h-screen w-screen top-0 left-0 z-0" />
      </div>
     
      <div className=" text-center">
        <h1 className="font-pacifico text-7xl sm:text-6xl lg:text-8xl 2xl:text-9xl text-white underline border-y-8 pb-20 pt-5 border-black md:-mt-96 lg:-mt-0">
          About Us
        </h1>
      </div>
 <Founder />
      {/* Restaurants */}
      <div className="outline-double outline-whit mt-5 bg-slate-950">
        <motion.div
          transition={{ duration: 1.3 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="p-8">
            <div className="mb-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-cinzel text-white text-center">
                El Faro
              </h2>
            </div>
            <div>
              <p className="sm:text-3xl md:text-2xl text-white dark:text-gray-500 text-center xl:text-4xl 2xl:text-5xl font-playfair">
                El Faro in Summit was established in 1981. The culinary
                offerings encompassed a diverse selection of burritos, tortas,
                and tacos, with the majority of items priced below $1. Operating
                seamlessly around the clock, seven days a week, the restaurant
                maintained this schedule until the onset of the recent pandemic,
                which necessitated a strategic adaptation. Consequently, we have
                since made the decision to operate until 2 am, ensuring a
                refined and responsive approach to the evolving circumstances.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pictures */}
        <div className="flex p-3 gap-2 2xl:gap-5">
          <div className="w-1/2">
            <div className="h-fit overflow-hidden">
              <img
                src="/frontsummit.jpg"
                alt="Left Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="h-fit overflow-hidden mt-2">
              <img
                src="/summitinside.jpg"
                alt="Left Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="w-1/2">
            <div className="h-fit overflow-hidden">
              <img
                src="/summitinside2.jpg"
                alt="Top Right Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="h-fit overflow-hidden mt-2">
              <img
                src="/summitback.jpg"
                alt="Bottom Right Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="outline-double outline-white mt-10 bg-slate-950">
        {/* Left side */}
        <motion.div
          transition={{ duration: 1.3 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className=" p-8">
            <div className="mb-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold  font-cinzel text-white text-center">
                El Faro Riverside
              </h2>
            </div>
            <div>
              <p className="sm:text-3xl md:text-2xl text-white dark:text-gray-500 text-center xl:text-4xl 2xl:text-5xl text-balance font-playfair">
                Our latest addition, El Faro 2 in Riverside, IL, commenced
                operations on November 13th, 2019. The selection of this
                location was driven by the spacious interior, accommodating over
                80 patrons, with a focus on providing an enhanced dining
                experience featuring table service and a complimentary salsa
                bar. To further elevate this dining destination, an expanded
                menu exclusive to this location was introduced. Despite the
                challenges posed by the subsequent pandemic, we swiftly adapted,
                ensuring uninterrupted service throughout this unprecedented
                period.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Left Pic*/}
        <div className=" flex p-3 gap-2 2xl:gap-5">
          <div className="w-1/2 3xl:mx-60">
            <div className=" h-fit overflow-hidden">
              <img
                src="/riverside.jpg"
                alt="Top Left Image"
                className="w-full h-full object-cover 2xl:h-[600px]  2xl:mx-auto rounded-xl"
              />
            </div>

            <div className=" h-fit overflow-hidden mt-2">
              <img
                src="/salsabar.jpg"
                alt="Bottom Left Image"
                className="w-full h-full object-cover sm:mt-0 sm:mb-0 -mb-[6px] 2xl:mx-auto 2xl:h-[600px]  3xl:w-[900px] rounded-xl"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-1/2 3xl:mx-60">
            <div>
              <div className=" h-fit overflow-hidden 2xl:pb-3">
                <img
                  src="/riverside3.jpg"
                  alt="Top Right Image"
                  className="w-full h-full object-cover -mb-[9px] sm:-mb-6 lg:-mb-[41px] xl:-mb-[52px] 2xl:mx-auto 2xl:h-[640.3px] 3xl:mr-20 rounded-xl"
                />
              </div>

              <div className=" h-fit overflow-hidden mt-2 ">
                <img
                  src="/riverside1.jpg"
                  alt="Bottom Left Image"
                  className="w-full h-full object-cover -mt-2 sm:mt-0 sm:-mb-[2px] lg:mb-2 2xl:h-[603px] 2xl:mx-auto rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar structure for other restaurants */}
      <div className="w-full px-4 py-6 outline-dashed bg-slate-950 outline-red-950 items-center max-w-6xl mx-auto mt-10">
        <FoodGrid images={images} />
      
      </div>
    </>
  );
}
