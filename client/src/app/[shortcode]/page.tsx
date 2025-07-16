import { redirect } from 'next/navigation';

export default async function RedirectPage({ params }: { params: { shortCode: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/shorten/${params.shortCode}`);
  if (!res.ok) return redirect('/404');

  const data = await res.json();
  redirect(data.url);
}
