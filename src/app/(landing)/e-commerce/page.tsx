import {Breadcrumbs} from "@/shared/components";
import {ApplicationTypes, HeroSection, DevelopmentProcess, SuccessStories, LearnMore} from "@/industriesModules";
import {WhatCanWeDo} from "@/landingModules";

export default function Page () {
  const urls = [
    {
      href: "/e-commerce",
      name: "E-commerce",
    }
  ]

  const appTypes = [
    {
      typeHeading: "Development of mobile and web applications",
      typeDescription: "We will create a convenient and intuitive interface for your store, available on iOS, Android and web platforms."
    },
    {
      typeHeading: "Market by your rules",
      typeDescription: "We will develop a unique trading platform that will meet your needs and visual style.",
    }
  ]

  return (
    <main className={"scroll-smooth"}>
      <Breadcrumbs urls={urls} />
      <HeroSection
        heading={"E-commerce App Development Services"}
        paragraph={"Shopping isn't what it used to be. Forget the crowded malls and limited hours. E-commerce has " +
          "exploded in popularity, offering a shopping experience that's tailored to today's busy consumer. With just " +
          "a few clicks, you can browse millions of products, compare prices with ease, and have your purchases " +
          "delivered straight to your door. It's no wonder e-commerce is on the rise! But what exactly is driving this " +
          "trend, and how can businesses capitalize on this massive shift in consumer behavior?\n" +
          "Brilinxoft caters to the ever-evolving e-commerce landscape by crafting custom software solutions. " +
          "We design platforms to fit any business need, from niche online stores to large-scale marketplaces."}
      />
      <ApplicationTypes
        heading={"We create e-commerce for every taste"}
        appTypes={appTypes}
      />
      <DevelopmentProcess />
      <SuccessStories />
      <WhatCanWeDo />
    </main>
  )
}