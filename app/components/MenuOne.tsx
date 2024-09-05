"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";
import useMeasure from "react-use-measure";
import OrderOnline from "../components/orderonline/OrderOnline";
import { oneservices } from "../components/orderonline/onlineservices";

const MENUITEMS = {
  Breakfast: [
    {
      food: "Chorizo and Eggs Dinner",
      description:
        "Mexican sausage scrambled with three eggs served with rice and beans on the side. It comes with either corn or flour tortillas.",
      price: "8.99",
    },
    {
      food: "Mexican Style Eggs",
      description:
        "Three eggs scrambled with jalapenos, onions, and tomatoes served with rice and beans on the side. It comes with either corn or flour tortillas.",
      price: "8.99",
    },
    
    {
      food: "Steak and Eggs Dinner",
      description:
        "Our seasoned chopped steak scrambled with three eggs served with rice and beans on the side. It comes with either corn or flour tortillas.",
      price: "8.99",
    },
    {
      food: "Breakfast Burrito",
      description:
        "Your choice of steak/egg, ham and egg, chorizo/egg, chorizo/potatoes, potatoes/eggs, or potatoes/eggs/mexican sausage. Burritos come with beans, cheese, lettuce, and tomatoes. Can add a side of rice and beans for $2",
      price: "7.99",
    },
    {
      food: "Breakfast Torta",
      description:
        "Your choice of steak/egg, ham and egg, chorizo/egg, chorizo/potatoes, potatoes/eggs, or potatoes/eggs/mexican sausage. Tortas come with sour cream, beans, cheese, lettuce, and tomatoes. Can add a side of rice and beans for $2",
      price: "7.99",
    },
    {
      food: "Breakfast Taco",
      description:
        "A single taco with your choice of steak/egg, ham/egg, chorizo/egg, chorizo/potatoes, potatoes/eggs. Tacos come with either onions and cilantro, or lettuce and tomatoes. Comes with your choice of either corn or flour tortillas.",
      price: "3.50",
    },
  ],
  Burritos: [
    {
      food: "Steak Burrito",
      description:
        "Our seasoned steak wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.99",
    },
    {
      food: "Pork Burrito",
      description:
        "Our seasoned pork wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.99",
    },
    {
      food: "Chicken Burrito",
      description:
        "Our seasoned chicken wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.99",
    },
    {
      food: "Tongue Burrito",
      description:
        "Our seasoned tongue wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "8.99",
    },
    {
      food: "Breaded Steak Burrito",
      description:
        "A thin cut of steak that is breaded and fried then wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "8.99",
    },
    {
      food: "Breaded Chicken Burrito",
      description:
        "A thin cut of steak that is breaded and fried then wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "8.99",
    },
    {
      food: "Mixed Burrito",
      description:
        "Your choice of two different proteins wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.99+",
    },
    {
      food: "Steak Burrito",
      description:
        "Our seasoned steak wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.99",
    },
    {
      food: "Suizo Burrito",
      description:
        "A burrito of your choice that is layered with melted cheese with comes with beans, cheese, lettuce and tomatoes.",
      price: "9.10+",
    },
    {
      food: "Vegetarian Burrito",
      description:
        "Instead of meat, we substitute with rice, and wrap it burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "7.50",
    },
    {
      food: "Chile Relleno Burrito",
      description:
        "A cheese stuffed poblano pepper, fried, and wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes. Could add a second chile relleno for an extra $2",
      price: "8.99",
    },
    {
      food: "Chile Relleno with Meat Burrito",
      description:
        "A cheese stuffed poblano pepper fried cooked with a meat of your choice and then wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
      price: "9.99+",
    },
    {
      food: "Burrito Dinner",
      description: "A burrito of your choice served with a side of rice and beans",
      price: "9.99+",
    },
  ],
  Tortas: [
    {
      food: "Steak Torta",
      description:
        " A sandwich served on a soft roll and filled with steak and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "6.75",
    },
    {
      food: "Pork Torta",
      description:
        " A sandwich served on a soft roll and filled with pork and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "6.75",
    },
    {
      food: "Chicken Torta",
      description:
        " A sandwich served on a soft roll and filled with chicken and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "6.75",
    },
    {
      food: "Tongue Torta",
      description:
        " A sandwich served on a soft roll and filled with tongue and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "7.75",
    },
    {
      food: "Breaded Steak Torta",
      description:
        " A sandwich served on a soft roll and filled with a flatten breaded steak and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "7.75",
    },
    {
      food: "Breaded Chicken Torta",
      description:
        " A sandwich served on a soft roll and filled with a flatten breaded chicken and toppings such as crema, beans, cheese, tomatoes, and lettuce",
      price: "7.75",
    },
    {
      food: "Mixed Torta",
      description:
        "A sandwich served on a soft roll and filled with your choice of two proteins and toppings such as crema, beans, cheese, tomatoes and lettuce",
      price: "7.75+",
    },
    {
      food: "Avocado Torta",
      description:
        "A sandwich served on a soft roll and filled with avocado and toppings such as crema, beans, cheese, tomatoes and lettuce",
      price: "7.75",
    },
    {
      food: "Chile Relleno Torta",
      description:
        "A sandwich served on a soft roll and filled with a stuffed poblano pepper and toppings such as crema, beans, rice, cheese, tomatoes and lettuce",
      price: "7.99",
    },
    {
      food: "Chile Relleno with Meat Torta",
      description:
        "A sandwich served on a soft roll and filled with a stuffed poblano pepper and mixed with a protein of your choice and toppings such as crema, rice, beans, cheese, tomatoes and lettuce",
      price: "8.99+",
    },
    {
      food: "Torta Dinner",
      description: "A torta of your choice served with a side of rice and beans",
      price: "8.75+",
    },
  ],
  Tacos: [
    {
      food: "Steak Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with our seasoned chopped steak, which lettuce and tomato or onion and cilantro",
      price: "2.99",
    },
    {
      food: "Pork Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with our seasoned chopped pork, which lettuce and tomato or onion and cilantro",
      price: "2.99",
    },
    {
      food: "Chicken Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with our seasoned chicken, which lettuce and tomato or onion and cilantro",
      price: "2.99",
    },
    {
      food: "Tongue Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with tongue, which lettuce and tomato or onion and cilantro",
      price: "3.99",
    },
    {
      food: "Avocado Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with avocado, which lettuce and tomato or onion and cilantro",
      price: "2.99",
    },
    {
      food: "Chile Relleno Taco",
      description:
        "With your choice of tortilla, corn or flour, which is folded with a cheese stuffed poblano pepper, and topped with rice, beans, lettuce and tomato",
      price: "4.75",
    },
    {
      food: "Taco Dinner",
      description: "Three tacos of your choice served with a side of rice and beans",
      price: "10.99+",
    },
  ],
  Tostadas: [
    {
      food: "Steak Tostada",
      description:
        "A flat tortilla that is deep-fried that is topped with steak, beans, cheese, lettuce and tomatoes",
      price: "3.75",
    },
    {
      food: "Pork Tostada",
      description:
        "A flat tortilla that is deep-fried that is topped with pork, beans, cheese, lettuce and tomatoes",
      price: "3.75",
    },
    {
      food: "Chicken Tostada",
      description:
        "A flat tortilla that is deep-fried that is topped with chicken, beans, cheese, lettuce and tomatoes",
      price: "3.75",
    },
    {
      food: "Tongue Tostada",
      description:
        "A flat tortilla that is deep-fried that is topped with tongue, beans, cheese, lettuce and tomatoes",
      price: "4.50",
    },
    {
      food: "Avocado Tostada",
      description:
        "A flat tortilla that is deep-fried that is topped with avocado, beans, cheese, lettuce and tomatoes",
      price: "3.75",
    },
    {
      food: "Tostada Dinner",
      description:
        "Two tostadas of your choice served with a side of rice and beans",
      price: "9.50+",
    },
  ],
  Dinners: [
    {
      food: "Burrito Dinner",
      description: "A burrito of your choice served with a side of rice and beans",
      price: "9.99+",
    },
    {
      food: "Torta Dinner",
      description: "A torta of your choice served with a side of rice and beans",
      price: "8.75+",
    },
    {
      food: "Taco Dinner",
      description: "Three tacos of your choice served with a side of rice and beans",
      price: "10.99+",
    },
    {
      food: "Tostada Dinner",
      description:
        "Two tostadas of your choice served with a side of rice and beans",
      price: "9.50+",
    },
    {
      food: "Chile Rellenos Dinner",
      description:
        "Two cheese stuffed poblano peppers served with a side of rice and beans and your choice of corn or flour tortillas",
      price: "10.99+",
    },
    {
      food: "Enchiladas Dinner",
      description:
        "Three enchiladas with mole sauce served with a side of rice and beans",
      price: "8.99+",
    },
    {
      food: "Quesadilla Dinner",
      description:
        "Four cheese single tortilla quesadillas, with a choice of flour or corn tortillas, served with a side of rice and beans",
      price: "7.88",
    },
    {
      food: "Large Quesadilla Dinner",
      description:
        "A cheese quesadilla made with a burrito shell cut into four pieces served with a side of rice and beans",
      price: "8.99+",
    },
    {
      food: "Quesadilla w/ Meat Dinner ",
      description:
        "Four single tortilla quesadillas with your choice of meat served with a side of rice and beans",
      price: "8.72+",
    },
    {
      food: "Large Quesadilla w/ Meat Dinner",
      description:
        "A quesadilla made with a burrito shell with your choice of meat served with a side of rice and beans",
      price: "10.99+",
    },
    {
      food: "Milanesa de Res Dinner",
      description:
        "A thin cut of steak that is breaded and fried served with a side of rice and beans",
      price: "9.99+",
    },
    {
      food: "Milanesa de Pollo Dinner",
      description:
        "A thin cut of chicken that is breaded and fried served with a side of rice and beans",
      price: "9.99+",
    },
  ],
  Extras: [
    {
      food: "Nachos",
      description:
        "We use our house made chips topped them off with beans and cheese. Served with a side of sour cream and guacamole",
      price: "8.99",
    },
    {
      food: "Nachos with Meat",
      description:
        "We use our housemade chips topped them off with beans, cheese, and a meat of your choice. Served with a side of sour cream and guacamole",
      price: "10.99",
    },
    {
      food: "Quesadilla",
      description:
        "We use two tortillas, with your choice of flour or corn tortillas, and filled with cheese and grilled",
      price: "2.99",
    },
    {
      food: "Quesadilla with Meat",
      description:
        "We use two tortillas, with your choice of flour or corn tortillas, and filled with cheese, your choice of meat, and grilled",
      price: "3.50",
    },
    {
      food: "Large Quesadilla",
      description:
        "A large flour burrito shell covered with cheese and folded in half, and then grilled",
      price: "6.99",
    },
    {
      food: "Large Quesadilla with Meat",
      description:
        "We use our house made chips topped them off with beans and cheese. Served with a side of sour cream and guacamole",
      price: "8.50+",
    },
    {
      food: "Side of Guacamole",
      description: "A 8oz portion of our housemade guacamole",
      price: "5.00",
    },
    {
      food: "Guacamole with chips",
      description: "Chips with two side portions of guacamole",
      price: "7.50",
    },
    {
      food: "Rice",
      description: "Our housemade rice with your choice of 8 oz or 16 oz",
      price: "1.99,  $3.99",
    },
    {
      food: "Beans",
      description: "Our housemade beans with your choice of 8 oz or 16 oz",
      price: "1.99,  $3.99",
    },
    {
      food: "Chips",
      description: "A bag of our housemade deep riced tortilla chips",
      price: "8.99",
    },
    {
      food: "Salsa / Pico de Gallo",
      description: "A side portion of our own housemade salsa",
      price: "2.60",
    },
    {
      food: "Chiles Toreados",
      description: "A pair of fried jalapenos topped with salt",
      price: "1.00",
    },
  ],
  Soups: [
    {
      food: "Caldo de Res",
      description:
        "A beef soup made with a beef broth and filled with lots of vegetables. We have a dine-in portion, a 32 oz and 64 oz to-go portions.",
      price: "10.99,  $15.99",
    },
    {
      food: "Caldo de Pollo",
      description:
        "A chicken soup made with a chicken broth and filled with lots of vegetables. We have a dine-in portion, a 32 oz and 64 oz to-go portions.",
      price: "10.99,  $15.99",
    },
    {
      food: "Pozole",
      description:
        "Made with pork shoulder or shanks, red chiles, and lots of hominy corn. We have a dine-in portion, a 32 oz and 64 oz to-go portions.",
      price: "10.99,  $15.99",
    },
    {
      food: "Menudo",
      description:
        "A peppery soup filled with tripe, posole, and pig trotters. We have a dine-in portion, a 32 oz and 64 oz to-go portions.",
      price: "10.99,  $15.99",
    },
  ],
  Drinks: [
    {
      food: "16 oz Fountain Drink",
      description:
        "Your choice of RC, Diet RC, 7-UP, Dr. Pepper, Mystic Raspberry Iced Tea, Pink Lemonade, Strawberry Nehi, or Orange Nehi. You can get unlimited refills.",
      price: "2.25",
    },
    {
      food: "32 oz Fountain Drink",
      description:
        "Your choice of RC, Diet RC, 7-UP, Dr. Pepper, Mystic Raspberry Iced Tea, Pink Lemonade, Strawberry Nehi, or Orange Nehi. You can unlimited refills.",
      price: "3.99",
    },
    {
      food: "16 oz Aqua Frescas Drink",
      description:
        "Your choice between our homemade Horchata, Tamrid, or Jamica (Hibiscus). Refills are $1.",
      price: "2.75",
    },
    {
      food: "32 oz Aqua Frescas Drink",
      description:
        "Your choice between our homemade Horchata, Limeade, or Jamica (Hibiscus). Refills are $2.",
      price: "4.75",
    },
    {
      food: "Jarritos",
      description:
        "Your choice of strawberry, mandarin, fruit punch, pineapple, lime, guava, or tamarin",
      price: "2.75",
    },
    {
      food: "Bottle of Mexican Coke",
      description: "Coke in a glass bottle",
      price: "2.99",
    },
    {
      food: "Other bottled drinks",
      description: "Your choice of Topo Chico (mineral water), Sidral or Sangria.",
      price: "2.75",
    },
    {
      food: "Canned Drink",
      description: "Your choice of Coke and Diet Coke",
      price: "1.75",
    },
    {
      food: "Coffee",
      description: "Fresh daily brew of coffee with a hint of cinnamon",
      price: "2.00",
    },
    {
      food: "Coffee de Olla",
      description:
        "Specialty coffee made of ground coffee, cinnamon, and piloncillo also made daily",
      price: "4.25",
    },
  ],
};



const Heading = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-8 text-white underline bg-clip-text font-medium font-pacifico text-7xl">
          Check Out Our Menu
        </span>
        <button className="mb-8 text-5xl font-bold font-cinzel bg-white shadow-md p-2 shadow-red-700 rounded-lg" disabled>
            <p className="text-red-900">El Faro</p>
        </button>
      </div>

     
    </>
  );
};

const TABS = [
  "Breakfast",
  "Burritos",
  "Tortas",
  "Tacos",
  "Tostadas",
  "Dinners",
  "Extras",
  "Soups",
  "Drinks",
];

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-xl font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-red-500 text-slate-50"
              : "border-slate-600 bg-transparent text-slate-400"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
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
                className="absolute inset-0 z-0 bg-gradient-to-r from-rose-500 to-red-900"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

type MenuType = {
  food: string;
  description: string;
  price: string;
};


const Item = ({ food, description, price }: MenuType) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? "bg-white" : "bg-black"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span
          className={`text-left text-xl font-bold transition-colors ${
            open ? "text-rose-900" : "text-white"
          }`}
        >
          {food}
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
            className={`text-2xl transition-colors ${
              open ? "text-red-900" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "130px" : "0px",
        }}
        className={`text-black text-xl font-semibold ${ open ? "overflow-visible":"overflow-hidden" }`}
      >
        <p ref={ref}>{description}</p>
        <p ref={ref} className="mt-3">${price}</p>
      </motion.div>
    </motion.div>
  );
};

const Items = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(MENUITEMS).map(([tab, foods]) => {
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
              {foods.map((q, idx) => (
                <Item key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};




export const MenuOne = () => {
    const [selected, setSelected] = useState(TABS[0]);
  
    return (
      <section className="overflow-hidden bg-rose-950 px-4 py-12 text-slate-50 mx-96 border-white border-4 rounded-xl shadow-xl shadow-slate-200  mt-20">
        <Heading />
        <Tabs selected={selected} setSelected={setSelected} />
        <Items selected={selected} />
        <OrderOnline services={oneservices} />
      </section>
    );
  };