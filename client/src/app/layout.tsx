import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'URL Shortener',
  description: 'Minimal URL shortener service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-gray-50 text-gray-900')}>
        {children}
      </body>
    </html>
  );
}
