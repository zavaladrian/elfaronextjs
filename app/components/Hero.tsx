import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden h-96 w-auto md:w-full md:h-screen mx-auto text-center flex justify-center items-center">
      <div className="saturate-150 z-20 md:-mt-32">
        <p className="text-yellow-300  2xl:text-7xl xl:text-6xl md:text-4xl sm:text-3xl text-2xl font-lobster font-thin 2xl:mb-10 sm:mb-2">
          The Home of the Giant Burritos
        </p>
        <h1 className="text-red-600 2xl:text-8xl xl:text-7xl md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 sm:py-3 font-cinzel p-5">
          El Faro Restaurant
        </h1>
        <p className="2xl:mt-12  2xl:text-5xl xl:text-4xl md:text-2xl sm:text-3xl text-xl font-lobster text-yellow-300 py-3">
          An enduring family legacy — over 45 years in the making!
        </p>
      </div>
      <Image
        src="/skylight.jpg"
        alt="lighthouse"
        width={1000}
        height={1000}
        priority={true}
        className="absolute z-0 h-screen w-screen opacity-40 animate-pulse"
      />
    </div>
  );
};

export default Hero;
