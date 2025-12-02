import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ambitious Realism | AI Consultancy & Creative Studio',
  description: 'Modern SaaS landing page for AI consultancy and creative studio specializing in dashboard design, workflow automation, and ambitious digital solutions',
  keywords: ['AI consultancy', 'SaaS landing page', 'dashboard design', 'workflow automation', 'digital solutions', 'creative studio'],
  authors: [{ name: 'Ambitious Realism', url: 'https://ambitiousrealism.com' }],
  creator: 'Ambitious Realism',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5
  },
  themeColor: '#0a0a0f',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Ambitious Realism | AI Consultancy & Creative Studio',
    description: 'Modern SaaS landing page for AI consultancy and creative studio specializing in dashboard design, workflow automation, and ambitious digital solutions',
    url: 'https://ambitiousrealism.com',
    siteName: 'Ambitious Realism',
    images: [
      {
        url: 'https://ambitiousrealism.com/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ambitious Realism - AI Consultancy and Creative Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambitious Realism | AI Consultancy & Creative Studio',
    description: 'Modern SaaS landing page for AI consultancy and creative studio specializing in dashboard design, workflow automation, and ambitious digital solutions',
    images: ['https://ambitiousrealism.com/assets/images/twitter-image.jpg'],
    creator: '@ambitiousrealism',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ambitious Realism",
              "url": "https://ambitiousrealism.com",
              "logo": "https://ambitiousrealism.com/assets/images/logo.png",
              "description": "AI consultancy and creative studio for ambitious builders specializing in dashboard design, workflow automation, and digital solutions",
              "founder": {
                "@type": "Person",
                "name": "Jane Doe"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-650-555-1234",
                "contactType": "Customer Service",
                "email": "hello@ambitiousrealism.com"
              }
            })
          }}
        />
      </head>
      <body className={`bg-charcoal-dark text-white`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}