"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cx } from "@/utils/constants";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/contact": {
    name: "contact",
  },
};

const socialMedia = [
  { name: "github", link: "https://github.com/islamtouati" },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/islem-touati-9a5987197",
  },
];

export function Navbar() {
  const currentPath = usePathname();
  return (
    <aside className="sticky top-0 inset-x-0 tracking-tight z-50">
      <nav
        className="flex flex-col space-y-2 xs:space-y-0 xs:flex-row items-center relative px-2 xs:px-4 md:px-10 py-4 xs:py-8 backdrop-blur-sm bg-[#0b0b0b]/30 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <Link href="/" className="hidden flex-1 space-x-5 items-center xs:flex">
          <Image alt="My logo" src="/logo.svg" width="32" height="32" />
          <div className="hidden md:block">
            <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Touati Islam
            </p>
            <p className="text-xs text-neutral-800 dark:text-neutral-400">
              Frontend developer
            </p>
          </div>
        </Link>
        <Link href="/" className="flex space-x-5 items-center xs:hidden">
          <Image alt="My logo" src="/logo.svg" width="24" height="24" />
          <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
            Touati Islam
          </p>
        </Link>
        <div className="flex space-x-2 p-0.5 bg-neutral-800 rounded-full">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cx(
                  "transition-all text-sm xs:text-lg flex align-middle relative py-2 px-4 xs:px-5",
                  path === currentPath ? "bg-black text-white rounded-full" : ""
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-1 space-x-4 items-center justify-end">
          <div className="hidden space-x-3 items-center text-green-400 sm:flex">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span>Available</span>
          </div>
          <div className="hidden space-x-2 items-center md:flex">
            {socialMedia.map((item) => (
              <Link
                href={item.link}
                target="_blank"
                key={item.name}
                className="p-[0.5px] bg-gradient-to-b from-white/20 to-white/0 rounded-full w-10 h-10"
              >
                <div className="bg-[#050505] rounded-full hover:bg-[#1b1b1b] w-full h-full">
                  <div
                    className={cx(
                      "flex fill-white justify-center items-center h-full",
                      item.name === "linkedin" && "hover:fill-[#2867b2]"
                    )}
                  >
                    <svg
                      width="20"
                      height="20"
                      role="img"
                      aria-label={`${item.name} logo`}
                    >
                      <use href={`/sprite.svg#${item.name}`} />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
