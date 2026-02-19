import Header from '@/components/layout/Headertwo'
import PricingHero from '@/components/pricing/PricingHero';
import PricingModel from '@/components/pricing/PricingModel';
import ModulesAvailable from '@/components/pricing/ModulesAvailable';
import WhatsIncluded from '@/components/pricing/Whatsincluded';
import Ctatop from '@/components/home/Ctatop';

import Footertop from '@/components/layout/footertop'


export default function KeyedScrore() {
  return (
    <main>
       <Header />
     <PricingHero />
<PricingModel />
<ModulesAvailable />
<WhatsIncluded />
        <Ctatop />
        <Footertop />

      
    </main>
  );
}
