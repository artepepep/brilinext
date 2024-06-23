import {Breadcrumbs} from "@/shared/components";
import {ApplicationTypes, DevelopmentProcess, HeroSection} from "@/industriesModules";
import {WhatCanWeDo} from "@/landingModules";

export default function Page () {
  const urls = [
    {
      href: "/ai-implementation",
      name: "AI implementation",
    }
  ]

  const appTypes = [
    {
      typeHeading: "Development of machine learning algorithms",
      typeDescription: "We have experience in developing complex machine learning algorithms that can be used for a variety of tasks such as image recognition, natural language processing and prediction."
    },
    {
      typeHeading: "Creation of intelligent applications",
      typeDescription: "We can develop intelligent applications that integrate with your existing systems and help automate tasks, improve decision-making and empower your customers.",
    },
    {
      typeHeading: "Modernization of existing systems",
      typeDescription: "We can help you modernize your existing systems with AI to improve their productivity and efficiency."
    },
    {
      typeHeading: "Consultations on AI issues",
      typeDescription: "We offer AI consulting to help you understand the potential of AI for your business and develop a strategy for its implementation."
    },
  ];

  return (
    <main className={"scroll-smooth"}>
      <Breadcrumbs urls={urls} />
      <HeroSection
        heading={"AI implementation"}
        paragraphs={["In today's data-driven world, traditional business processes are reaching their limits. " +
          "The emergence of Artificial Intelligence (AI) presents a transformative opportunity to streamline " +
          "operations, unlock new insights, and gain a competitive edge. Similar to how Machine Learning " +
          "revolutionized data analysis, AI disrupts industries across the board, empowering businesses to " +
          "achieve greater efficiency and innovation. At Brilinxoft, we understand the power of AI and specialize " +
          "in crafting custom solutions that integrate AI seamlessly into your workflows, maximizing its potential " +
          "for your business."]}
      />
      <ApplicationTypes
        heading={"Here are some of the key solutions we can offer"}
        appTypes={appTypes}
      />
      <DevelopmentProcess />
      <WhatCanWeDo />
    </main>
  )
}