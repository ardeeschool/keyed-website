// lib/seo.ts
import { Metadata } from "next"

type SEOProps = {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  image?: string
}

const siteUrl = "https://yourdomain.com"

export const defaultSEO = {
  title: "School Management System",
  description: "Smart AI powered school ERP for modern schools.",
  keywords: ["school", "management", "erp", "school software"],
  image: "/og-image.jpg",
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  image,
}: SEOProps = {}): Metadata {
  
  const seoTitle = title
    ? `${title} | KeyDd`
    : `${defaultSEO.title} | KeyDd`

  const seoDescription = description || defaultSEO.description
  const seoKeywords = keywords || defaultSEO.keywords
  const seoImage = image || defaultSEO.image
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl

  return {
    metadataBase: new URL(siteUrl),

    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: "KeyDd",
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: "/favicon.ico",
    },
  }
}
