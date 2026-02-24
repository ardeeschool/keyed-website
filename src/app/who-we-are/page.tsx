import Header from '@/components/layout/Headertwo'
import Hero from '@/components/who-we-are/Hero-section';
import Banner from "@/components/who-we-are/banner";
import ArdeeLegacy from '@/components/who-we-are/ardee-legacy';
import Legacy from "@/components/who-we-are/legacy";
import WhyKeyEd from "@/components/who-we-are/why-keyed";
import VisionForward from "@/components/who-we-are/vision";
import Leadership from "@/components/who-we-are/leadership";
import Stats from '@/components/who-we-are/Stats';
import WhyKeyEdCreated from '@/components/who-we-are/Whykeyedcreated';
import VisionForwards from '@/components/who-we-are/Visionforward';
import LeadershipPhilosophy from '@/components/who-we-are/Leadershipphilosophy';
import ArdeeLegacytimeline from '@/components/who-we-are/ardee-legacy-timeline';
import Ctatop from '@/components/home/Ctatop';
import Footertop from '@/components/layout/footertop'

export default function SolutionPage() {
  return (
    <main>
       <Header />
       <Hero />
     

<ArdeeLegacytimeline />
<Stats />
<WhyKeyEdCreated />
     
       <VisionForwards />
        <LeadershipPhilosophy />
        <Ctatop />
        <Footertop />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );
}
