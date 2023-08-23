export default function BlogPage({ searchParams }) {
  console.log(searchParams);

  return (
    <div>
      <h1>Search Params: {JSON.stringify(searchParams)}</h1>
    </div>
  );
}
