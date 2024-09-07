"use client";

const features = [
  {
    id: 1,
    name: "Burritos",
    description:
      "We use a flour tortilla and wrap beans, cheese, lettuce, and tomatoes with your choice of meat.",

    imageSrc: "/burrito.png",
    imageAlt: "burritos",
  },
  {
    id: 2,
    name: "Chilaquiles",
    description:
      "Consisting of pieces of corn tortillas that are fried, we sautéed with green or red salsa, and topped with cheese, crema and onion.",
    available: "-only available at Riverside",
    imageSrc: "/chila.jpg",
    imageAlt: "chilaquiles",
  },
  {
    id: 3,
    name: "Chile Rellenos",
    description:
      "Poblano peppers stuffed with cheese, then coated in a fluffy egg batter and fried until golden brown.",
    imageSrc: "/CR.png",
    imageAlt: "Chile Relleno",
  },
  {
    id: 5,
    name: "Coffee de Olla",
    description:
      "This Mexican spiced coffee is made with ground coffee, cinnamon, and raw dark sugar called, piloncillo.",
    available: "-only available at Riverside",
    imageSrc: "/olla.jpg",
    imageAlt: "Olla",
  },

  {
    id: 4,
    name: "Menudo / Pozole",
    description:
      "Only served on the weekend, we have our own recipe of Pozole and Menudo",
    imageSrc: "/soup.png",
    imageAlt: "Weekend Soup",
  },
];

const Featured = () => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <h3 className="leading-9 text-rose-950 text-4xl sm:text-6xl md:text-7xl text-center underline font-lobster 2xl:text-9xl">
          Our Featured Items
        </h3>
      </div>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 2xl:max-w-full">
        <div className="mt-2 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-y-0 ">
          {features.map((feature) => (
            <a className="group block" key={feature.id}>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-6  shadow-xl shadow-rose-950">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <br />
              <h2 className="mt-4 text-xl sm:text-4xl 2xl:text-6xl font-semibold font-playfair text-center text-black">
                {feature.name}
              </h2>
              <p className="mt-2 text-lg sm:text-xl 2xl:text-4xl text-center font-dosis text-gray-600 text-balance">
                {feature.description}
              </p>
              <p className="mt-2 text-lg 2xl:text-3xl sm:text-base text-center font-dosis text-rose-900 text-pretty">
                {feature.available}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
