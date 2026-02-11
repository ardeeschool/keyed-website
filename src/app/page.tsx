import HeroSection from '@/components/home/HeroSection'
import EcosystemCircle from '@/components/home/EcosystemCircle'
import EcosystemCircleCustomIcons from '@/components/home/Ecosystemcirclecustomicons'
import WhatIsKeyEd from '@/components/home/WhatIsKeyEd'
import HowKeyEdAddsValues from '@/components/home/Howkeyedaddsvalues'
import ModuleCategories from '@/components/home/Modulecategories'
import KeyedLeadership from '@/components/home/KeyedLeadership'
import KeyEdScore from '@/components/home/Keyedscore'
import MobileModuleCarousel from '@/components/home/MobileModuleCarousel'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default function Home() {
  return (
   
    <main>
    <Header />
      <HeroSection />
  
       <WhatIsKeyEd />
       <HowKeyEdAddsValues />
            <EcosystemCircleCustomIcons />
            <MobileModuleCarousel />
       <ModuleCategories />
       <KeyEdScore />
       <KeyedLeadership />

       <Footer />
    </main>
  )
}
