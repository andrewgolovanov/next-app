/*
  NOTE:
  This page shows the case when search parameters become available
*/

export default function Page({ searchParams }) {
  console.log(searchParams);

  // It is enough just to start interacting with the searchParams object
  return <div>Search Params: {JSON.stringify(searchParams)}</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
