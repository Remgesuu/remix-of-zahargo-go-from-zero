import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { ValueProps } from "@/components/landing/ValueProps";
import { Program } from "@/components/landing/Program";
import { Mentor } from "@/components/landing/Mentor";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Testimonials />
        <ValueProps />
        <Program />
        <Mentor />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
