import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Entrance from "../components/common/Entrance";
import NorthStarEntrance from "../components/common/EntranceV2";
import SectionTransitions from "../components/common/SectionTransitions";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Simulator from "../components/sections/Simulator";
import Testimonials from "../components/sections/Testimonials";
import QNA from "../components/sections/QNA";
import CTA from "../components/sections/CTA";
import Pricing from "../components/sections/Pricing";
import Integrations from "../components/sections/Integrations";
import Steps from "../components/sections/Steps";

export default function HomePage() {
  return (
    <main className="relative h-full overflow-y-auto bg-bone text-charcoal">
      {/* <Entrance /> */}
      <NorthStarEntrance />
      <Navbar />
      <SectionTransitions />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Integrations />
      <Simulator />
      <Pricing />
      <Steps />
      <Testimonials />
      <QNA />
      <CTA />
      <Footer />
    </main>
  );
}
