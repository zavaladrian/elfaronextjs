"use client";
import React from "react";
import { MenuOne } from "../components/MenuOne";
import Image from "next/image";
import Directions from "../components/directions/Directions";
import { FaroOne } from "../components/directions/faroDirect";



const ElFaroOnePage = () => {
  return (
    <>
      <div className="text-center text-white bg-black ">
          <Image
          alt="El Faro 1 logo"
          width={400}
          height={0}
          src="/faro1logo.png"
          className=" mx-auto h-48 md:h-60 lg:h-56 xl:h-72 2xl:h-96 w-auto mt-12 hover:saturate-200"
          />
      <MenuOne />
      <Directions data={FaroOne} />
    </div>
    </>
  );
};

export default ElFaroOnePage;
