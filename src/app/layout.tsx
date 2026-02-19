import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Syne } from "next/font/google";
import { Inter_Tight } from 'next/font/google'

import "./globals.css";

const tanseek = localFont({
  src: "../fonts/TanseekModernProArabic-Book.woff2",
  variable: "--next-font-tanseek",
  display: "swap",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--next-font-montserrat",  // renamed
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--next-font-syne",        // renamed
});


const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--next-font-interTight", // ✅ FIXED
  display: "swap",
})
export const metadata: Metadata = {
  title: "KeyEd",
  description: "School platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <html lang="en" className={`${tanseek.variable} ${montserrat.variable} ${interTight.variable} ${syne.variable}`} >
       <body style={{ overflowX: 'hidden' }}>{children}</body>
    </html>
  );
}
