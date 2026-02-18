import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import HeroBanner from "@/components/ai-Intelligence/hero-banner";
import Featuressection from "@/components/ai-Intelligence/Featuressection";
import Capabilities from "@/components/ai-Intelligence/Capabilities";
import AIPrinciples from "@/components/ai-Intelligence/principles";
import CtaSection from "@/components/ai-Intelligence/action";
import CTASectiontop from '@/components/home/Ctatop';
export default function ai() {
  return (
    <main>
       <Header />
      <HeroBanner />
       <Featuressection />
       <Capabilities />
       <AIPrinciples />
       
       <CTASectiontop />
        <Footernew />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
