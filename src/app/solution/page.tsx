import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import HeroBanner from "@/components/services/hero-banner";
import SolutionsPortfolio from "@/components/services/portfolio";
import HowItWorks from "@/components/services/keyed-work";
import CTABanner from "@/components/services/cta";
export default function SolutionPage() {
  return (
    <main>
       <Header />
      <HeroBanner />
      <SolutionsPortfolio />
       <HowItWorks />
        <CTABanner />
        <Footernew />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
