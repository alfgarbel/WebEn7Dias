import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhatIncludes from "@/components/WhatIncludes";
import Guarantee from "@/components/Guarantee";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import WhatNotIncludes from "@/components/WhatNotIncludes";
import AuditForm from "@/components/AuditForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhatIncludes />
        <Guarantee />
        <Process />
        <Pricing />
        <WhatNotIncludes />
        <AuditForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
