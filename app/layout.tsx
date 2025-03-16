import type { Metadata } from "next";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import "./globals.css";
import { dark } from "@clerk/themes";

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
    <ClerkProvider appearance={{ baseTheme: dark }}>
    <html 
      lang="en"
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col text-stone-700'>
      <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">
              LOADING...
            </div>
        </ClerkLoading>
        <ClerkLoaded>
            <Header />
              {/*<main className='grow'>{children}</main>*/}
              {children}
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
