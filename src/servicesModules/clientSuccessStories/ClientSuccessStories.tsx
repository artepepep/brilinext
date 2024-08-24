import {Blob, Container, Section} from "@/shared/components";
import Slider from "@/servicesModules/clientSuccessStories/components/Slider";

export default function ClientSuccessStories () {
  return (
    <Section>
      <Container>
        <div className={"xl:flex xl:gap-6"}>
          <div className={"flex flex-col gap-6 xl:mt-[50px]"}>
            <h2 className={"text-[40px] md:text-[64px]"}>Client Success Stories</h2>
            <p className={"text-[14px] md:text-[16px]"}>
              Read the incredible stories of our happy customers who have achieved significant
              growth and success in their businesses thanks to our high-quality applications.
            </p>
          </div>
          <div className={"xl:w-1/2"}>
            <Slider/>
          </div>
        </div>
        <Blob small={false} styles={'top-0 left-[-200px]'}/>
      </Container>
    </Section>
  )
}
