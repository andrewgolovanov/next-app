/*
  NOTE:
  This page shows the case when search params is empty if you do not interact with it in any way on the page

  Unfortunately this problem cannot be traced locally, as everything works fine locally, 
  so to test this problem we need to deploy this project on Vercel
*/

export default function Page({ searchParams }) {
  console.log(searchParams);

  return <div>Search Params: make sure the console logs are empty</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export const revalidate = 60;
