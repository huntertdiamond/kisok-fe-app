import type { Metadata } from "next";

import "./globals.css";
import { ProviderIndex } from "@/lib/providers/providerIndex";

export const metadata: Metadata = {
  title: "Kiosk Demo App",
  description: "You should hire me. I'd like that and you would too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderIndex>{children}</ProviderIndex>
      </body>
    </html>
  );
}
