type Props = {
  number: string,
  heading: string,
  text: string,
}

export default function Service ({ number, heading, text }: Props) {
  return (
    <li className="flex flex-col gap-6 pb-8 pt-8 border-b-[1px] md:pt-10 xl:flex-row xl:items-start" key={number}>
      <p className="text-[40px] uppercase text-[#3892F5] xl:max-w-fit xl:mr-[150px] xl:text-[64px] xl:leading-[72px]">{number}</p>
      <div className="flex flex-col gap-6 md:flex-row xl:items-center">
        <h3 className="text-[32px] md:w-1/2 xl:w-1/2 xl:text-[48px]">{heading}</h3>
        <p className="text-[16px] md:w-1/2 xl:w-1/2 xl:ml-auto">{text}</p>
      </div>
    </li>
  )
}