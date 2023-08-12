import { Footer, Navbar, SearchMobile, Sidebar } from "@/components";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { Roboto } from "next/font/google";
import { ContextProvider } from "@/hooks/useGlobalState";
import { QueryProvider } from "@/hooks/queryProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "300", "500", "700", "900"], adjustFontFallback: true });

export const metadata = {
  title: "Nabila Beauty | Toko Online Nabila Beauty",
  description: "Toko Online Nabila Beauty Menjual produk Original Terbaik Seantero Nusantara",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col items-center`}>
        <ContextProvider>
          <Navbar />
          <Sidebar />
          <SearchMobile />
          <NextTopLoader />
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
