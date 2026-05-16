import type { Metadata } from "next";
import Image from "next/image";
import MenuTwo from "../components/MenuTwo";

export const metadata: Metadata = {
  title: "El Faro 2 (Riverside) | Menu & Hours",
  description:
    "El Faro 2 in Riverside, IL — larger dining room, table service, and an expanded menu. Open Tue–Sun 8am–10pm. View the menu and order online.",
  openGraph: {
    title: "El Faro 2 (Riverside) | Menu & Hours",
    description:
      "El Faro 2 in Riverside, IL — larger dining room, table service, and an expanded menu. Open Tue–Sun 8am–10pm. View the menu and order online.",
    url: "https://www.elfaros.com/elfarotwo",
    siteName: "El Faro Restaurants",
    images: [{ url: "/faro22.png", width: 1200, height: 630, alt: "El Faro Riverside" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Faro 2 (Riverside) | Menu & Hours",
    description:
      "El Faro 2 in Riverside, IL — larger dining room, table service, and an expanded menu. Open Tue–Sun 8am–10pm. View the menu and order online.",
    images: ["/faro22.png"],
  },
  alternates: {
    canonical: "https://www.elfaros.com/elfarotwo",
  },
};
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
  rules: [{ days: [2,3,4,5,6,0], open: "08:00", close: "22:00" }],
};

const schemaElFaro2 = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.elfaros.com/elfarotwo#restaurant",
  "name": "El Faro 2",
  "alternateName": "El Faro Riverside",
  "url": "https://www.elfaros.com/elfarotwo",
  "image": "https://www.elfaros.com/faro22.png",
  "description": "El Faro 2 in Riverside, IL — opened 2019 with a larger dining room, table service, and an expanded menu. Featuring chilaquiles, coffee de olla, and giant burritos.",
  "servesCuisine": ["Mexican"],
  "priceRange": "$",
  "telephone": "+17087771347",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3422 South Harlem Ave",
    "addressLocality": "Riverside",
    "addressRegion": "IL",
    "postalCode": "60546",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.8295059,
    "longitude": -87.8032852
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday","Wednesday","Thursday",
        "Friday","Saturday","Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "hasMenu": "https://www.elfaros.com/elfarotwo",
  "menu": "https://www.elfaros.com/elfarotwo",
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.order.store/store/el-faro-%232/McE3SRgqQHuW8oRkODe6CQ",
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

export default function ElFaroTwoPage() {
  const two = FaroTwo[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaElFaro2) }}
      />
      <main>
        <section className="mx-auto max-w-full px-4 pt-10 sm:pt-14">
          <header className="flex flex-col items-center gap-4 pb-6 bg-black">
            <Image
              src="/faro2logo.png"
              alt="El Faro 2"
              width={220}
              height={220}
              priority
              className="h-auto w-[180px] sm:w-[220px] my-4"
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

        <LocationPhotoGrid
          title="Inside El Faro 2 (Riverside)"
          images={riversidePhotos}
        />
      </main>
    </>
  );
}