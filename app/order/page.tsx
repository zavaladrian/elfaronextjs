"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

const OrderPage = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className=" bg-black px-4 py-12 text-slate-50">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

export default OrderPage;

const Heading = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center p-4">
        <span className="mb-8 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text  text-transparent font-dosis text-white text-xl sm:text-2xl md:text-4xl 3xl:text-5xl text-center">
          We do not use our own delivery drivers, so we are on some online food
          ordering platforms that allow deliveries and pickup.
        </span>
        <span className="mb-10 sm:mb-8 text-3xl sm:text-5xl 3xl:text-6xl font-playfair text-center">
          Online Pickup and Delivery Services
        </span>
      </div>
    </>
  );
};

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative z-20 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-lg sm:text-3xl 3xl:text-6xl font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-red-500 text-white"
              : "border-slate-600 bg-transparent text-slate-400"
          }`}
          key={tab}
        >
          <span className="relative z-20">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-rose-400"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(RESTURANTS).map(([tab, companys]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {companys.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ company, answer, website }: QuestionType) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? "bg-rose-950" : "bg-slate-900"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-2"
      >
        <span
          className={`text-left text-lg sm:text-3xl 3xl:text-5xl 3xl:mb-10 font-medium transition-colors ${
            open ? "text-slate-50" : "text-red-600"
          }`}
        >
          {company}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors 3xl:text-5xl ${
              open ? "text-slate-50" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400 "
      >
        <Link href={website} className="mt-1">
          <button
            className={`
          
          
          relative z-0 flex items-center gap-2 overflow-hidden rounded-xl border-[1px] 
          border-white hover:border-yellow-300 px-1 sm:px-4 py-3 sm:py-2 font-semibold
          uppercase text-white transition-all duration-500 
          sm:text-xl 3xl:text-4xl ml-2
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-yellow-500
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-black
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          hover:bg-white
          active:scale-95
          
          `}
          >
            {answer}
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

type QuestionType = {
  company: string;
  answer: string;
  website: string;
};

const TABS = ["El Faro", "El Faro 2"];

const RESTURANTS = {
  "El Faro": [
    {
      company: "UberEats",
      answer: "Delivery / Pickup Menu",
      website: "https://www.order.store/store/el-faro/WzM9BLY9Xnugvft3qtEN7Q",
    },
    {
      company: "Picking Up?",
      answer: "Driving Directions",
      website:
        "https://www.google.com/maps/dir//6136+S+Archer+Rd,+Summit,+IL+60501/@41.779631,-87.8956449,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e3701d5797193:0xceaabb6e30151bca!2m2!1d-87.8132443!2d41.7796791?entry=ttu",
    },
  ],
  "El Faro 2": [
    {
      company: "UberEats",
      answer: "Delivery / Pickup",
      website:
        "https://www.order.store/store/el-faro-%232/McE3SRgqQHuW8oRkODe6CQ",
    },
    {
      company: "Google Menu",
      answer: "Delivery / Pickup",
      website:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11j3w_q93l&partnerId=02966185379359903991&orderType=2&utm_source=share",
    },
    {
      company: "Picking Up?",
      answer: "Driving Directions",
      website:
        "https://www.google.com/maps/dir/41.7696148,-87.8058391/el+faro+2/@41.7963471,-87.8582754,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x880e354735cb0417:0x1fb4ff7deba9bd89!2m2!1d-87.8032852!2d41.8295059?entry=ttu",
    },
  ],
};
