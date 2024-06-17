import {Container} from "@/shared/components";
import Link from "next/link";

type Props = {
  urls: Array<{ href: string, name: string }>,
}

export default function Breadcrumbs ({ urls }: Props) {
  return (
    <div className={"mt-4 md:mt-5 xl:mt-6"}>
      <Container>
        <div className={"flex gap-1 items-center text-[14px]"}>
          <Link href={"/"}>Home</Link>
          {urls.map((url, counter) => (
            <div className={"flex gap-1 items-center"} key={url.href}>
              <div>/</div>
              <Link
                className={`${counter === urls.length - 1 && "text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"}  capitalize`}
                href={url.href}>
                {url.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
