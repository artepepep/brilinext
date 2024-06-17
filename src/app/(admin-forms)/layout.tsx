import type { Metadata } from "next";

import "../globals.css";
import {Provider} from "@/shared/components";

export const metadata: Metadata = {
  title: "Brilinxoft",
  description: "Brilinxoft is a software development company that provides innovative technology solutions for businesses of all sizes. Our services include web and mobile app development, Quality Assurance and Testing, UX/UI Design, Technical Support, AI apps & Integration."
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-black font-sourceSans xl:text-xl xl:leading-[1.4]" >
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
