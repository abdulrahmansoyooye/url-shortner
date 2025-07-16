'use client';
import { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ShortenedUrl from './ShortenedUrl';

export default function InputForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/shorten`, { url });
      setShortUrl(`${window.location.origin}/${res.data.shortCode}`);
    } catch {
      alert('Invalid URL or service error.');
    }
  };

  return (
    <div className="w-full max-w-xl space-y-4">
      <Input
        placeholder="https://www.example.com/very/long/link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button onClick={handleSubmit} className="w-full">
        Shorten URL
      </Button>
      {shortUrl && <ShortenedUrl shortUrl={shortUrl} />}
    </div>
  );
}
