import Image from "next/image";
import Link from "next/link";

export interface Feature {
  id: number;
  place: string;
  address: string;
  city: string;
  phone: string;

  downtown: string;
  west: string;
  east: string;
  north: string;
  south: string;

  google: string;
  photo: string;
}

interface DirectionsProps {
  data: Feature[];
  showHeader?: boolean;
  wrap?: boolean;
  className?: string;
  compact?: boolean;
}

function cn(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Directions({
  data,
  showHeader = true,
  wrap = true,
  className,
  compact = false,
}: DirectionsProps) {
  const content = (
    <>
      {showHeader ? (
        <header className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Come Visit Our Location
          </h2>
          <p className="text-sm text-black/70 sm:text-base">
            Directions to our restaurant and quick links for Google Maps.
          </p>
        </header>
      ) : null}

      <div className={cn(showHeader && "mt-8")}>
        <div className={className ?? "grid gap-6 lg:grid-cols-2"}>
          {data.map((feature) => {
            const tel = feature.phone.replace(/[^\d+]/g, "");

            return (
              <article
                key={feature.id}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={feature.photo}
                    alt={`${feature.place} photo`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight">
                        {feature.place}
                      </h3>
                      <p className="mt-2 text-sm text-black/70">
                        {feature.address}
                        <br />
                        {feature.city}
                      </p>
                    </div>

                    <a
                      href={`tel:${tel}`}
                      className="rounded-full bg-black/5 px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/10"
                    >
                      {feature.phone}
                    </a>
                  </div>

                  {/* Compact mode: collapse long directions */}
                  {compact ? (
                    <details className="group mt-5 rounded-xl border border-black/10 bg-black/[0.02] p-4">
                      <summary className="cursor-pointer list-none text-sm font-semibold text-black/80 [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">
                          Show driving directions
                        </span>
                        <span className="hidden group-open:inline">
                          Hide driving directions
                        </span>
                      </summary>

                      <div className="mt-4 space-y-4 text-sm text-black/75">
                        <div>
                          <div className="font-bold text-black">
                            From Downtown Chicago
                          </div>
                          <p className="mt-1">{feature.downtown}</p>
                        </div>
                        <div>
                          <div className="font-bold text-black">West Suburbs</div>
                          <p className="mt-1">{feature.west}</p>
                        </div>
                        <div>
                          <div className="font-bold text-black">East Suburbs</div>
                          <p className="mt-1">{feature.east}</p>
                        </div>
                        <div>
                          <div className="font-bold text-black">North Suburbs</div>
                          <p className="mt-1">{feature.north}</p>
                        </div>
                        <div>
                          <div className="font-bold text-black">South Suburbs</div>
                          <p className="mt-1">{feature.south}</p>
                        </div>
                      </div>
                    </details>
                  ) : (
                    <div className="mt-5 space-y-4 text-sm text-black/75">
                      <div>
                        <div className="font-bold text-black">
                          From Downtown Chicago
                        </div>
                        <p className="mt-1">{feature.downtown}</p>
                      </div>
                      <div>
                        <div className="font-bold text-black">West Suburbs</div>
                        <p className="mt-1">{feature.west}</p>
                      </div>
                      <div>
                        <div className="font-bold text-black">East Suburbs</div>
                        <p className="mt-1">{feature.east}</p>
                      </div>
                      <div>
                        <div className="font-bold text-black">North Suburbs</div>
                        <p className="mt-1">{feature.north}</p>
                      </div>
                      <div>
                        <div className="font-bold text-black">South Suburbs</div>
                        <p className="mt-1">{feature.south}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <Link
                      href={feature.google}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
                    >
                      Open Google Driving Directions
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );

  if (!wrap) return content;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">{content}</section>
  );
}
