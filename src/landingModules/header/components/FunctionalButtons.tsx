import ThemeSwitch from "./ThemeSwitch";
import { MouseEventHandler } from "react";
import Link from "next/link";
import SpriteSVG from "@/landingModules/header/images/SpriteSVG";

type Props = {
  anchorsClick: MouseEventHandler<HTMLAnchorElement>;
  industriesSmClick?: MouseEventHandler<HTMLButtonElement>,
  servicesSmClick?: MouseEventHandler<HTMLButtonElement>,
  industriesSmLinkClick?: MouseEventHandler<HTMLAnchorElement>,
  servicesSmLinkClick?: MouseEventHandler<HTMLAnchorElement>,
  industriesSmDisplay?: boolean,
  servicesSmDisplay?: boolean,
}

export default function FunctionalButtons (
  { anchorsClick, industriesSmLinkClick, industriesSmDisplay, industriesSmClick, servicesSmClick, servicesSmDisplay, servicesSmLinkClick }: Props) {
  const industries = [
    {
      name: "E-commerce",
      href: "/e-commerce",
    },
    {
      name: "AI implementation",
      href: "/ai-implementation",
    },
    {
      name: "Edtech",
      href: "/edtech",
    }
  ]

  const services = [
    {
      name: 'Web & mobile app development',
      href: "/development",
    },
    {
      name: "Quality Assurance & Testing",
      href: '/testing'
    },
    {
      name: "UX/UI Design",
      href: "/design",
    },
    {
      name: "AI apps & Integration",
      href: "/ai"
    }
  ]

  return (
    <div className="flex flex-col-reverse mt-10 gap-8 md:flex-row md:items-center md:mt-0 md:font-semibold">
      {industriesSmDisplay || servicesSmDisplay ? (
        <div className={"flex flex-col items-start gap-8"}>
          {industriesSmDisplay && (
            <button className={"flex items-center gap-1"} onClick={industriesSmClick}>
              <SpriteSVG name={"backArrow"}/>
              <p>Back</p>
            </button>
          )}
          {servicesSmDisplay && (
            <button className={"flex items-center gap-1"} onClick={servicesSmClick}>
              <SpriteSVG name={"backArrow"}/>
              <p>Back</p>
            </button>
          )}
          <div className={"flex flex-col gap-6 text-xl"}>
            {industriesSmDisplay && industries.map((industry) => (
              <Link href={industry.href} key={industry.name} onClick={industriesSmLinkClick}>{industry.name}</Link>
            ))}
            {servicesSmDisplay && services.map(service => (
              <Link href={service.href} key={service.name} onClick={servicesSmLinkClick}>{service.name}</Link>
            ))}
          </div>
        </div>
      ) : (
        <div className={"flex flex-col gap-8 md:flex-row-reverse md:items-center"}>
          <div className="flex gap-8 md:flex-row-reverse md:items-center">
            <ThemeSwitch/>
          </div>
          <div className={"flex flex-col gap-6 w-fit md:flex-row md:gap-8 text-xl"}>
            <Link className="text-left md:text-center hover:text-[#F10BD0]" href={"/#about"} onClick={anchorsClick}>About</Link>
            <div className={"group hidden md:block"}>
              <button
                className={"text-left md:text-center group-hover:text-[#F10BD0]"}>
                Services
              </button>
              <div
                className={"absolute top-[60px] hidden group-hover:flex flex-col bg-white dark:bg-black rounded-[20px]"}>
                {services.map((service) => (
                  <Link
                    className={"py-4 px-6 hover:text-[#F10BD0]"}
                    href={service.href}
                    key={service.name}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <button className={"block md:hidden"} onClick={industriesSmClick}>Industries</button>
            <button className={"block md:hidden text-left"} onClick={servicesSmClick}>Services</button>
            <div className={"group hidden md:block"}>
              <button
                className={"text-left md:text-center group-hover:text-[#F10BD0]"}>
                Industries
              </button>
              <div
                className={"absolute top-[60px] hidden group-hover:flex flex-col bg-white dark:bg-black rounded-[20px]"}>
                {industries.map((industry) => (
                  <Link
                    className={"py-4 px-6 hover:text-[#F10BD0]"}
                    href={industry.href}
                    key={industry.name}>
                    {industry.name}
                  </Link>
                  ))}
              </div>
            </div>
            <Link className="text-left md:text-center hover:text-[#F10BD0]" href={"/#whatWeCanDo"} onClick={anchorsClick}>Contacts</Link>
          </div>
        </div>
      )}
    </div>
  )
}
