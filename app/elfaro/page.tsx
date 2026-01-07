import Image from "next/image";
import MenuOne from "../components/MenuOne";
import Directions from "../components/directions/Directions";
import { FaroOne } from "../components/directions/faroDirect";

import LocationAboutOrder from "@/app/components/location/LocationAboutOrder";
import { oneservices } from "@/app/components/orderonline/onlineservices";
import LocationPhotoGrid from "@/app/components/location/LocationPhotoGrid";

const summitPhotos = [
  { src: "/frontsummit.jpg", alt: "El Faro Summit front" },
  { src: "/summitinside.jpg", alt: "El Faro Summit interior" },
  { src: "/summitinside2.jpg", alt: "El Faro Summit interior seating" },
  { src: "/summitback.jpg", alt: "El Faro Summit back area" },
];

const hoursOne = {
  tz: "America/Chicago",
  rules: [{ days: [0,1,2,3,4,5,6], open: "06:00", close: "03:00" }],
};


export default function ElFaroOnePage() {
  const one = FaroOne[0];

  return (
    <main>
      <section className="mx-auto max-w-full px-4 pt-10 sm:pt-14">
        <header className="flex flex-col items-center gap-4 pb-6 bg-black ">
          <Image
            src="/elfaro1logo.png"
            alt="El Faro 1"
            width={220}
            height={220}
            priority
            className="h-auto w-[180px] sm:w-[220px] my-4"
          />
        </header>
      </section>

      <LocationAboutOrder
        title="El Faro 1 (Summit)"
        blurb="Established in 1981. Serving classics like burritos, tortas, tacos, and weekend favorites."
        address={one.address}
        city={one.city}
        phone={one.phone}
        google={one.google}
        photo={one.photo}
        services={oneservices}
        hours={hoursOne}
      />
<MenuOne />
      {/* Full-width photo grid under About/Order */}
      <LocationPhotoGrid
        title="Inside El Faro (Summit)"
        images={summitPhotos}
      />

      {/* Menu + Directions below */}
      
     {/* <section className="w-full bg-white">
  <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
    <Directions data={FaroOne} className="w-full" />
  </div>
</section> */}

    </main>
  );
}
