import type { Metadata } from 'next'
import Homecomp from '@/components/home/Homecomp'
import Homecomp2 from '@/components/home/Homecomp2'
import Features from '@/components/home/Features'
import WhatIsKeyEds from '@/components/home/WhatIsKeyEds'
import BuiltByEducators from '@/components/home/BuiltByEducators'

export const metadata: Metadata = {
  title: 'Home | KeyEd',
  description: 'Run your entire school on a single ecosystem.',
}

export default function Home2Page() {
  return (
    <main className="pt-20">
     
      <Homecomp2 />
     <Features />
      <WhatIsKeyEds />
      <BuiltByEducators />
    </main>
  )
}