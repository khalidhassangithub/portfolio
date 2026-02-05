
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khalid Hassan Suliman | Data Science & Android Expert',
  description: 'Architecting intelligent, data-driven systems and high-performance Android experiences. Explore the portfolio of Khalid Hassan Suliman.',
  keywords: ['Data Science', 'Android Development', 'Machine Learning', 'AI', 'Kotlin', 'Python', 'Portfolio'],
  openGraph: {
    title: 'Khalid Hassan Suliman | Portfolio',
    description: 'Data Science Engineer & Android Developer based in the futuristic tech landscape.',
    url: 'https://khalidhassan.dev', // Placeholder for actual domain
    siteName: 'Khalid Hassan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalid Hassan Suliman | Portfolio',
    description: 'Data Science Engineer & Android Developer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
