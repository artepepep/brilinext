import { Container, GradientButton, Section, TransparentButton } from "@/shared/components";
import OurTeamSlider from "./components/OurTeamSlider";
import OurTeamHarmonicTablet from "./components/OurTeamHarmonicTablet";
import OurTeamHarmonicDesktop from "./components/OurTeamHarmonicDesktop";

export default function OurTeam () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col mb-5 xl:max-w-[836px]">
          <h2 className="text-[40px] pb-10 text-left xl:text-[64px]">Our great team</h2>
          <p className="mb-2">
            It is a group of passionate experts and development team possess a wealth of experience across diverse industries. We have the skills and experience to tackle any project, big or small and believe in the power of collaboration. Our cross-functional team combines expertise in design, development, and testing to deliver high-quality products on time and within budget.
          </p>
          <p className="mb-10">
            Schedule a free consultation with one of our app development experts today!
          </p>
          <div className="hidden md:flex md:items-center md:gap-4">
            <GradientButton type="link" href="/#whatWeCanDo" text="Contact us" uppercase={true} />
            <TransparentButton type={"link"} href={"https://calendly.com/brilinxoft"} ariaLabel={"Plan an online meeting"} text="Online meeting" uppercase={true} />
          </div>
        </div>
        <div className="flex flex-col gap-10 md:hidden">
          {/*<OurTeamSlider />*/}
          <div className="flex items-center justify-between">
            <GradientButton type="button" href="/#whatWeCanDo" text="Contact us" uppercase={true} />
            <TransparentButton
              type={"link"}
              href={"https://calendly.com/brilinxoft"}
              ariaLabel={"Plan an online meeting"}
              text="Online meeting"
              uppercase={true}
            />
          </div>
        </div>
        {/*<OurTeamHarmonicTablet />*/}
        {/*<OurTeamHarmonicDesktop />*/}
      </Container>
    </Section>
  )
}
