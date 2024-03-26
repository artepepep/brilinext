import { Blob, Container, Section } from "@/shared/components";

export default function PrivacyPolicyHero () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4">
          <h2 
            className="min-h-fit text-[40px] md:text-[56px] font-semibold drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] via-25% to-[#F10BD0FF] to-50% uppercase">
            Privacy policy
          </h2>
          <p className="text-xl">Our privacy practices are designed to provide a high level of protection for your personal data.</p>
          <p className="mt-16 md:mt-[100px]">
            This policy explains how BRILINXOFT handles your information when you visit our website ([invalid URL removed]), related sites, use our services, or contact us (written or oral).  We aim to protect your data and will only use it as described here.  This policy is part of our Terms of Use.  Please read it carefully.
          </p>
        </div>
        <div className="hidden md:block"><Blob small={false} /></div>
        <div className="block md:hidden"><Blob small={true} styles="top-[15%] right-[-60%]" /></div>
      </Container>
    </Section>
  )
}