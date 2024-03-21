import { Container, GradientButton, TransparentButton } from "@/shared/components";

export default function DiscussionSection () {
  return (
    <Container>
      <div className="text-center mt-10 md:flex md:text-left md:gap-10 xl:items-center">
        <h2 className="text-[32px] mb-16 md:max-w-[460px] md:mb-0 xl:text-[48px] xl:max-w-[628px] dark:text-white">
          Let&apos;s discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B519F4FF] to-[#F10BD0FF]">vision</span> and see how we can turn your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] to-[#B519F4FF]">idea</span> into a reality.
        </h2>
        <div className="flex flex-col items-center gap-6 xl:flex-row xl:ml-auto">
          <GradientButton href="/#whatWeCanDo" text="start a project" uppercase={true} />
          <TransparentButton text="online meeting" uppercase={true} />
        </div>
      </div>
    </Container>
  )
}