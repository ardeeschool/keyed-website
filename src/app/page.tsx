import Homecomp2 from '@/components/home/Homecomp2'
import Header from '@/components/layout/Headertwo'
import InstitutionModules from "@/components/all-instiutions/all";
import Features from '@/components/home/Features'
import WhatIsKeyEds from '@/components/home/WhatIsKeyEds'
import BuiltByEducators from '@/components/home/BuiltByEducators'
import KeyEdScoreSection from '@/components/home/Keyedscoresection';
import ValueSection from '@/components/home/Valuesection';
import Showcase from '@/components/home/Showcase';
import Blackfooter from '@/components/layout/Blackfooter';
import Ctatop from '@/components/home/Ctatop';
import MarqueeBanner from '@/components/layout/Marqueebanner';
import Footertop from '@/components/layout/footertop'
export default function Home() {
  return (
   
    <main>
          <Header />
          <Homecomp2 />
          <WhatIsKeyEds />
          <KeyEdScoreSection />
          <BuiltByEducators />
          <ValueSection />
          <Showcase />
          <InstitutionModules />
          <MarqueeBanner />
          <Ctatop />
          <Blackfooter />
    </main>
  )
}
