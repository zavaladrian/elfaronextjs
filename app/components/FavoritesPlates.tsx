import Image from "next/image";

const photos = [
  "/menu1.jpg",
  "/menu2.jpg",
  "/menu3.jpg",
  "/menu4.png",
  "/menu5.jpeg",
  "/menu6.jpg",
  "/menu7.jpg",
  "/menu8.jpg",
  "/menu9.jpg",
];

export default function FavoritesPlates() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="space-y-2">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Favorites & Plates
        </h2>
        <p className="text-sm text-black/70 sm:text-base">
          A quick look at what we’re serving.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={src}
                alt={`El Faro dish ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
