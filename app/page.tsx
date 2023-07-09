import { Card, Hero } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col w-full p-2 px-2 md:px-4">
      <Hero />
      <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
