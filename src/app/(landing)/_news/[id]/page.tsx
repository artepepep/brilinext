import {Breadcrumbs} from "@/shared/components";
import {SpecificNews} from "@/newsModules";

async function getData() {
  return {
      heading: "Lorem ipsum dolor sit amet sit amet  consectetur.",
      date: "20.08.2024",
      category: "Design",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Enim massa sed a diam ultricies sit nibh. Turpis gravida arcu sed nunc massa volutpat. Ac porttitor elementum aliquam vitae. Morbi hendrerit orci morbi turpis vulputate velit semper placerat pellentesque. Arcu rutrum purus aenean egestas vestibulum lacus malesuada lectus.\n" +
        " Non massa id morbi elit. At dui lectus diam at aliquet semper tortor. Leo adipiscing lectus scelerisque vivamus eget. Vestibulum lectus in nunc varius pharetra condimentum amet amet cras. Elementum nunc sed vivamus risus cras condimentum lectus. Suspendisse fermentum massa magna eget feugiat interdum ullamcorper. Nam velit dignissim dolor adipiscing ut quis urna. \n" +
        "Lorem ipsum dolor sit amet consectetur. Enim massa sed a diam ultricies sit nibh. Turpis gravida arcu sed nunc massa volutpat. Ac porttitor elementum aliquam vitae. Morbi hendrerit orci morbi turpis vulputate velit semper placerat pellentesque. Arcu rutrum purus aenean egestas vestibulum lacus malesuada lectus.\n" +
        " Non massa id morbi elit. At dui lectus diam at aliquet semper tortor. Leo adipiscing lectus scelerisque vivamus eget. Vestibulum lectus in nunc varius pharetra condimentum amet amet cras. Elementum nunc sed vivamus risus cras condimentum lectus. Suspendisse fermentum massa magna eget feugiat interdum ullamcorper. Nam velit dignissim dolor adipiscing ut quis urna. ",
  }
}

export default async function Page () {
  const newsData = await getData();

  const urls = [
    {
      href: "/news/",
      name: "News",
    },
    {
      href: "/news/1",
      name: newsData.heading,
    },
  ]

  return (
    <main>
      <Breadcrumbs urls={urls} />
      <SpecificNews
        heading={newsData.heading}
        date={newsData.date}
        category={newsData.category}
        paragraph={newsData.paragraph}
      />
    </main>
  )
}