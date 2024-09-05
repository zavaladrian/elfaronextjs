"use client";

import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
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


import BGLight from "/bglighthouse.png";
import NoBGLight from "/wobglighthouse.png";

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
    const ref = useRef<HTMLDivElement>(null); // Add types for the ref
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
    const shouldReduceMotion = useReducedMotion(); // Type is inferred
  

  return (
    <>
    <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center mt-20 xl:mt-24 "
      >
        <motion.h1
          style={{ y: textY }}
          className="font-bold font-pacifico text-red-900 sm:right-44 right-52 text-7xl md:text-8xl relative z-10 text-stroke-2px text-stroke-black 
          hidden sm:block"
        >
          El Faro
        </motion.h1>

        <motion.div
          className="absolute inset-0 top-3 z-0 bg-y "
          style={{
            backgroundImage: "/bglighthouse.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 top-3 z-20"
          style={{
            backgroundImage: "/wobglighthouse.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    <Founder />
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <h1 className="font-pacifico text-3xl sm:text-6xl lg:text-8xl text-white">
          Where it all began
        </h1>
      </motion.div>

      {/* Restaurants */}
      <div className="outline-double outline-white mt-10 bg-slate-950">
        <motion.div
          transition={{ duration: 1.3 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="p-8">
            <div className="mb-4">
              <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold font-cinzel text-white text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                El Faro
              </motion.h2>
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
        <div className="flex p-3 gap-2">
          <AnimatePresence>
            <div className="w-1/2">
              <motion.div
                className="h-fit overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src="/frontsummit.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
              <motion.div
                className="h-fit overflow-hidden mt-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src="/summitinside.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </AnimatePresence>

          <div className="w-1/2">
            <motion.div
              className="h-fit overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src="/summitinside2.jpg"
                alt="Top Right Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              className="h-fit overflow-hidden mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src="/summitback.jpg"
                alt="Bottom Right Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
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
              <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold  font-cinzel text-white text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                El Faro Riverside
              </motion.h2>
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
        <div className=" flex p-3 gap-2 2xl:gap-5 3xl:gap-0">
          <div className="w-1/2 3xl:mx-60">
            <motion.div
              className=" h-fit overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src="/riverside.jpg"
                alt="Top Left Image"
                className="w-full h-full object-cover 2xl:h-[600px]  2xl:mx-auto rounded-xl"
              />
            </motion.div>

            <motion.div
              className=" h-fit overflow-hidden mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src="/salsabar.jpg"
                alt="Bottom Left Image"
                className="w-full h-full object-cover sm:mt-0 sm:mb-0 -mb-[6px] 2xl:mx-auto 2xl:h-[600px]  3xl:w-[900px] rounded-xl"
              />
            </motion.div>
          </div>

          {/* Right side */}
          <div className="w-1/2 3xl:mx-60">
            <div>
              <motion.div
                className=" h-fit overflow-hidden 2xl:pb-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src="/riverside3.jpg"
                  alt="Top Right Image"
                  className="w-full h-full object-cover -mb-[9px] sm:-mb-6 lg:-mb-[41px] xl:-mb-[52px] 2xl:mx-auto 2xl:h-[640.3px] 3xl:mr-20 rounded-xl"
                />
              </motion.div>

              <motion.div
                className=" h-fit overflow-hidden mt-2 "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src="/riverside1.jpg"
                  alt="Bottom Left Image"
                  className="w-full h-full object-cover -mt-2 sm:mt-0 sm:-mb-[2px] lg:mb-2 2xl:h-[603px] 2xl:mx-auto rounded-xl "
                />
              </motion.div>
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
