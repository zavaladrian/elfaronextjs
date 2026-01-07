import Image from "next/image";

const features = [
  {
    id: 1,
    name: "Burritos",
    description:
      "We use a flour tortilla and wrap beans, cheese, lettuce, and tomatoes with your choice of meat.",
    imageSrc: "/burrito.png",
    imageAlt: "Burritos",
  },
  {
    id: 2,
    name: "Chilaquiles",
    description:
      "Consisting of pieces of corn tortillas that are fried, we sautéed with green or red salsa, and topped with cheese, crema and onion.",
    available: "-only available at Riverside",
    imageSrc: "/chila.jpg",
    imageAlt: "Chilaquiles",
  },
  {
    id: 3,
    name: "Chile Rellenos",
    description:
      "Poblano peppers stuffed with cheese, then coated in a fluffy egg batter and fried until golden brown.",
    imageSrc: "/CR.png",
    imageAlt: "Chile Rellenos",
  },
  {
    id: 6,
    name: "Coffee de Olla",
    description:
      "This Mexican spiced coffee is made with ground coffee, cinnamon, and raw dark sugar called, piloncillo.",
    available: "-only available at Riverside",
    imageSrc: "/olla.jpg",
    imageAlt: "Coffee de Olla",
  },
  {
    id: 4,
    name: "Menudo / Pozole",
    description: "Only served on the weekend, we have our own recipe of Pozole and Menudo",
    imageSrc: "/soup.png",
    imageAlt: "Weekend Soup",
  },
  {
    id: 5,
    name: "Large Menu",
    description: "We have Tacos, Burritos, Tortas, Enchiladas, and much more! ",
    imageSrc: "/menu5.jpeg",
    imageAlt: "Collection of Food",
  },
];

export default function Featured() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="space-y-2">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Our Featured Items
        </h2>
        <p className="text-sm text-black/70 sm:text-base">
          A few favorites to start with.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.id}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={f.imageSrc}
                alt={f.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-extrabold tracking-tight">{f.name}</h3>
              <p className="mt-2 text-sm text-black/70">{f.description}</p>
              {f.available ? (
                <p className="mt-2 text-xs font-semibold text-black/50">{f.available}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
