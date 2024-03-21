import { ReactNode } from 'react';

export default function Section({
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className="relative pt-20 md:pt-[104px] xl:pt-[164px]"
    >
      {children}
    </section>
  );
}