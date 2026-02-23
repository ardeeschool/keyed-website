import Header from '@/components/layout/Headertwo'
import HeroBanner from "@/components/services/hero-banner";
import SolutionsPortfolio from "@/components/services/portfolio";
import HowItWorks from "@/components/services/keyed-work";
import CTASectiontop from '@/components/home/Ctatop';
import Footertop from '@/components/layout/footertop'

export default function SolutionPage() {
  return (
    <main>
       <Header />
      <HeroBanner />
      <SolutionsPortfolio />
       <HowItWorks />
        <CTASectiontop />
        <Footertop />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
