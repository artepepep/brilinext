import {Breadcrumbs} from "@/shared/components";
import {ApplicationTypes, DevelopmentProcess, HeroSection} from "@/industriesModules";
import {WhatCanWeDo} from "@/landingModules";

export default function Page () {
  const urls = [
    {
      href: "/edtech",
      name: "Edtech",
    }
  ]

  const appTypes = [
    {
      typeHeading: "Online learning platforms",
      typeDescription: "Whether self-study courses, virtual classrooms, or hybrid learning models, we'll design a platform that fits your needs."
    },
    {
      typeHeading: "Assessment tools",
      typeDescription: "We will help you create tests, quizzes and other tools for assessing students' knowledge.",
    },
    {
      typeHeading: "Personalized study plans",
      typeDescription: "We will develop a system that will recommend courses and materials to students based on their individual needs and interests.",
    },
    {
      typeHeading: "Games and interactive educational materials",
      typeDescription: "Let's make learning interesting and exciting with the help of games, simulations and other interactive elements.",
    },
    {
      typeHeading: "Applications for mobile devices",
      typeDescription: "Let's help you create mobile apps that enable students to learn anywhere, anytime.",
    },
    {
      typeHeading: "Learning Management Systems (LMS)",
      typeDescription: "We'll develop an LMS that helps you organize and manage your courses, students and data.",
    }
  ]

  return (
    <main className={"scroll-smooth"}>
      <Breadcrumbs urls={urls} />
      <HeroSection
        heading={"Edtech"}
        paragraphs={["In today's knowledge-driven world, traditional teaching methods are struggling to keep pace. " +
        "The rise of e-learning platforms and educational technology (EdTech) presents a transformative opportunity. " +
        "EdTech leverages innovative technologies to create engaging and effective learning experiences, catering to " +
        "diverse learning styles and needs. Just as FinTech revolutionized finance, EdTech disrupts the education " +
        "sector, empowering learners and educators alike. At Brilinxoft, we understand the power of EdTech and " +
        "specialize in crafting custom software solutions that unlock the potential of modern learning."]}
      />
      <ApplicationTypes
        heading={"What we can do for you"}
        appTypes={appTypes}
      />
      <DevelopmentProcess />
      <WhatCanWeDo />
    </main>
  )
}