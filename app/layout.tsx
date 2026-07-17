import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { MotionProvider } from "@/components/motion";
import { siteConfig } from "@/lib/data";

const generalSans = localFont({
  src: "./fonts/General-Sans-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body>
        <MotionProvider>
          <CustomCursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
