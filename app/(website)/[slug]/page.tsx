export default function Page({ searchParams }) {
  console.log(searchParams);

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

const dynamicParams = false;
export { dynamicParams };
