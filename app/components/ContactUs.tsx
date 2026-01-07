import Link from "next/link";
import { PhoneIcon, HomeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { FaroOne, FaroTwo } from "@/app/components/directions/faroDirect";

type Hours = {
  label: string;
  detail: string;
};

function LocationCard({
  name,
  cityLabel,
  address,
  city,
  phone,
  hours,
  menuHref,
}: {
  name: string;
  cityLabel: string;
  address: string;
  city: string;
  phone: string;
  hours: Hours[];
  menuHref: string;
}) {
  const tel = phone.replace(/[^\d+]/g, "");

  return (
    <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
      <header className="space-y-1">
        <h3 className="text-xl font-extrabold tracking-tight">{name}</h3>
        <p className="text-sm font-semibold text-black/60">{cityLabel}</p>
      </header>

      <div className="mt-5 space-y-4 text-sm text-black/75">
        <div className="flex gap-3">
          <HomeIcon className="h-5 w-5 shrink-0 text-black/60" />
          <div>
            <div className="font-semibold text-black">Address</div>
            <div className="mt-1">
              {address}
              <br />
              {city}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <PhoneIcon className="h-5 w-5 shrink-0 text-black/60" />
          <div>
            <div className="font-semibold text-black">Phone</div>
            <a className="mt-1 inline-block underline" href={`tel:${tel}`}>
              {phone}
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <ClockIcon className="h-5 w-5 shrink-0 text-black/60" />
          <div className="min-w-0">
            <div className="font-semibold text-black">Hours</div>
            <div className="mt-1 space-y-1">
              {hours.map((h) => (
                <div key={h.label} className="flex flex-wrap gap-x-2">
                  <span className="font-semibold text-black/70">{h.label}:</span>
                  <span className="text-black/70">{h.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={menuHref}
          className="inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          View the Menu
        </Link>
      </div>
    </article>
  );
}

export default function ContactUs() {
  const one = FaroOne[0];
  const two = FaroTwo[0];

  // Update these anytime (single source for hours)
  const hoursOne: Hours[] = [{ label: "Mon–Sun", detail: "6am to 3am" }];
  const hoursTwo: Hours[] = [{ label: "Tues–Sun", detail: "8am to 10pm" }];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="space-y-2">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Visit One of Our Locations
        </h2>
        <p className="text-sm text-black/70 sm:text-base">
          Pick a location to view the menu, call, or stop in.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <LocationCard
          name="El Faro 1"
          cityLabel="Summit"
          address={one.address}
          city={`${one.city} 60501`}
          phone={one.phone}
          hours={hoursOne}
          menuHref="/elfaro"
        />

        <LocationCard
          name="El Faro 2"
          cityLabel="Riverside"
          address={two.address}
          city={`${two.city} 60546`}
          phone={two.phone}
          hours={hoursTwo}
          menuHref="/elfarotwo"
        />
      </div>
    </section>
  );
}
