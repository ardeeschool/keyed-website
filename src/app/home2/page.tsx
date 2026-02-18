import type { Metadata } from 'next'

import Homecomp2 from '@/components/home/Homecomp2'
import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import InstitutionModules from "@/components/all-instiutions/all";
import Features from '@/components/home/Features'
import WhatIsKeyEds from '@/components/home/WhatIsKeyEds'
import BuiltByEducators from '@/components/home/BuiltByEducators'
import KeyEdScoreSection from '@/components/home/Keyedscoresection';
import ValueSection from '@/components/home/Valuesection';
import CTASection from '@/components/home/Ctasection';
import ProblemSection from '@/components/home/ProblemSection';

import Ctatop from '@/components/home/Ctatop';

import Footertop from '@/components/layout/footertop'

export const metadata: Metadata = {
  title: 'Home | KeyEd',
  description: 'Run your entire school on a single ecosystem.',
}

export default function Home2Page() {
  return (
 
      
     
    <main>
         <Header />
      <Homecomp2 />
         <WhatIsKeyEds />
          <KeyEdScoreSection />
             <BuiltByEducators />
              <ValueSection />
     <Features />
   
   <ProblemSection />
    
       <InstitutionModules />
       <Ctatop />
        <Footertop />
    </main>
  )
}