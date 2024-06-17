import {Breadcrumbs} from "@/shared/components";
import {Categories, Hero, Posts} from "@/newsModules";

export default function Page () {
  const urls = [
    {
      href: "/news",
      name: "News",
    }
  ]

  return (
    <main>
      <Breadcrumbs urls={urls} />
      <Hero />
      <Categories />
      <Posts />
    </main>
  )
}