export default function Page({ params: { slug } }: { params: { slug: any } }) {
  return <section className=" w-full container py-4 px-2 md:px-14">Test {slug}</section>;
}
