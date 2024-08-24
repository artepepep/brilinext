import {Breadcrumbs} from "@/shared/components";
import {WhatCanWeDo} from "@/landingModules";
import {
  ChooseUsCards,
  ClientSuccessStories,
  Hero,
  Industries,
  NumberedList,
  Services,
  Technologies
} from "@/servicesModules";
import {SuccessStories} from "@/industriesModules";

export default function Page () {
  const urls = [
    {
      href: "/development",
      name: "Web & mobile app development",
    }
  ]

  const chooseUsArray = [
    {
      heading: 'Experienced Team',
      paragraph: 'Our team is made up of experienced developers, designers and project managers with years of industry experience. We always stay up to date with the latest technologies and trends to deliver innovative solutions.',
    },
    {
      heading: 'Custom Solutions',
      paragraph: 'We know that every company is unique. Our custom development approach ensures that we develop solutions that are specifically tailored to your business goals and requirements.',
    },
    {
      heading: 'Quality Assurance',
      paragraph: 'We follow rigorous testing protocols to ensure that our solutions are of the highest quality. Our QA team conducts thorough testing prior to deployment to identify and resolve any issues.'
    },
    {
      heading: 'Customer-Centric Approach',
      paragraph: 'Our clients are at the heart of everything we do. We work closely with you throughout the development process to ensure that the final product meets your expectations and business needs.'
    },
  ]

  const list = [
    {
      number: "01",
      heading: "Consultation",
      paragraph: "We start with a thorough consultation to understand your business needs and goals."
    },
    {
      number: "02",
      heading: "Planning",
      paragraph: "Our team develops a detailed project plan, including scope, timeline, and milestones."
    },
    {
      number: "03",
      heading: "Design",
      paragraph: "We create wireframes and mockups to visualize the final product and ensure it matches your vision."
    },
    {
      number: "04",
      heading: "Development",
      paragraph: "Our developers create solutions using the latest technologies and best practices."
    },
    {
      number: "05",
      heading: "Testing",
      paragraph: "Rigorous testing is performed to ensure that the product is bug-free and functions optimally."
    },
    {
      number: "06",
      heading: "Deployment",
      paragraph: "We deliver the solution and ensure everything is set up correctly before you get started."
    },
    {
      number: "07",
      heading: "Support",
      paragraph: "Once launched, we provide ongoing support and maintenance to ensure your solution runs smoothly."
    },
  ]

  return (
    <main>
      <Breadcrumbs urls={urls} />
      <Hero
        heading={"Web & mobile app development"}
        paragraph={"Our skilled professionals provide a complete array of services for developing web and mobile applications. We design original solutions that support the expansion and advancement of businesses."}
      />
      <Services />
      <ChooseUsCards chooseUsArray={chooseUsArray} />
      <NumberedList heading={"Our process"} list={list} anchor={"development"} />
      <Technologies type={"development"} />
      <SuccessStories />
      <ClientSuccessStories />
      <Industries />
      <WhatCanWeDo />
    </main>
  )
}
