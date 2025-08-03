
import "./globals.css";
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={tajawal.variable}>
      <body
        className="font-tajwal "
      >
        {children}
      </body>
    </html>
  );
}
