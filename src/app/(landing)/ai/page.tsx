import {CheckedList, ClientSuccessStories, Hero, Industries, NumberedList} from "@/servicesModules";
import {WhatCanWeDo} from "@/landingModules";

export default function Page () {
  const data = [
    {
      heading: 'Development of AI applications',
      ul: [
        {
          li: 'Chatbots and virtual assistants: Automation of interaction with customers, fast service and 24/7 support.'
        },
        {
          li: 'Image recognition and video processing: Advanced technologies for real-time image and video analysis.'
        },
        {
          li: 'Forecasting and data analysis: Machine learning models for accurate forecasting and analysis of large volumes of data.'
        }
      ]
    },
    {
      heading: 'Technical support',
      ul: [
        {
          li: 'CRM and ERP systems: Implementation of AI to optimize business processes and automate tasks.'
        },
        {
          li: 'E-commerce platforms: Personalization of purchases, recommendation systems and analysis of user behavior.'
        },
        {
          li: 'HR and recruiting: AI for candidate selection, resume analysis and performance prediction.'
        }
      ]
    }
  ]

  const list = [
    {
      number: '01',
      heading: 'Expertise',
      paragraph: 'Our team consists of experienced developers and AI specialists working with the latest technologies.',
    },
    {
      number: '02',
      heading: 'Individual approach',
      paragraph: 'We develop solutions that meet the unique needs of each client, ensuring maximum efficiency and effectiveness.',
    },
    {
      number: '03',
      heading: 'Customer support',
      paragraph: 'Our clients can count on full support at every stage of the project – from initial analysis to implementation and follow-up service.',
    },
  ]

  return (
    <main>
      <Hero
        heading={'AI applications and integration'}
        paragraph={'In the age of digital technology, it is important to use modern tools to ensure the competitiveness of your business. Our AI solutions help you streamline processes, improve efficiency and deliver an exceptional user experience.'}
      />
      <CheckedList heading={'Our services'} data={data} twoColumns={true} />
      <NumberedList heading={'Why choose us'} list={list} anchor={'ai'} />
      <ClientSuccessStories />
      <Industries />
      <WhatCanWeDo />
    </main>
  )
}
