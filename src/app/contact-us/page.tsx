import Header from '@/components/layout/Headertwo'
import Footernew from '@/components/layout/footernew'
import Banner from "@/components/contact/banner";
import Details from "@/components/contact/details";
import ContactForm from "@/components/contact/form";
import CTASectiontop from '@/components/home/Ctatop';

import Ctatop from '@/components/home/Ctatop';

import Footertop from '@/components/layout/footertop'



export default function contact() {
  return (
    <main>
       <Header />
      <Banner />
      <Details />
      <ContactForm />
      <Ctatop />
        <Footertop />

      
    </main>
  );
}
