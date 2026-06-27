import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import TrustUs from "@/components/sections/TrustUs";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import ClientLogos from "@/components/sections/ClientLogos";
import Careers from "@/components/sections/Careers";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="w-full font-sans bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Process />
        <Industries />
        <TrustUs />
        <Impact />
        <Testimonials />
        <ClientLogos />
        <Careers />
        <FAQ />
        <Blog />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
