import { Container, Section } from "@/shared/components";
import PrivacyPolicyParagraph from "./components/PrivacyPolicyParagraph";

export default function PrivacyPolicyParagraphs () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col mb-16 mt-20 gap-20 md:mb-12 md:gap-[100px]">
          <PrivacyPolicyParagraph
            heading="Version" 
            paragraph="This version of Privacy Policy was published 01/02/2024" 
          />
          <PrivacyPolicyParagraph
            heading="How the information about you is used" 
            paragraph="We use your information to run our website, provide the services you request, and contact you.  This includes processing information to answer questions, organize meetings, or manage job applications.  We may also use your data for marketing if you give us permission.  You can opt out of marketing emails at any time.  We may also use your data to fulfill our contractual obligations or maintain business relationships." 
          />
          <PrivacyPolicyParagraph
            heading="What information do we collect" 
            paragraph="We collect information you give us through forms, third-party accounts (like Facebook), or other interactions (phone, email).  This may include your name, email, company details, job title, phone number, and information from whitepaper requests or job applications.  We may also get information from publicly available sources or third parties.  For example, if you post your resume online or someone recommends you for a job."
          />
          <PrivacyPolicyParagraph
            heading="Cookies" 
            paragraph="We collect anonymous information from website visits to improve customer service.  This includes things like your IP address, web browser, operating system, the pages you visit, and how you interact with the site.  We use this data to analyze trends, create business intelligence reports, target advertising, and improve our website.  You can control how cookies are used through your browser settings."
          />
          <PrivacyPolicyParagraph
            heading="Your rights" 
            paragraph={`You can access, update, or delete your personal information by contacting us as described in the "Contacting Us" section.  You can also object to processing your information for marketing or request restrictions on processing.  If you believe your privacy rights have been violated, don't hesitate to get in touch with us.  You also have the right to complain to data protection authorities.`}
          />
          <PrivacyPolicyParagraph
            heading="Data processing and transfer"
            paragraph="Sometimes, authorized personnel or external parties (like website service providers) may access your data.  Your information may be stored or processed in Europe, the United States, Ukraine, or other countries where BRILINXOFT or its partners operate.  BRILINXOFT entities include locations in Ukraine, the US, Canada, the UK, and several European and South American countries.  We will comply with GDPR requirements to protect your data when transferring it internationally.  By giving us your information, you consent to this transfer, storage, and processing."
          />
          <PrivacyPolicyParagraph
            heading="Other websites"
            paragraph="This website contains links to other websites.  This Privacy Policy only applies to our website.  Please read the privacy policies of other websites you visit.  BRILINXOFT is not responsible for the privacy practices of other websites."
          />
          <PrivacyPolicyParagraph
            heading="Integrated services"
            paragraph="You may be able to log in to our site using your credentials from third-party services (like LinkedIn or Google+).  By authorizing these services, you allow us to access and store your information (name, email, birthday, etc.) and use it as described in this policy.  Please review the privacy policies of these third-party services before using them with our site."
          />
          <PrivacyPolicyParagraph
            heading="Data retention"
            paragraph="We keep your data for as long as necessary to fulfill the purposes for which it was collected, including legal and regulatory requirements"
          />
          <PrivacyPolicyParagraph
            heading="Security"
            paragraph="We use technical and physical security measures to protect your data from unauthorized access, disclosure, alteration, or destruction."
          />
          <PrivacyPolicyParagraph
            heading="Changes to our privacy policy"
            paragraph="We may change this Privacy Policy at any time.  Changes will be posted on the website."
          />
        </div> 
      </Container>
    </Section>
  )
}