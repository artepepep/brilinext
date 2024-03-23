import type { Metadata } from "next";
import { Footer, Header } from "@/modules";

import "./globals.css";
import { Provider } from "@/shared/components";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Brilinxoft",
  description: "Brilinxoft is a young company that provides Web and Mobile development, Quality assuranse and testing, UX and UI design. Also with our help you can integrate AI into your apps or ask for a technical support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="dark:bg-black dark:text-[#D9D9D9] font-sourceSans xl:text-xl xl:leading-[1.4]">
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
