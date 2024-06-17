import {Blob, Container, Section} from "@/shared/components";

export default function Hero () {
  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-6 md:w-[532px]"}>
          <h2
            className={"text-[40px] md:text-[56px] font-semibold drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] via-25% to-[#F10BD0FF] to-50% uppercase"}>
            News
          </h2>
          <p className={"text-xl"}>Stay up to date with the latest events, announcements and successes of our
            company.</p>
        </div>
        <Blob styles={"top-[-300px] right-[-550px]"} small={false} />
      </Container>
    </Section>
  )
}