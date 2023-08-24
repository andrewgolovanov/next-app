/*
  NOTE:
  This page shows the case when search params is empty if you do not interact with it in any way on the page

  Unfortunately this problem cannot be traced locally, as everything works fine locally, 
  so to test this problem we need to deploy this project on Vercel
*/

export default function Page({ searchParams }) {
  console.log(searchParams);

  return <div>Search Params: {searchParams}</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
