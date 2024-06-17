import type { Metadata } from "next";
import {AdminHeader, AdminLeftMenu} from "@/adminModules";

import "../globals.css";

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
      <body className="flex flex-col flex-grow font-sourceSans xl:text-xl xl:leading-[1.4]">
        <AdminHeader/>
        <div className={"w-full flex flex-grow"}>
          <AdminLeftMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
