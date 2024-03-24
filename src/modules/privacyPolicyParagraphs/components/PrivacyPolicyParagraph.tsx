type Props = {
  heading: string,
  paragraph: string,
}

export default function PrivacyPolicyParagrph ({ heading, paragraph }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[32px] uppercase xl:text-[48px]">{heading}</h3>
      <p>{paragraph}</p>
    </div>
  )
}