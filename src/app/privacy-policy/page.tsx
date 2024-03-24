import { PrivacyPolicyForm, PrivacyPolicyHero, PrivacyPolicyParagraphs } from "@/modules";

export default function Page () {
  return (
    <main>
      <PrivacyPolicyHero />
      <PrivacyPolicyParagraphs />
      <PrivacyPolicyForm />
    </main>
  )
}