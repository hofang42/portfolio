import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Phan Lê Thanh Hoàng — DevOps & Cloud Engineering",
  description:
    "Final-year Software Engineer at FPT University (GPA 8.54). Xbrain x AWS Accelerator trainee in Da Nang. Frontend → DevOps & Cloud.",
  keywords: [
    "Phan Le Thanh Hoang",
    "DevOps",
    "Cloud Engineer",
    "AWS",
    "FPT University",
    "Xbrain",
    "Da Nang",
    "Portfolio",
  ],
  authors: [{ name: "Phan Lê Thanh Hoàng" }],
  openGraph: {
    title: "Phan Lê Thanh Hoàng — DevOps & Cloud Engineering",
    description:
      "Bridging frontend engineering with DevOps & cloud infrastructure. Xbrain x AWS Accelerator.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
