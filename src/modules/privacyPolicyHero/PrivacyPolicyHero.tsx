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
          <p className="text-xl">Our privacy practices are designed to provide a high level of protection for your personal data</p>
          <p className="mt-16 md:mt-[100px]">
            This Privacy Policy explains what information of yours will be collected by BRILINXOFT when you 
            access the website at www.brilinxoft.com (the “website”), all related websites (subdomains), 
            other services provided by BRILINXOFT on which a link to this Privacy Policy is displayed, 
            and all other communications with you through from written or oral means, such as email or phone.
            It also describes how the information will be used, how you can control the collection, correction 
            and/or deletion of information and how to get in touch with us if you need. Our privacy practices 
            are designed to provide a high level of protection for your personal data. We will not use or share 
            your information with anyone except as described in this Privacy Policy. This Policy is incorporated 
            into, and is subject to, the Terms and Conditions of use available on this website. Please read this 
            Privacy Policy carefully to understand our views and practices regarding your personal data before 
            browsing this website.
          </p>
        </div>
        <div className="hidden md:block"><Blob small={false} /></div>
        <div className="block md:hidden"><Blob small={true} styles="top-[15%] right-[-60%]" /></div>
      </Container>
    </Section>
  )
}