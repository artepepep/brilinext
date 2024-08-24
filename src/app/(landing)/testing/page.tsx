import {WhatCanWeDo} from "@/landingModules";
import {ClientSuccessStories, Hero, Industries, List, NumberedList, Technologies} from "@/servicesModules";

export default function Page () {
  const list = [
    {
      number: '01',
      heading: 'Teamwork',
      paragraph: 'Collaboration with developers, business analysts and designers to achieve the best result.',
    },
    {
      number: '02',
      heading: 'Individual approach',
      paragraph: 'Adaptation of testing processes and methods according to the specifics of your project.',
    },
    {
      number: '03',
      heading: 'Modern Tools',
      paragraph: 'Using the latest technologies and testing tools to ensure the high quality of your product.',
    },
    {
      number: '04',
      heading: 'Transparency and Reporting',
      paragraph: 'Regular reports on testing progress and detected errors to ensure full transparency of the process.',
    },
  ]
  const servicesData = [
    {
      heading: 'Functional Testing',
      paragraph: 'Ensuring that all features of your software work according to user requirements and expectations.',
    },
    {
      heading: 'Non-functional Testing',
      paragraph: 'Testing the performance, security, scalability and usability of your software to ensure smooth operation even in the most demanding environments.',
    },
    {
      heading: 'Automated Testing',
      paragraph: 'Using modern tools to automate the testing process, which allows you to quickly and efficiently identify errors and increase development efficiency.',
    },
    {
      heading: 'Regression Testing',
      paragraph: 'Ensuring that new changes and updates do not adversely affect the existing functionality of your software.',
    },
    {
      heading: 'Mobile Testing',
      paragraph: 'Testing your mobile app across devices and platforms to ensure smooth operation and high-quality user experience.',
    },
    {
      heading: 'Usability Testing',
      paragraph: 'User interface and experience analysis and testing to make your product intuitive and user-friendly.',
    },
  ]

  const benefitsData = [
    {
      heading: 'High Accuracy',
      paragraph: 'Automation of the testing process allows to reduce the number of human errors.',
    },
    {
      heading: 'Efficiency',
      paragraph: 'Modern tools significantly speed up the testing process, reducing time to market.',
    },
    {
      heading: 'Transparency',
      paragraph: 'Project management and reporting tools provide complete visibility into the testing process for customers.',
    },
    {
      heading: 'Scalability',
      paragraph: 'We can easily adapt our processes to any project, regardless of its size and complexity.',
    },
    {
      heading: 'Security',
      paragraph: 'Using advanced technology for security testing helps protect your app from potential threats.',
    },
  ]

  return (
    <main>
      <Hero
        heading={'Quality Assurance & Testing'}
        paragraph={'In today\'s software world, quality plays a key role in determining the success of your product. Our team of quality assurance (QA) and testing experts will ensure that your software meets the highest standards and performs flawlessly.'}
      />
      <List heading={"Our Services"} data={servicesData} />
      <NumberedList heading={'Our Approach'} list={list} anchor={'testing'} />
      <Technologies type={'testing'} />
      <List heading={'Benefits of Using Our Technologies'} data={benefitsData} />
      <ClientSuccessStories />
      <Industries />
      <WhatCanWeDo />
    </main>
  )
}
