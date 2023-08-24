/*
  NOTE:
  This page shows the case when search params is empty if you do not interact with it in any way on the page
*/

export default function Page({ searchParams }) {
  console.log(searchParams);

  return <div>Search Params: {JSON.stringify(searchParams)}</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
