import Image from "next/image";

export default function LocationPhotoGrid({
  images,
  title = "Inside the restaurant",
}: {
  images: { src: string; alt: string }[];
  title?: string;
}) {
  return (
    <section className="w-full border-b border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:pb-14">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {images.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
