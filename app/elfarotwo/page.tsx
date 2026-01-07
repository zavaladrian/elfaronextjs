import Image from "next/image";
import MenuTwo from "../components/MenuTwo";
import Directions from "../components/directions/Directions";
import { FaroTwo } from "../components/directions/faroDirect";

import LocationAboutOrder from "@/app/components/location/LocationAboutOrder";
import { twoservices } from "@/app/components/orderonline/onlineservices";
import LocationPhotoGrid from "@/app/components/location/LocationPhotoGrid";

const riversidePhotos = [
  { src: "/riverside.jpg", alt: "El Faro Riverside front" },
  { src: "/salsabar.jpg", alt: "El Faro Riverside salsa bar" },
  { src: "/riverside3.jpg", alt: "El Faro Riverside dining room" },
  { src: "/riverside1.jpg", alt: "El Faro Riverside interior" },
];

const hoursTwo = {
  tz: "America/Chicago",
  rules: [{ days: [2,3,4,5,6,0], open: "08:00", close: "22:00" }], // Tue–Sun
};


export default function ElFaroTwoPage() {
  const two = FaroTwo[0];

  return (
    <main>
      <section className="mx-auto max-w-full px-4 pt-10 sm:pt-14 ">
        <header className="flex flex-col items-center gap-4 pb-6 bg-black">
          <Image
            src="/faro2logo.png"
            alt="El Faro 2"
            width={220}
            height={220}
            priority
            className="h-auto w-[180px] sm:w-[220px] my-4 "
          />
        </header>
      </section>

      <LocationAboutOrder
        title="El Faro 2 (Riverside)"
        blurb="Opened November 13th, 2019. A larger dining room, table service, and expanded menu unique to this location."
        address={two.address}
        city={two.city}
        phone={two.phone}
        google={two.google}
        photo={two.photo}
        services={twoservices}
        hours={hoursTwo}
      />

      <MenuTwo />

      {/* Directions + Photos */}
      <LocationPhotoGrid
        title="Inside El Faro 2 (Riverside)"
        images={riversidePhotos}
      />
      {/* <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <Directions data={FaroTwo} className="w-full" />
        </div>
      </section> */}
    </main>
  );
}
