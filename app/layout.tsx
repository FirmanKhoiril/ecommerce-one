import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], adjustFontFallback: true });

export const metadata = {
  title: "Nabila Beauty",
  description: "Marketplace Nabila Menjual Skincare dan Produk2 Menarik Lainya",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
