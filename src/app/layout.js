"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";
import { Tajawal } from 'next/font/google'
import Footer from "@/components/Footer/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";

const tajawal = Tajawal({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
});

export default function RootLayout({ children }) {
  const { locale ,dir} = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     document.documentElement.lang = locale;
  //   }
  // }, [locale, isClient]);

  if (!isClient) {
    return (
      <html lang="en" dir={dir}  className={tajawal.variable}>
        <head>
          <link rel="icon" type="image/svg+xml" href="/light-logo.svg" />
          <link rel="icon" type="image/png" href="/light-logo.svg" />
        </head>
        <body className="font-tajwal w-full min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow  overflow-hidden" >
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} dir={dir}  className={tajawal.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/light-logo.svg" />
        <link rel="icon" type="image/png" href="/light-logo.svg" />
      </head>
      <body className="font-tajwal w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow  overflow-hidden" >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
