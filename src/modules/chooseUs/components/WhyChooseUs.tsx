export default function WhyChooseUs () {
  const chooseUsArray = [
    {
      heading: "Technology Expertise",
      text: "We have an extensive and in-depth knowledge of cutting-edge technologies, which enables us to create robust and scalable software solutions. ",
    },
    {
      heading: "Quality Assurance",
      text: "Our commitment to excellence is reflected in our stringent quality assurance processes, ensuring that the software we build meets the highest standards of functionality, performance, and security.",
    },
    {
      heading: "Cost-Effectiveness",
      text: "Additionally, we offer flexible engagement models and competitive rates to suit your budget and project needs.",
    },
    {
      heading: "Dedicated Support",
      text: "We also provide ongoing support and maintenance services to ensure that your software solution operates smoothly and continuously improves.",
    }
  ]

  return (
    <ul className="flex flex-col gap-10 mt-16 md:max-w-[628px] xl:grid xl:grid-cols-2 xl:max-w-full xl:gap-20">
      {chooseUsArray.map((chooseUsElem) => (
        <li className="flex flex-col gap-6" key={chooseUsElem.heading}>
          <h3 className="text-[32px]">{chooseUsElem.heading}</h3>
          <p className="text-xl">{chooseUsElem.text}</p>
        </li>
      ))}
    </ul>
  )
}