import {CheckedList, ChooseUsCards, ClientSuccessStories, Hero, Industries, NumberedList} from "@/servicesModules";
import {SuccessStories} from "@/industriesModules";
import {WhatCanWeDo} from "@/landingModules";

export default function Page () {
  const data = [
    {
      heading: 'User Research',
      ul: [
        {
          li: 'Analysis of user needs and behavior.'
        },
        {
          li: 'Creating a user persona.'
        },
        {
          li: 'Conducting interviews and surveys.'
        },
      ]
    },
    {
      heading: 'Information Architecture',
      ul: [
        {
          li: 'Structuring of information.'
        },
        {
          li: 'Creating a site map.'
        },
        {
          li: 'Development of wireframes.',
        }
      ]
    },
    {
      heading: 'Prototyping',
      ul: [
        {
          li: 'Creation of interactive prototypes.'
        },
        {
          li: 'Testing prototypes with users.'
        },
        {
          li: 'Making changes based on feedback.'
        }
      ]
    },
    {
      heading: 'Interface design',
      ul: [
        {
          li: 'Creation of visual concepts.'
        },
        {
          li: 'Development of design systems.'
        },
        {
          li: 'Responsive design for different devices.'
        }
      ]
    },
    {
      heading: 'Testing and Optimization',
      ul: [
        {
          li: 'Usability testing.'
        },
        {
          li: 'Analysis of user behavior.'
        },
        {
          li: 'Optimizing design for better interaction.'
        }
      ]
    },
    {
      heading: 'Support and Development',
      ul: [
        {
          li: 'Support after launch.'
        },
        {
          li: 'Design updates and improvements.'
        },
        {
          li: 'Analysis and implementation of new trends.'
        }
      ]
    },
  ]
  const list = [
    {
      number: '01',
      heading: 'Advice',
      paragraph: 'We begin by discussing your project and defining its goals. It is important to find out the main requirements and scope of work.',
    },
    {
      number: '02',
      heading: 'Planning',
      paragraph: 'At this stage, we develop a detailed plan, define deadlines and budget to align expectations and capabilities.',
    },
    {
      number: '03',
      heading: 'Realization',
      paragraph: 'The work is carried out according to the agreed plan. We are in regular contact to ensure the results meet your expectations.',
    },
    {
      number: '04',
      heading: 'Testing',
      paragraph: 'After the development is complete, we test the product on real users. The results obtained help us to make the necessary adjustments to achieve optimal use of the product.',
    },
    {
      number: '05',
      heading: 'Launch and Support',
      paragraph: 'The final stage includes launching the finished product and providing support for its operational functioning. We are ready to provide the necessary updates and support for your product throughout its life cycle.',
    },
  ]

  const chooseUsCards = [
    {
      heading: 'Experience',
      paragraph: 'Our designers have many years of experience in various fields.',
    },
    {
      heading: 'Creativity',
      paragraph: 'We create unique and attractive designs that make your business stand out.',
    },
    {
      heading: 'User orientation',
      paragraph: 'We always consider the needs and behavior of end users.',
    },
    {
      heading: 'Support',
      paragraph: 'We provide full support at all stages of the project and after its completion.',
    },
  ]

  return (
    <main>
      <Hero
        heading={'Professional UX/UI Design for Your Business'}
        paragraph={'We create convenient and aesthetically attractive solutions that will help your business stand out in the digital space.'}
      />
      <CheckedList heading={'Our Services'} data={data} />
      <NumberedList heading={'Work Process'} list={list} anchor={'design'} />
      <ChooseUsCards chooseUsArray={chooseUsCards} />
      <SuccessStories />
      <ClientSuccessStories />
      <Industries />
      <WhatCanWeDo />
    </main>
  )
}
