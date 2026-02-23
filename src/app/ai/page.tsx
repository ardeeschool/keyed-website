import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import HeroBanner from "@/components/ai-Intelligence/hero-banner";
import Featuressection from "@/components/ai-Intelligence/Featuressection";
import Capabilities from "@/components/ai-Intelligence/Capabilities";
import AIPrinciples from "@/components/ai-Intelligence/principles";
import CtaSection from "@/components/ai-Intelligence/action";
import Intelligence from '@/components/ai-Intelligence/Intelligence';
import CTASectiontop from '@/components/home/Ctatop';

import Ctatop from '@/components/home/Ctatop';

import Footertop from '@/components/layout/footertop'


export default function ai() {
  return (
    <main>
       <Header />
      <HeroBanner />
     
       <Intelligence />
       <Capabilities />
       <AIPrinciples />
        <Ctatop />
            <Footertop />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
