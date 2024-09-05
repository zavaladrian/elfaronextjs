"use client";
import React from "react";
import { MenuOne } from "../components/MenuOne";
import Image from "next/image";
import Directions from "../components/directions/Directions";
import { FaroOne } from "../components/directions/faroDirect";



const ElFaroTwoPage = () => {
  return (
    <>
      <div className="text-center text-white bg-black ">
          <Image
          alt="El Faro 2 logo"
          width={400}
          height={0}
          src="/faro1logo.png"
          className=" mx-auto h-48 lg:h-56 xl:h-72 w-auto mt-12 hover:saturate-200"
          />
      <MenuOne />
      <Directions data={FaroOne} />
    </div>
    </>
  );
};

export default ElFaroTwoPage;
