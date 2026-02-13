import type { Metadata } from 'next'
import Homecomp from '@/components/home/Homecomp'
import Homecomp2 from '@/components/home/Homecomp2'
import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import InstitutionModules from "@/components/all-instiutions/all";

export const metadata: Metadata = {
  title: 'Home | KeyEd',
  description: 'Run your entire school on a single ecosystem.',
}

export default function Home2Page() {
  return (
    <main className="">
    <Header />
      
      <Homecomp />
      <Homecomp2 />
      <InstitutionModules />
    <Footernew />
    </main>
  )
}