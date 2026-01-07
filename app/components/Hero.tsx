import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/skylight.jpg"
          alt="El Faro food and dining"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-white/85">
            The Home of the Giant Burritos
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            El Faro Restaurant
          </h1>

          <p className="mt-4 text-base text-white/85 sm:text-lg">
            An enduring family legacy — over 45 years in the making.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/elfaro"
              className="inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              View Summit Menu
            </Link>

            <Link
              href="/elfarotwo"
              className="inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/15"
            >
              View Riverside Menu
            </Link>
          </div>

          <p className="mt-5 text-xs font-semibold text-white/70">
            Pickup & delivery links are on each location page.
          </p>
        </div>
      </div>
    </section>
  );
}
