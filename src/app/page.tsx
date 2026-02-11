import HeroSection from '@/components/home/HeroSection'
import EcosystemCircle from '@/components/home/EcosystemCircle'
import EcosystemCircleCustomIcons from '@/components/home/Ecosystemcirclecustomicons'
import WhatIsKeyEd from '@/components/home/WhatIsKeyEd'
import HowKeyEdAddsValues from '@/components/home/Howkeyedaddsvalues'
import ModuleCategories from '@/components/home/Modulecategories'
import KeyedLeadership from '@/components/home/KeyedLeadership'
import KeyEdScore from '@/components/home/Keyedscore'

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
