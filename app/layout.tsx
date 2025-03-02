import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Modules.Shop",
  description: "Created by Cristian Marinescu and Diwash Bhandari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col text-stone-700'>
        <ClerkProvider>
            <Header />
                <main className='grow'>{children}</main>
            <Footer />
       </ClerkProvider>
      </body>
    </html>
  );
}
