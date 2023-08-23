export default function Page({ searchParams }) {
  return (
    <div>
      <h1>Search Params: {JSON.stringify(searchParams)}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    {
      slug: 'test',
    },
  ];
}
