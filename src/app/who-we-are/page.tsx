import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import Banner from "@/components/who-we-are/banner";
import Legacy from "@/components/who-we-are/legacy";
import WhyKeyEd from "@/components/who-we-are/why-keyed";
import VisionForward from "@/components/who-we-are/vision";
import Leadership from "@/components/who-we-are/leadership";
import Ctatop from '@/components/home/Ctatop';


export default function SolutionPage() {
  return (
    <main>
       <Header />
      <Banner />
      <Legacy />
       <WhyKeyEd />
       <VisionForward />
        <Leadership />
        <Ctatop />
        <Footernew />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
