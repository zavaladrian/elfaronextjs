// app/order-online/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { FaroOne, FaroTwo } from "@/app/components/directions/faroDirect";

export const metadata: Metadata = {
  title: "Order Online | El Faro",
  description:
    "Order El Faro online for pickup or delivery. Choose your location: Summit (El Faro 1) or Riverside (El Faro 2).",
};

type Service = {
  name: string;
  href: string;
  note?: string;
};

function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={s.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-extrabold tracking-tight">{s.name}</div>
          {s.note ? (
            <p className="mt-1 text-sm text-black/70">{s.note}</p>
          ) : null}
        </div>
        
      </div>
      <div className="mt-4 inline-flex rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition group-hover:bg-red-600">
        Order now
      </div>
    </Link>
  );
}

function LocationBlock({
  title,
  address,
  city,
  phone,
  google,
  services,
}: {
  title: string;
  address: string;
  city: string;
  phone: string;
  google: string;
  services: Service[];
}) {
  const tel = phone.replace(/[^\d+]/g, "");
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-black/70">
            {address}
            <br />
            {city}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`tel:${tel}`}
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Call
          </a>
          <Link
            href={google}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold hover:bg-black/5"
          >
            Directions
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <ServiceCard key={s.name} s={s} />
        ))}
      </div>
    </section>
  );
}

// ✅ Plug your real links here (or we can import from onlineservices.ts)
const servicesOne: Service[] = [
  { name: "Uber Eats", href: "https://...", note: "Delivery & pickup" },
  
];

const servicesTwo: Service[] = [
  { name: "Uber Eats", href: "https://...", note: "Delivery & pickup" },
  
];

export default function OrderOnlinePage() {
  const one = FaroOne[0];
  const two = FaroTwo[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Order Online
        </h1>
        <p className="max-w-2xl text-sm text-black/70 sm:text-base">
          Choose your location below to order for pickup or delivery.
        </p>
      </header>

      <div className="mt-8 space-y-6">
        <LocationBlock
          title="El Faro 1 (Summit)"
          address={one.address}
          city={one.city}
          phone={one.phone}
          google={one.google}
          services={servicesOne}
        />
        <LocationBlock
          title="El Faro 2 (Riverside)"
          address={two.address}
          city={two.city}
          phone={two.phone}
          google={two.google}
          services={servicesTwo}
        />
      </div>
    </main>
  );
}
