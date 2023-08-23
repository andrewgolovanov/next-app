export default function Page({ searchParams }) {
  console.log(searchParams);

  return <div>test</div>;
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export const revalidate = 60;

export const dynamic = 'force-dynamic';
