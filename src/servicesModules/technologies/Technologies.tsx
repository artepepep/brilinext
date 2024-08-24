import {Container, Section} from "@/shared/components";
import SpriteSVG from "@/servicesModules/technologies/images/SprireSVG";

type Props = {
  type: "development" | "testing"
}

export default function Technologies({ type }: Props) {
  const development = ["react", "figma", "redis", "django", "docker", "tailwind", "next", "typescript", "node"]
  const testing = ["browserstack", "playwright", "se", "apache", "jira", "postman"]

  return (
    <Section>
      <Container>
        <h2 className={"text-[40px] mb-12 md:text-[64px] md:mb-[100px]"}>Basic technologies</h2>
        {type === "development" ? (
          <div className={"grid grid-cols-3 place-items-center gap-y-[46px] md:grid-cols-5 md:gap-y-[74px] xl:flex xl:justify-between text-[#3892F5] dark:text-[#D9D9D9]"}>
            {development.map((item) => (
              <SpriteSVG name={item} key={item} />
            ))}
          </div>
        ) : (
          <div className={"flex flex-wrap justify-between items-center gap-y-8 text-[#3892F5] dark:text-[#D1D1D1]"}>
            {testing.map((item) => (
              <SpriteSVG name={item} key={item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
