import Image from 'next/image'
import {connectDb } from '../helper/db'
import CustomNavbar from '@/components/CustomNavbar'
import Banner from '@/components/homepage/homebanner';
import FeatureSection from '@/components/homepage/FeatureSection';
import ActionSection from '@/components/homepage/ActionSection';
import TestimonialSection from '@/components/homepage/TestimonialSection';
import ContactForm from '@/components/homepage/Contactform';

export const metadata={
    title:"Home: Work Manager",
};

export default function Home() {
  

 
  return (
 
   
   <div  >
    
   <Banner/>
   <FeatureSection/>
   <ActionSection/>
   <TestimonialSection/>
   <ContactForm/>
   </div>
  )
}
