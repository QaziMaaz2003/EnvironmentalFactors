import { CaseStudy } from "@/components/site/case-study";
import { Contact } from "@/components/site/contact";
import { Demonstrated } from "@/components/site/demonstrated";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Overview } from "@/components/site/overview";
import { Partner } from "@/components/site/partner";
import { Problem } from "@/components/site/problem";
import { Products } from "@/components/site/products";
import { Solution } from "@/components/site/solution";
import { Technology } from "@/components/site/technology";
import { Ticker } from "@/components/site/ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Overview />
        <Problem />
        <Solution />
        <Demonstrated />
        <Technology />
        <CaseStudy />
        <Products />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
