import Header from '@/components/layout/Headertwo'
import KeyEdScoreHero from '@/components/keyedpage/Keyedscorehero';
import Ctatop from '@/components/home/Ctatop';
import Footertop from '@/components/layout/footertop'
import WhatIsKeyEdScore from '@/components/keyedpage/WhatIsKeyEdScore';
import HowItWorks from '@/components/services/keyed-work';
import HowScoreWorks from '@/components/keyedpage/HowScoreWorks';
import MiddleCta from '@/components/keyedpage/Middlecta';

export default function KeyedScrore() {
  return (
    <main>
       <Header />
      <KeyEdScoreHero />
<WhatIsKeyEdScore />
<MiddleCta />
<HowScoreWorks />
        <Ctatop />
        <Footertop />

      {/* ── Rest of your Solution page content goes here ── */}
    </main>
  );  
}
