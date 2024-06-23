import Service from "./Service";

export default function ServicesList () {
  const services = [
    {
      number: "01",
      heading: "Web & mobile app development",
      text: "Optimize your business and turn your ideas into reality with our custom web and mobile app development. We develop user-centric solutions that get results.",
    },
    {
      number: "02",
      heading: "Quality Assurance & Testing",
      text: "Comprehensive quality assurance and testing finds and eliminates bugs before they go to market. This saves you time and money, ensuring your software is stable, secure, and adheres to the highest quality standards."
    },
    {
      number: "03",
      heading: "UX/UI Design",
      text: "We provide UI/UX design to transform complex ideas into user-friendly interfaces, maximizing usability and impact to drive engagement and user satisfaction."
    },
    {
      number: "04",
      heading: "Technical Support",
      text: "Our reliable technical support provides expert assistance to quickly and effectively resolve issues, maximize user satisfaction, and keep your systems running smoothly."
    },
    {
      number: "05",
      heading: "Artificial Intelligence Applications and Integrations",
      text: "Join us to build and integrate custom AI capabilities and solutions to automate tasks, personalize experiences, drive results, transform workflows, and increase efficiency."
    }
  ];

  return (
    <ul className="text-left">
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