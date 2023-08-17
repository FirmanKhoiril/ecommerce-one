export default function page({ params: { searchTerm } }: { params: { searchTerm: string } }) {
  return <section className="">page {searchTerm}</section>;
}
