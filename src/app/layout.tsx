import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { CursorGlow } from '@/components/cursor-glow';

export const metadata: Metadata = {
  title: 'Harsha Vardhan Dyavanapelli | AI & ML Portfolio',
  description: 'The portfolio of Harsha Vardhan Dyavanapelli, a B.Tech CSE (AI & ML) student specializing in Artificial Intelligence, Machine Learning, and Cloud technologies.',
  keywords: ['Harsha Vardhan Dyavanapelli', 'AI', 'Portfolio', 'Machine Learning', 'Next.js', 'React', 'Web Developer', 'AI Engineer', 'Google Cloud', 'GenAI'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CursorGlow />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
