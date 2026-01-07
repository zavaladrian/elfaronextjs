import Image from "next/image";
import Link from "next/link";
import type { OnlineService } from "@/app/components/orderonline/onlineservices";
import OpenNowBadge, { type HoursConfig } from "./OpenNowBadge";

type Props = {
  title: string;
  blurb: string;
  address: string;
  city: string;
  phone: string;
  google: string;
  photo: string;
  hours?: HoursConfig;
  services: OnlineService[];
};

export default function LocationAboutOrder({
  title,
  blurb,
  address,
  city,
  phone,
  google,
  photo,
  hours, // ✅ ADD THIS
  services,
}: Props) {
  const tel = phone.replace(/[^\d+]/g, "");

  return (
    <section className="w-full border-y border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Photo */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={photo}
                alt={title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy + actions */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            {/* ✅ Title + badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                {title}
              </h2>

              {hours ? <OpenNowBadge hours={hours} /> : null}
            </div>

            <p className="mt-3 text-sm text-black/70 sm:text-base">{blurb}</p>

            <div className="mt-5 text-sm text-black/70">
              <div className="font-semibold text-black">Address</div>
              <div className="mt-1">
                {address}
                <br />
                {city}
              </div>

              <div className="mt-4 font-semibold text-black">Phone</div>
              <a className="mt-1 inline-block underline" href={`tel:${tel}`}>
                {phone}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${tel}`}
                className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
              >
                Call
              </a>

              <Link
                href={google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Directions
              </Link>
            </div>

            {/* Order Online */}
            <div className="mt-8">
              <h3 className="text-lg font-extrabold tracking-tight">
                Order Online
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={s.online}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-black/5">
                      <Image
                        src={s.logo}
                        alt={`${s.name} logo`}
                        fill
                        sizes="40px"
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-bold">{s.name}</div>
                      <div className="text-xs font-semibold text-black/50">
                        Opens in new tab
                      </div>
                    </div>

                    <div className="ml-auto rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white transition group-hover:bg-red-600">
                      Order
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* end Copy + actions */}
        </div>
      </div>
    </section>
  );
}
