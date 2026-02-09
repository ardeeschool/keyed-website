import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import './globals.css'

// Define fonts directly in layout
const tanseek = localFont({
  src: [
    {
      path: '../../public/fonts/TanseekModernProArabic-Book.woff2',
      weight: 'normal',
      style: "normal"
    },
    {
      path: '../../public/fonts/TanseekModernProArabic-Book.woff',
      weight: 'normal',
      style: "normal",
    },
  ],
  variable: '--font-tanseek',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'RunOnKeyEd - School Management Platform',
  description: 'Run your entire school on a single Ecosystem.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${tanseek.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}