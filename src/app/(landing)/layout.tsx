import type { Metadata } from "next";
import { Footer, Header } from "@/landingModules";

import "../globals.css";
import { Provider } from "@/shared/components";

export const metadata: Metadata = {
  title: "Brilinxoft",
  description: "Brilinxoft is a software development company that provides innovative technology solutions for businesses of all sizes. Our services include web and mobile app development, Quality Assurance and Testing, UX/UI Design, Technical Support, AI apps & Integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black dark:text-[#D9D9D9] font-sourceSans xl:text-xl xl:leading-[1.4]">
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
