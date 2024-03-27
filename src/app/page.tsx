import { 
  ChooseUs, DiscussionSection, HeroSection, LatestProjects, OurTeam, Services, Technologies, WhatCanWeDo, WhoWeAre 
} from "@/modules";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <Services />
      <DiscussionSection />
      <Technologies />
      <LatestProjects />
      <WhoWeAre />
      <ChooseUs />
      <OurTeam />
      <WhatCanWeDo />
    </main>
  );
}
