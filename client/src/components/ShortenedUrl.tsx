import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShortenedUrl({ shortUrl }: { shortUrl: string }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="bg-white p-4 rounded-lg border shadow flex items-center justify-between">
      <a href={shortUrl} className="text-blue-600 underline truncate" target="_blank" rel="noreferrer">
        {shortUrl}
      </a>
      <Button size="sm" variant="ghost" onClick={copyToClipboard}>
        <Copy className="w-4 h-4" />
      </Button>
    </div>
  );
}
