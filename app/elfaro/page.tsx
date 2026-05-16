import type { Metadata } from "next";
import Image from "next/image";
import MenuOne from "../components/MenuOne";

export const metadata: Metadata = {
  title: "El Faro 1 (Summit) | Menu & Hours",
  description:
    "El Faro in Summit, IL — home of the giant burritos since 1981. View our full menu, hours, and order online. Open daily 6am–3am.",
  openGraph: {
    title: "El Faro 1 (Summit) | Menu & Hours",
    description:
      "El Faro in Summit, IL — home of the giant burritos since 1981. View our full menu, hours, and order online. Open daily 6am–3am.",
    url: "https://www.elfaros.com/elfaro",
    siteName: "El Faro Restaurants",
    images: [{ url: "/faro.jpg", width: 1200, height: 630, alt: "El Faro Summit" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Faro 1 (Summit) | Menu & Hours",
    description:
      "El Faro in Summit, IL — home of the giant burritos since 1981. View our full menu, hours, and order online. Open daily 6am–3am.",
    images: ["/faro.jpg"],
  },
  alternates: {
    canonical: "https://www.elfaros.com/elfaro",
  },
};
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

const schemaElFaro1 = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.elfaros.com/elfaro#restaurant",
  "name": "El Faro 1",
  "alternateName": "El Faro Summit",
  "url": "https://www.elfaros.com/elfaro",
  "image": "https://www.elfaros.com/faro.jpg",
  "description": "El Faro 1 in Summit, IL — home of the giant burritos since 1981. Serving breakfast, tacos, tortas, enchiladas, and more. Open daily 6am to 3am.",
  "servesCuisine": ["Mexican"],
  "priceRange": "$",
  "telephone": "+17085631022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6136 South Archer Road",
    "addressLocality": "Summit",
    "addressRegion": "IL",
    "postalCode": "60501",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.7796791,
    "longitude": -87.8132443
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday","Sunday"
      ],
      "opens": "06:00",
      "closes": "03:00"
    }
  ],
  "hasMenu": "https://www.elfaros.com/elfaro",
  "menu": "https://www.elfaros.com/elfaro",
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.order.store/store/el-faro/WzM9BLY9Xnugvft3qtEN7Q",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModePickUp"]
  },
  "parentOrganization": {
    "@id": "https://www.elfaros.com/#organization"
  }
};

export default function ElFaroOnePage() {
  const one = FaroOne[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaElFaro1) }}
      />
      <main>
        <section className="mx-auto max-w-full px-4 pt-10 sm:pt-14">
          <header className="flex flex-col items-center gap-4 pb-6 bg-black">
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
        <LocationPhotoGrid
          title="Inside El Faro (Summit)"
          images={summitPhotos}
        />
      </main>
    </>
  );
}