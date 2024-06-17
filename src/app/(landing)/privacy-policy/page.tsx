import { PrivacyPolicyForm, PrivacyPolicyHero, PrivacyPolicyParagraphs } from "@/privacyPolicyModules";
import { Metadata } from "next";
import {Breadcrumbs} from "@/shared/components";

export const metadata: Metadata = {
  title: "Brilinxoft - Privacy Policy",
}

export default function Page () {
  const urls = [
    {
      href: "/privacy-policy",
      name: "Privacy policy",
    }
  ]

  return (
    <main>
      <Breadcrumbs urls={urls} />
      <PrivacyPolicyHero />
      <PrivacyPolicyParagraphs />
      <PrivacyPolicyForm />
    </main>
  )
}