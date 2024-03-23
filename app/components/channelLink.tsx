import Image from "next/image";
import React from "react";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function ChannelLink({
  img,
  link,
  name,
  icon,
  review,
}: {
  img: string;
  link: string;
  name: string;
  icon: string;
  review: string;
}) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-0.5 relative h-6 w-6 items-center -top-6 -right-10">
              <svg
                width="50"
                height="50"
                role="img"
                aria-label={`${icon} logo`}
              >
                <use href={`/sprite.svg#${icon}`} />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {review} review
            </p>
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}
