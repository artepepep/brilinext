import { 
  ChooseUs, DiscussionSection, HeroSection, OurTeam, Services, Technologies, WhatCanWeDo, WhoWeAre 
} from "@/modules";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <Services />
      <DiscussionSection />
      <Technologies />
      <WhoWeAre />
      <ChooseUs />
      <OurTeam />
      <WhatCanWeDo />
    </main>
  );
}
