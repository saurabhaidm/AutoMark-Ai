import Footer from "../../components/home/Footer";
import Herosection1 from "../../components/home/Herosection1";
import Herosection2 from "../../components/home/Herosection2";
import Imagesection from "../../components/home/Imagesection";
import Navigationbar from "../../components/home/Navigationbar";
import PricingSection from "../../components/home/Pricing";
import TestimonialAndFAQSection from "../../components/home/Testimonial";

export default function Home() {
  return (
    <div className="bg-[#e8f1fc] dark:bg-[#030B20] text-black dark:text-white overflow-hidden">
      <nav className=" px-35  py-4  flex items-center justify-center ">
        <Navigationbar />
      </nav>
      <section className="">
        <Herosection1 />
      </section>
      <section>
        <Herosection2 />
      </section>
      <section>
        <Imagesection />
      </section>
      <section>
        <PricingSection />
      </section>
      <section>
        <TestimonialAndFAQSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
