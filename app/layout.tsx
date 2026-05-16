
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./main.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elfaros.com"),
  title: "El Faro Restaurants",
  description:
    "Family-owned Mexican restaurant with over 45 years of history. Home of the giant burritos, serving Summit and Riverside, IL.",
  openGraph: {
    title: "El Faro Restaurants",
    description:
      "Family-owned Mexican restaurant with over 45 years of history. Home of the giant burritos, serving Summit and Riverside, IL.",
    url: "https://www.elfaros.com",
    siteName: "El Faro Restaurants",
    images: [{ url: "/skylight.jpg", width: 1200, height: 630, alt: "El Faro Restaurant" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Faro Restaurants",
    description:
      "Family-owned Mexican restaurant with over 45 years of history. Home of the giant burritos, serving Summit and Riverside, IL.",
    images: ["/skylight.jpg"],
  },
  alternates: {
    canonical: "https://www.elfaros.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QFVF6773D5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QFVF6773D5');
          `}
        </Script>
      </body>
    </html>
  );
}
