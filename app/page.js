import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Domains from "./components/Domains";
import Segments from "./components/Segments";
import Audience from "./components/Audience";
import CAT from "./components/CAT";
import HowItWork from "./components/HowItWork";
import Edge from "./components/Edge";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Clients />
      <Edge />
      <Domains />
      <Segments />
      <Audience />
      <CAT />
      <HowItWork/>
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
