import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Keyed',
  description: 'Contact KeyEd to book a live demo.',
  openGraph: {
    title: 'Contact Us | KeyEd',
    description: 'Contact KeyEd to book a live demo.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}