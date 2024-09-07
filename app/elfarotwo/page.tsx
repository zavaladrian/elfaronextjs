"use client";
import React from "react";
import { MenuTwo } from "../components/MenuTwo";
import Image from "next/image";
import Directions from "../components/directions/Directions";
import { FaroTwo } from "../components/directions/faroDirect";



const ElFaroTwoPage = () => {
  return (
    <>
      <div className="text-center text-white bg-black ">
          <Image
          alt="El Faro 2 logo"
          width={400}
          height={0}
          src="/faro2logo.png"
          className=" mx-auto h-48 md:h-60 lg:h-56 xl:h-72 2xl:h-96 w-auto mt-12 hover:saturate-200"
          />
      <MenuTwo />
      <Directions data={FaroTwo} />
    </div>
    </>
  );
};

export default ElFaroTwoPage;
