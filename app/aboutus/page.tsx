// app/aboutus/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Founder from "./Founder";

import { FaroOne, FaroTwo } from "@/app/components/directions/faroDirect";

export const metadata: Metadata = {
  title: "About Us | El Faro",
  description:
    "Learn about El Faro in Summit and El Faro 2 in Riverside—our story, locations, and what we serve.",
};

type LocationCardProps = {
  place: string;
  address: string;
  city: string;
  phone: string;
  photo: string;
  google: string;
  menuHref: string;
};

function LocationCard({
  place,
  address,
  city,
  phone,
  photo,
  google,
  menuHref,
}: LocationCardProps) {
  const tel = phone.replace(/[^\d+]/g, "");

  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      <div className="relative aspect-[16/9]">
        <Image
          src={photo}
          alt={`${place} photo`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">{place}</h3>
            <p className="mt-2 text-sm text-black/70">
              {address}
              <br />
              {city}
            </p>
          </div>

          <a
            href={`tel:${tel}`}
            className="rounded-full bg-black/5 px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/10"
          >
            {phone}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={menuHref}
            className="inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            View Menu
          </Link>

          <Link
            href={google}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
    </article>
  );
}

function PhotoGrid() {
  // These should be in /public as:
  // /menu1.jpg, /menu2.jpg, ... (NOT /public/menu1.jpg)
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

export default function AboutUsPage() {
  const one = FaroOne[0];
  const two = FaroTwo[0];

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            About El Faro
          </h1>
          <p className="mt-4 max-w-3xl text-base text-black/70 sm:text-lg">
            El Faro in Summit was established in 1981. Over the years we’ve
            served generations of families with classics like burritos, tortas,
            and tacos—plus the weekend favorites you look forward to.
          </p>

          <p className="mt-4 max-w-3xl text-base text-black/70 sm:text-lg">
            El Faro 2 opened in Riverside on November 13th, 2019, expanding the
            experience with a larger dining room, table service, and an expanded
            menu unique to that location.
          </p>
        </div>
      </section>
      <Founder />

      {/* Locations */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <header className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Two Locations
          </h2>
          <p className="text-sm text-black/70 sm:text-base">
            Pick your spot—Summit or Riverside.
          </p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <LocationCard
            place={one.place}
            address={one.address}
            city={one.city}
            phone={one.phone}
            photo={one.photo}
            google={one.google}
            menuHref="/elfaro"
          />

          <LocationCard
            place={two.place}
            address={two.address}
            city={two.city}
            phone={two.phone}
            photo={two.photo}
            google={two.google}
            menuHref="/elfarotwo"
          />
        </div>
      </section>

      {/* Photos */}
      <PhotoGrid />
    </main>
  );
}
