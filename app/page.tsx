import Hero from "./components/Hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Founder from "./aboutus/Founder";
import Directions from "./components/directions/Directions";
import { FaroOne } from "./components/directions/faroDirect";
import { FaroTwo } from "./components/directions/faroDirect";

const Featured = dynamic(() => import("./components/Featured"), { ssr: true, suspense: true });
const ContactUs = dynamic(() => import("./components/ContactUs"), { ssr: true, suspense: true });

function FeaturedFallback() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="h-8 w-40 animate-pulse rounded bg-black/10" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-xl bg-black/10" />
        ))}
      </div>
    </section>
  );
}

function ContactFallback() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="h-8 w-44 animate-pulse rounded bg-black/10" />
      <div className="mt-6 h-56 animate-pulse rounded-xl bg-black/10" />
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<FeaturedFallback />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<ContactFallback />}>
        <ContactUs />
      </Suspense>
    <section className="w-full bg-white">
  <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
    <header className="space-y-2">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Come Visit Our Locations
      </h2>
      <p className="text-sm text-black/70 sm:text-base">
        Find both locations below — tap for directions, call, or open Google Maps.
      </p>
    </header>

    <div className="mt-8">
      <Directions
        data={[...FaroOne, ...FaroTwo]}
        showHeader={false}
        wrap={false}
        compact
        className="grid gap-6 lg:grid-cols-2"
      />
    </div>
  </div>
</section>

 
      <Founder />
    </main>
  );
}
