import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { Roboto } from "next/font/google";
import { ContextProvider } from "@/hooks/useGlobalState";
import { QueryProvider } from "@/hooks/queryProvider";
import { NavLogin } from "@/components";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "300", "500", "700", "900"], adjustFontFallback: true });

export const metadata = {
  title: "Nabila Beauty | Login Untuk Mengeksplore Lebih Banyak",
  description: "Nabila Beauty Menjual produk Original Terbaik Seantero Nusantara",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col items-center`}>
        <ContextProvider>
          <NextTopLoader />
          <NavLogin />
          <QueryProvider>{children}</QueryProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
