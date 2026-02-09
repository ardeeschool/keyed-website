import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'

// Local custom font - TanseekModernProArabic
// Place your font files in: /public/fonts/
// WOFF2 is preferred (smaller, faster), WOFF is fallback
export const tanseek = localFont({
  src: [
    {
      path: '../../public/fonts/TanseekModernProArabic-Book.woff2',
      weight: '400',
      style: 'normal',
      format: 'woff2',
    },
    {
      path: '../../public/fonts/TanseekModernProArabic-Book.woff',
      weight: '400',
      style: 'normal',
      format: 'woff',
    },
  ],
  variable: '--font-tanseek',
  display: 'swap',
})

// Google Font - Montserrat
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})