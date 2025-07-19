import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import HealthIntro from "../Components/HealthIntro";
import HealthCards from "../Components/HealthCards";
import Feature from "../Components/Feature";
import TimeLine from "../Components/TimeLine";
import HealthHand from "../Components/HealthHand";
import Reimagined from "../Components/Reimagined";
import Evolving from "../Components/Evolving";
import WhatYouNeed from "../Components/WhatYouNeed";
import QuickAnswer from "../Components/QuickAnswer";
import Footer from "../Components/Footer";
import Personal from "../Components/Personal";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <HealthIntro />
      <HealthCards />
      <Feature />
      <TimeLine />
      <HealthHand />
      <Reimagined />
      <Evolving />
      <WhatYouNeed />
      <Personal />
      <QuickAnswer />
      <Footer />
    </main>
  );
}
