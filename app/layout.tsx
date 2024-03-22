import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import Link from "next/link";
import Image from "next/image";
import { cx } from "@/utils/constants";

const metadata: Metadata = {
  metadataBase: new URL("https://islamtouati.vercel.app/"),
  title: {
    default: "Islam Touati",
    template: "%s | Islam Touati",
  },
  description: "Front-end Developer",
  openGraph: {
    title: "Islam Touati",
    description: "Front-end Developer",
    url: "https://islamtouati.vercel.app/",
    siteName: "Islam Touati",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#0b0b0b]",
        inter.className
      )}
    >
      <body className="antialiased">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <footer className="px-[5%] py-8 flex space-x-5 items-center justify-center">
          <Link href="/">
            <Image alt="My logo" src="/logo.svg" width="32" height="32" />
          </Link>
          <p className="text-xs font-medium text-neutral-900 dark:text-neutral-300 mb-0 hover:underline">
            Copyright &copy;{new Date().getFullYear()} - Touati Islam
          </p>
        </footer>
      </body>
    </html>
  );
}
