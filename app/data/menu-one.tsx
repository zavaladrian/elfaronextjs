// app/data/menu-one.ts
import type { MenuConfig } from "@/app/components/menu/menu-types";

export const menuOne: MenuConfig = {
  heading: "Check Out Our Menu",
  subheading: "El Faro 1",
  categories: [
    {
      id: "Breakfast",
      title: "Breakfast",
      items: [
        {
          food: "Chorizo and Eggs Dinner",
          description:
            "Mexican sausage scrambled with three eggs served with rice and beans on the side. It comes with either corn or flour tortillas.",
          price: "12.99",
        },
        {
          food: "Mexican Style Eggs",
          description:
            "Three eggs scrambled with jalapenos, onions, and tomatoes served with rice and beans on the side. It comes with either corn or flour tortillas.",
          price: "9.99",
        },
        {
          food: "Steak and Eggs Dinner",
          description:
            "Our seasoned chopped steak scrambled with three eggs served with rice and beans on the side. It comes with either corn or flour tortillas.",
          price: "12.99",
        },
        {
          food: "Ham and Eggs Dinner",
          description:
            "Ham scrambled with three eggs served with rice and beans on the side. It comes with either corn or flour tortillas.",
          price: "12.99",
        },
        {
          food: "Breakfast Burrito",
          description:
            "Your choice of steak/egg, ham and egg, chorizo/egg, chorizo/potatoes, potatoes/eggs, or potatoes/eggs/mexican sausage. Burritos come with beans, cheese, lettuce, and tomatoes. Can add a side of rice and beans for $2",
          price: "9.99",
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
          price: "4.00",
        },
      ],
    },

    {
      id: "Burritos",
      title: "Burritos",
      items: [
        {
          food: "Steak Burrito",
          description:
            "Our seasoned steak wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "8.99",
        },
        {
          food: "Pork Burrito",
          description:
            "Our seasoned pork wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "8.99",
        },
        {
          food: "Chicken Burrito",
          description:
            "Our seasoned chicken wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "8.99",
        },
        {
          food: "Tongue Burrito",
          description:
            "Our seasoned tongue wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "10.99",
        },
        {
          food: "Breaded Steak Burrito",
          description:
            "A thin cut of steak that is breaded and fried then wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "10.99",
        },
        {
          food: "Mixed Burrito",
          description:
            "Your choice of two different proteins wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes. Price depends on meat choices",
          price: "11.99+",
        },
        {
          food: "Suizo Burrito",
          description:
            "A burrito of your choice that is layered with melted cheese with comes with beans, cheese, lettuce and tomatoes.",
          price: "11.98+",
        },
        {
          food: "Vegetarian Burrito",
          description:
            "Instead of meat, we substitute with rice, and wrap it burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "8.50",
        },
        {
          food: "Chile Relleno Burrito",
          description:
            "A cheese stuffed poblano pepper, fried, and wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes. Could add a second chile relleno for an extra $2",
          price: "10.99",
        },
        {
          food: "Chile Relleno with Meat Burrito",
          description:
            "A cheese stuffed poblano pepper fried cooked with a meat of your choice and then wrapped in a burrito shell that comes with beans, cheese, lettuce and tomatoes.",
          price: "12.99+",
        },
      ],
    },

    {
      id: "Tortas",
      title: "Tortas",
      items: [
        {
          food: "Steak Torta",
          description:
            " A sandwich served on a soft roll and filled with steak and toppings such as crema, beans, cheese, tomatoes, and lettuce",
          price: "7.99",
        },
        {
          food: "Pork Torta",
          description:
            " A sandwich served on a soft roll and filled with pork and toppings such as crema, beans, cheese, tomatoes, and lettuce",
          price: "7.99",
        },
        {
          food: "Chicken Torta",
          description:
            " A sandwich served on a soft roll and filled with chicken and toppings such as crema, beans, cheese, tomatoes, and lettuce",
          price: "7.99",
        },
        {
          food: "Tongue Torta",
          description:
            " A sandwich served on a soft roll and filled with tongue and toppings such as crema, beans, cheese, tomatoes, and lettuce",
          price: "10.50",
        },
        {
          food: "Breaded Steak Torta",
          description:
            " A sandwich served on a soft roll and filled with a flatten breaded steak and toppings such as crema, beans, cheese, tomatoes, and lettuce",
          price: "10.50",
        },
        {
          food: "Mixed Torta",
          description:
            "A sandwich served on a soft roll and filled with your choice of two proteins and toppings such as crema, beans, cheese, tomatoes and lettuce",
          price: "9.99+",
        },
        {
          food: "Avocado Torta",
          description:
            "A sandwich served on a soft roll and filled with avocado and toppings such as crema, beans, cheese, tomatoes and lettuce",
          price: "7.99",
        },
        {
          food: "Chile Relleno Torta",
          description:
            "A sandwich served on a soft roll and filled with a stuffed poblano pepper and toppings such as crema, beans, rice, cheese, tomatoes and lettuce",
          price: "9.99",
        },
        {
          food: "Chile Relleno with Meat Torta",
          description:
            "A sandwich served on a soft roll and filled with a stuffed poblano pepper and mixed with a protein of your choice and toppings such as crema, rice, beans, cheese, tomatoes and lettuce",
          price: "12.99+",
        },
      ],
    },

    {
      id: "Tacos",
      title: "Tacos",
      items: [
        {
          food: "Steak Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with our seasoned chopped steak, which lettuce and tomato or onion and cilantro",
          price: "3.50",
        },
        {
          food: "Pork Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with our seasoned chopped pork, which lettuce and tomato or onion and cilantro",
          price: "3.50",
        },
        {
          food: "Chicken Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with our seasoned chicken, which lettuce and tomato or onion and cilantro",
          price: "3.50",
        },
        {
          food: "Tongue Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with tongue, which lettuce and tomato or onion and cilantro",
          price: "4.50",
        },
        {
          food: "Avocado Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with avocado, which lettuce and tomato or onion and cilantro",
          price: "3.00",
        },
        {
          food: "Chile Relleno Taco",
          description:
            "With your choice of tortilla, corn or flour, which is folded with a cheese stuffed poblano pepper, and topped with rice, beans, lettuce and tomato",
          price: "5.50",
        },
      ],
    },

    {
      id: "Tostadas",
      title: "Tostadas",
      items: [
        {
          food: "Steak Tostada",
          description:
            "A flat tortilla that is deep-fried that is topped with steak, beans, cheese, lettuce and tomatoes",
          price: "3.99",
        },
        {
          food: "Pork Tostada",
          description:
            "A flat tortilla that is deep-fried that is topped with pork, beans, cheese, lettuce and tomatoes",
          price: "3.99",
        },
        {
          food: "Chicken Tostada",
          description:
            "A flat tortilla that is deep-fried that is topped with chicken, beans, cheese, lettuce and tomatoes",
          price: "3.99",
        },
        {
          food: "Tongue Tostada",
          description:
            "A flat tortilla that is deep-fried that is topped with tongue, beans, cheese, lettuce and tomatoes",
          price: "4.99",
        },
        {
          food: "Avocado Tostada",
          description:
            "A flat tortilla that is deep-fried that is topped with avocado, beans, cheese, lettuce and tomatoes",
          price: "3.99",
        },
      ],
    },

    {
      id: "Dinners",
      title: "Dinners",
      items: [
        {
          food: "Burrito Dinner",
          description: "A burrito of your choice served with a side of rice and beans",
          price: "12.99+",
        },
        {
          food: "Torta Dinner",
          description: "A torta of your choice served with a side of rice and beans",
          price: "11.99+",
        },
        {
          food: "Taco Dinner",
          description: "Three tacos of your choice served with a side of rice and beans",
          price: "13.50+",
        },
        {
          food: "Tostada Dinner",
          description:
            "Two tostadas of your choice served with a side of rice and beans",
          price: "10.99+",
        },
        {
          food: "Chile Rellenos Dinner",
          description:
            "Two cheese stuffed poblano peppers served with a side of rice and beans and your choice of corn or flour tortillas",
          price: "11.99",
        },
        {
          food: "Enchiladas Dinner",
          description:
            "Three enchiladas with your choice of red or mole sauce served with a side of rice and beans",
          price: "12.99",
        },
        {
          food: "Quesadilla Dinner",
          description:
            "Four cheese single tortilla quesadillas, with a choice of flour or corn tortillas, served with a side of rice and beans",
          price: "10.99",
        },
        {
          food: "Large Quesadilla Dinner",
          description:
            "A cheese quesadilla made with a burrito shell cut into four pieces served with a side of rice and beans",
          price: "10.99+",
        },
        {
          food: "Quesadilla w/ Meat Dinner ",
          description:
            "Four single tortilla quesadillas with your choice of meat served with a side of rice and beans",
          price: "10.50+",
        },
        {
          food: "Large Quesadilla w/ Meat Dinner",
          description:
            "A quesadilla made with a burrito shell with your choice of meat served with a side of rice and beans",
          price: "12.99+",
        },
        {
          food: "Milanesa de Res Dinner",
          description:
            "A thin cut of steak that is breaded and fried served with a side of rice and beans",
          price: "10.99+",
        },
      ],
    },

    {
      id: "Extras",
      title: "Extras",
      items: [
        {
          food: "Nachos",
          description:
            "We use our house made chips topped them off with beans and cheese. Served with a side of sour cream and guacamole",
          price: "9.99",
        },
        {
          food: "Nachos with Meat",
          description:
            "We use our house made chips topped them off with beans, cheese, and a meat of your choice. Served with a side of sour cream and guacamole",
          price: "11.99",
        },
        {
          food: "Quesadilla",
          description:
            "We use two tortillas, with your choice of flour or corn tortillas, and filled with cheese and grilled",
          price: "3.50",
        },
        {
          food: "Quesadilla with Meat",
          description:
            "We use two tortillas, with your choice of flour or corn tortillas, and filled with cheese, your choice of meat, and grilled",
          price: "4.00",
        },
        {
          food: "Large Quesadilla",
          description:
            "A large flour burrito shell covered with cheese and folded in half, and then grilled",
          price: "8.00",
        },
        {
          food: "Large Quesadilla with Meat",
          description:
            "We use our house made chips topped them off with beans and cheese. Served with a side of sour cream and guacamole",
          price: "9.50+",
        },
        {
          food: "Side of Guacamole",
          description: "A 8oz portion of our housemade guacamole",
          price: "6.00",
        },
        {
          food: "Guacamole with chips",
          description: "Chips with two side portions of guacamole",
          price: "8.50",
        },
        {
          food: "Rice",
          description: "Our housemade rice with your choice of 8 oz or 16 oz",
          price: "2.50,  $4.50",
        },
        {
          food: "Beans",
          description: "Our housemade beans with your choice of 8 oz or 16 oz",
          price: "2.50,  $4.50",
        },
        {
          food: "Chips",
          description: "A bag of our housemade deep riced tortilla chips",
          price: "2.75",
        },
        {
          food: "Salsa / Pico de Gallo",
          description: "A side portion of our own housemade salsa",
          price: "2.00, 3.25",
        },
        {
          food: "Chiles Toreados",
          description: "A pair of fried jalapenos topped with salt",
          price: "1.00",
        },
      ],
    },

    {
      id: "Soups",
      title: "Soups",
      items: [
        {
          food: "Pozole",
          description:
            "Made with pork shoulder or shanks, red chiles, and lots of hominy corn. We have a dine-in portion, a 32 oz and 64 oz to-go portions. Available only on the weekends.",
          price: "12.99,  $17.00",
        },
        {
          food: "Menudo",
          description:
            "A peppery soup filled with tripe, posole, and pig trotters. We have a dine-in portion, a 32 oz and 64 oz to-go portions. Available only on the weekends.",
          price: "12.99,  $17.00",
        },
      ],
    },

    {
      id: "Drinks",
      title: "Drinks",
      items: [
        {
          food: "16 oz Fountain Drink",
          description:
            "Your choice of RC, Diet RC, 7-UP, Dr. Pepper, Mystic Raspberry Iced Tea, Pink Lemonade, Strawberry Nehi, or Orange Nehi. You can get unlimited refills.",
          price: "2.50",
        },
        {
          food: "16 oz Aqua Frescas Drink",
          description:
            "Your choice between our homemade Horchata, Tamrid, or Jamica (Hibiscus). Refills are $1.",
          price: "3.00",
        },
        {
          food: "Jarritos",
          description:
            "Your choice of strawberry, mandarin, fruit punch, pineapple, lime, guava, or tamarin",
          price: "3.00",
        },
        {
          food: "Bottle of Mexican Coke",
          description: "Coke in a glass bottle",
          price: "3.25",
        },
        {
          food: "Other bottled drinks",
          description: "Your choice of Topo Chico (mineral water), Sidral or Sangria.",
          price: "3.00",
        },
        {
          food: "Coffee",
          description: "Fresh daily brew of coffee with a hint of cinnamon",
          price: "2.50",
        },
      ],
    },
  ],
};
