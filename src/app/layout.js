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
        <body className="font-tajwal w-full">
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} dir={dir}  className={tajawal.variable}>
      <body className="font-tajwal w-full">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
