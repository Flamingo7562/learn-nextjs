export default async function MovieDetail({ params }) {
  const { id } = await params;
  console.log({ params });
  return <h1>Movies! {id}</h1>;
}
