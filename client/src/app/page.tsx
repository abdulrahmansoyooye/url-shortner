import InputForm from '@/components/InputForm';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">🔗 URL Shortener</h1>
      <p className="text-gray-600 mb-8">Paste your long link below to get a short, shareable one</p>
      <InputForm />
    </main>
  );
}
