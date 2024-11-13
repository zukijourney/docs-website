import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zukijourney-docs",
  description: "the documentation for the zukijourney business",
  openGraph: {
    title: "zukijourney-docs",
    description: "the documentation for the zukijourney business",
    url: 'https://docs.zukijourney.com',
    siteName: 'Zukijourney Docs',
    images: [
      {
        url: 'https://files.catbox.moe/amagy8.png', 
        width: 1200,
        height: 630,
        alt: 'Zukijourney Docs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "zukijourney-docs",
    description: "the documentation for the zukijourney business",
    images: ['https://files.catbox.moe/amagy8.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}