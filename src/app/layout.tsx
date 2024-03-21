import type { Metadata } from "next";
import { Footer, Header } from "@/modules";

import "./globals.css";
import { Provider } from "@/shared/components";

export const metadata: Metadata = {
  title: "Brilinxoft",
  description: "Brilinxoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
