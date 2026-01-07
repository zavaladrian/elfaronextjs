
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Faro Restaurants",
  description: "Website made for El Faro Summit and  El Faro 2 Riverside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QFVF6773D5">
</script>
         </head>
      <body className={inter.className}>
    <Navbar />
        {children}
    <Footer />
    <Analytics />
        </body>
    </html>
  );
}
