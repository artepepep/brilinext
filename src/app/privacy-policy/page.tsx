import { PrivacyPolicyForm, PrivacyPolicyHero, PrivacyPolicyParagraphs } from "@/modules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brilinxoft - Privacy Policy",
}

export default function Page () {
  return (
    <main>
      <PrivacyPolicyHero />
      <PrivacyPolicyParagraphs />
      <PrivacyPolicyForm />
    </main>
  )
}