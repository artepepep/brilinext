import Service from "./Service";

export default function ServicesList () {
  const services = [
    {
      number: "01",
      heading: "Web & mobile app development",
      text: "Streamline your business and turn your ideas into reality with our custom web and mobile app development. We craft user-centric solutions that drive results.",
    },
    {
      number: "02",
      heading: "Quality Assurance & Testing",
      text: "Comprehensive QA and testing uncover and eliminate bugs before launch, saving time and money to ensure software stability, security, and adherence to the highest quality standards.",
    },
    {
      number: "03",
      heading: "UX/UI Design",
      text: "We provide ui/ux design that translates complex ideas into user-friendly interfaces, maximizing usability and impact that drive engagement and user satisfaction.",
    },
    {
      number: "04",
      heading: "Technical Support",
      text: "Our reliable technical support provides expert assistance that resolves issues quickly and efficiently, maximizing user satisfaction and ensuring your systems run smoothly.",
    },
    {
      number: "05",
      heading: "AI apps & Integration",
      text: "We build and integrate custom AI features and solutions that automate tasks, personalize experiences, and drive results, transforming workflows and boosting efficiency.",
    }
  ];

  return (
    <ul className="text-center md:text-left xl:text-left">
      {services.map((service) => (
        <Service 
          number={service.number}
          heading={service.heading}
          text={service.text}
          key={service.number}
        />
      ))}
    </ul>
  )
}