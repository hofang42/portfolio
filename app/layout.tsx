import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";

import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Phan Lê Thanh Hoàng — DevOps & Cloud Engineering";
const description =
  "Software Engineer transitioning into Cloud Architecture & DevOps. Building HA AWS infrastructure with Terraform, Docker, Kubernetes. CloudOps intern @ XBrain × AWS — Da Nang, Vietnam.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoang-portfolio.vercel.app"),
  title,
  description,
  keywords: [
    "Phan Le Thanh Hoang",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Terraform",
    "Kubernetes",
    "Docker",
    "XBrain",
    "FPT University",
    "Da Nang",
    "Portfolio",
  ],
  authors: [{ name: "Phan Lê Thanh Hoàng" }],
  icons: {
    icon: [
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://hoang-portfolio.vercel.app",
    siteName: "hoang.ops",
    locale: "en_US",
    images: [
      {
        url: "/assets/seo.png",
        width: 1200,
        height: 630,
        alt: "Phan Lê Thanh Hoàng — DevOps & Cloud Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/seo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-bg text-ink font-sans antialiased">
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          type="module"
          data-cf-beacon='{"token":"67a536c74d204f699a6aac05be738551"}'
          strategy="afterInteractive"
        />

        <a href="#home" className="skip-link">
          skip --to-content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
