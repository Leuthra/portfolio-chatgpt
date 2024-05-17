import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'white',
}

export const metadata: Metadata = {
  title: {
    template: "%s | Romi Muharom",
    default: "Romi Muharom",
  },
  description: "Check out my smart portfolio website featuring a custom AI chatbot designed to enhance your browsing experience and showcase my projects and skills.",
  applicationName: 'Romi Muharom',
  referrer: 'origin-when-cross-origin',
  keywords: ['Romi Muharom', 'romidev', 'Leuthra', 'rominaru', 'Smart portfolio website', 'Custom AI chatbot', 'Portfolio showcase', 'Web development projects', 'AI technology showcase', 'Personal portfolio website', 'Innovative web solutions', 'Creative AI integration', 'Interactive portfolio showcase', 'Technology-driven portfolio showcase'],
  authors: [{ name: 'Romi Muharom', url: 'https://romidev.vercel.app' }],
  creator: 'Romi Muharom',
  publisher: 'Romi Muharom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'portfolio',
  manifest: '/manifest.json',
  metadataBase: new URL('https://romidev.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'id': '/id'
    },
  },
  openGraph: {
    title: 'Romi Muharom - Smart Portfolio',
    description: 'Check out my smart portfolio website featuring a custom AI chatbot designed to enhance your browsing experience and showcase my projects and skills.',
    url: 'https://romidev.vercel.app',
    siteName: 'Romi Muharom',
    images: [
      {
        url: '/app.png', // Must be an absolute URL
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png', sizes: '76x76', type: 'image/png' }
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Navbar />
            <main className="mx-auto max-w-3xl px-3 py-10">{children}</main>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}