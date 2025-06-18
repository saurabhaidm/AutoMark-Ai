import Footer from "../../components/home/Footer";
import Herosection1 from "../../components/home/Herosection1";
import Herosection2 from "../../components/home/Herosection2";
import Imagesection from "../../components/home/Imagesection";
import Navigationbar from "../../components/home/Navigationbar";
import PricingSection from "../../components/home/Pricing";
import TestimonialAndFAQSection from "../../components/home/Testimonial";

export default function Home() {
  return (
<div className="bg-[#e8f1fc] dark:bg-[#030B20] text-black dark:text-white">

  <Navigationbar/>
  <Herosection1/>
  <Herosection2/>
  <Imagesection/>
  <PricingSection/>
  <TestimonialAndFAQSection/>
  <Footer/>
</div>
  )
}
