import type { Metadata } from 'next'
import Homecomp from '@/components/home/Homecomp'
import Homecomp2 from '@/components/home/Homecomp2'

export const metadata: Metadata = {
  title: 'Home | KeyEd',
  description: 'Run your entire school on a single ecosystem.',
}

export default function Home2Page() {
  return (
    <main className="pt-20">
      <Homecomp />
      <Homecomp2 />
    </main>
  )
}