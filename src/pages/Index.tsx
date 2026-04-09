import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { Portfolio } from "@/components/landing/Portfolio";
import { Curriculum } from "@/components/landing/Curriculum";
import { Mentor } from "@/components/landing/Mentor";
import { SalaryGrowth } from "@/components/landing/SalaryGrowth";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <ValueProps />
        <Portfolio />
        <Curriculum />
        <Mentor />
        <SalaryGrowth />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
