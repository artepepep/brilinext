import {Blob, Container, GradientButton, Section} from "@/shared/components";

export default function DevelopmentProcess() {
  const developmentStages = [
    {
      number: "01",
      heading: "Requirements planning and analysis",
      paragraph: "At this stage, by analyzing customer data, we can pinpoint the most impactful features, functionalities, and technologies needed to build an e-commerce platform that drives sales and customer satisfaction.",
    },
    {
      number: "02",
      heading: "Design and development",
      paragraph: "Leveraging your requirements, our team of experts meticulously designs the software architecture, writes efficient code, creates intuitive user interfaces, and seamlessly integrates all necessary components to bring your vision to life.",
    },
    {
      number: "03",
      heading: "Testing",
      paragraph: "The software undergoes meticulous testing throughout development. This ensures we identify and rectify errors early on, guaranteeing all functionalities meet your specific requirements. Before launch, we conduct rigorous quality checks and testing to make sure everything runs smoothly.",
    },
    {
      number: "04",
      heading: "Implementation and deployment",
      paragraph: "We bring your software to life by deploying it in your environment, including setup, configuration, and user training.",
    },
    {
      number: "05",
      heading: "Support and maintenance",
      paragraph: "Implementation is just the beginning. We provide ongoing support, including bug fixes, updates, new features, and user assistance.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className={"flex flex-col xl:flex-row xl:justify-between"}>
          <div className={"flex flex-col gap-5 xl:max-w-[520px]"}>
            <h3 className={"text-[40px] md:text-[64px]"}>Development process</h3>
            <p className={"mb-4"}>
              The development process of financial software consists of several key stages that guarantee
              the creation of a reliable and secure product.
            </p>
            <GradientButton href={"#whatWeCanDo"} text={"Contact us"} uppercase={true} type={"link"} />
          </div>
          <Blob small={false} styles={"w-[1000px] top-[-200px] left-[-300px]"}/>
          <div className={"flex flex-col gap-6 mt-12"}>
            {developmentStages.map((stage) => (
              <div
                className={"pb-5 border-b-[1px] border-b-black dark:border-b-[#D1D1D1] md:flex md:items-center md:justify-between xl:gap-8 xl:items-start"}
                key={stage.heading}
              >
                <p className={"mb-4 text-[64px] text-[#3892F5] md:mb-0"}>{stage.number}</p>
                <div className={"flex gap-4 md:gap-10 md:items-center xl:gap-8 xl:items-start"}>
                  <h4 className={"min-w-[138px] text-xl md:w-[200px] md:text-[24px]"}>{stage.heading}</h4>
                  <p className={"md:max-w-[300px]"}>{stage.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}