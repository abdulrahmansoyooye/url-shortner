export default async function StatsPage({ params }: { params: { shortCode: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/shorten/${params.shortCode}/stats`);
  if (!res.ok) return <p className="text-red-500">Stats not found</p>;

  const data = await res.json();

  return (
    <div className="max-w-xl mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">📊 URL Stats</h1>
      <div className="p-4 bg-white rounded shadow border space-y-2">
        <p><strong>Original URL:</strong> <a href={data.url} className="underline text-blue-600">{data.url}</a></p>
        <p><strong>Short Code:</strong> {data.shortCode}</p>
        <p><strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(data.updatedAt).toLocaleString()}</p>
        <p><strong>Clicks:</strong> {data.accessCount}</p>
      </div>
    </div>
  );
}
