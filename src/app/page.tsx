import HeroSection from '@/components/Home/HeroSection'
import EcosystemCircle from '@/components/Home/EcosystemCircle'
import EcosystemCircleCustomIcons from '@/components/Home/Ecosystemcirclecustomicons'
import WhatIsKeyEd from '@/components/Home/WhatIsKeyEd'
import HowKeyEdAddsValues from '@/components/Home/Howkeyedaddsvalues'
import ModuleCategories from '@/components/Home/Modulecategories'
import KeyedLeadership from '@/components/Home/KeyedLeadership'
import KeyEdScore from '@/components/Home/Keyedscore'

export default function Home() {
  return (
    <main>
   
      <HeroSection />
  
       <WhatIsKeyEd />
       <HowKeyEdAddsValues />
            <EcosystemCircleCustomIcons />
       <ModuleCategories />
       <KeyEdScore />
       <KeyedLeadership />
    </main>
  )
}