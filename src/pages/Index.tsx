import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <SpecialOffer />
      <WhyChooseUs />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
