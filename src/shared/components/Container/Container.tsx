import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto overflow-x-hidden px-4 md:px-5 xl:px-20">{children}</div>
  );
}