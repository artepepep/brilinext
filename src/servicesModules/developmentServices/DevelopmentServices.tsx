"use client"

import {Container, Section} from "@/shared/components";
import {useState} from "react";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

export default function DevelopmentServices () {
  const [checker, setChecker] = useState<"web" | "mobile">("web");

  const checkerData = {
    web: [
      {
        heading: "Corporate websites",
        paragraph: "Building scalable, secure, and practical web sites for businesses of all sizes."
      },
      {
        heading: "E-commerce",
        paragraph: "Development of on-line shops with effective capability for powerful income of products and services.",
      },
      {
        heading: "Web applications",
        paragraph: "Interactive and dynamic net programs that meet the very best first-rate standards.",
      },
    ],
    mobile: [
      {
        heading: "Native App",
        ul: [
          {
            li: "iOS Development: Creating high-quality iOS apps using Swift and Objective-C."
          },
          {
            li: "Android Development: Developing robust Android apps using Kotlin and Java."
          }
        ]
      },
      {
        heading: "Cross-Platform App",
        ul: [
          {
            li: "React Native: Building performant apps for both iOS and Android from a single codebase."
          },
          {
            li: "Flutter: Delivering beautiful, natively compiled applications for mobile, web, and desktop."
          }
        ]
      },
      {
        heading: "Service and support",
        ul: [
          {
            li: "Regular Updates: Keeping your app up-to-date with the latest features and security patches."
          },
          {
            li: "Bug Fixes: Quickly dealing with any problems to guarantee seamless functioning."
          },
          {
            li: "Performance Optimization: Optimizing the speed and responsiveness of the app."
          }
        ]
      }
    ],
  }

  return (
    <Section>
      <Container>
        <h2 className={"text-[40px] md:text-[64px]"}>Our services</h2>
        <div className={"flex mt-12"}>
          <div className={"flex w-full"}>
            <button
              className={`${checker === "web" && "w-full px-[38px] py-2 text-white bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"} w-full rounded-t-[20px] text-[24px]`}
              onClick={() => setChecker("web")}
            >
              <p className={"xl:hidden"}>Web App</p>
              <p className={"hidden xl:block"}>Web App Development</p>
            </button>
            <button
              className={`${checker === "mobile" && "text-white w-full px-[38px] py-2 bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"} w-full rounded-t-[20px] text-[24px]`}
              onClick={() => setChecker("mobile")}
            >
              <p className={"xl:hidden"}>Mobile App</p>
              <p className={"hidden xl:block"}>Mobile App Development</p>
            </button>
          </div>
        </div>
        <div className={"flex flex-col mt-12 xl:flex-row"}>
          {checker === 'web' && checkerData.web.map((item => (
            <div className={"p-4"} key={item.heading}>
              <div className={"flex flex-col gap-4 xl:max-w-[400px]"}>
                <h3 className={"text-[24px] md:text-[32px]"}>{item.heading}</h3>
                <p className={"pt-4 text-[16px] border-t-[1px] border-t-[#3892F5] md:text-[20px]"}>{item.paragraph}</p>
              </div>
            </div>
          )))}
          {checker === 'mobile' && checkerData.mobile.map(item => (
            <div className={"p-4"} key={item.heading}>
              <div className={"flex flex-col gap-4 xl:max-w-[400px]"}>
                <h3 className={"text-[24px] md:text-[32px]"}>{item.heading}</h3>
                <div className={"pt-4 text-[16px] border-t-[1px] border-t-[#3892F5] md:text-[20px]"}>
                  <ul className={"flex flex-col gap-6"}>
                    {item.ul.map(li => (
                      <li className={"flex item-center gap-2"} key={li.li}>
                        <SharedSpriteSVG name={'check'} />
                        {li.li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
