import Link from "next/link";
import { PreloadResources } from "./preload";
import Image from "next/image";
import { Suspense } from "react";

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}
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
function ChannelLink({
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
export default function Home() {
  return (
    <section className="space-y-8">
      <PreloadResources />
      <h1 className="font-medium text-2xl tracking-tighter">
        hey, I&apos;m Islam 👋
      </h1>
      <p className="prose prose-neutral whitespace-pre-line text-justify dark:prose-invert">
        {`I'm a frontend developer. I currently `}
        <Link href="/work">work</Link>
        {` as web developer at `}
        <span className="not-prose">
          <Badge href="https://factorydigitale.tech">
            <Image
              alt="Factory Digitale logomark"
              src="https://factorydigitale.tech/assets/img/apple-touch-icon.png"
              className="!mr-1"
              width="14"
              height="14"
            />
            Factory digitale
          </Badge>
        </span>
        {`, where I bring websites to life and implement new features using `}
        <Badge href="https://nextjs.org">
          <Image
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` and `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        {` to enhance user experience. helping fellow developers build exceptional web experiences with this powerful framework.
        
        Fueled by a passion for clean code and user-friendly experiences, I bring your front-end vision to life.  With 4 completed projects and consistently achieving 5-star client reviews, I'm confident I can exceed your expectations.`}
      </p>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={"/images/my_pic.jpg"}
          name="@islamtouati24"
          link="https://www.fiverr.com/islemtouati24/"
          icon="fiverr"
          review="1"
        />
        <ChannelLink
          img={"/images/my_pic.jpg"}
          name="@islamtouati"
          link="https://www.upwork.com/freelancers/~0136d4e43a1c98e08f"
          icon="upwork"
          review="0"
        />
      </div>
      <h1 className="font-medium text-2xl tracking-tighter">
        What do I do professionally?
      </h1>
      <p className="prose whitespace-pre-line prose-neutral dark:prose-invert">
        As a frontend developer, I&apos;m the architect behind the scenes,
        crafting the visual elements and interactive features that bring
        websites to life. I wield the power of React and Next.js to translate
        ideas into engaging user experiences, ensuring not only functionality
        but also a touch of artistic flair.{" "}
        {`
        `}
        I also collaborate closely with designers, back-end developers, and
        other team members to bridge the gap between vision and execution. This
        collaborative environment allows me to constantly learn, adapt, and
        refine my skills.
      </p>
      <h1 className="font-medium text-2xl tracking-tighter">
        What makes me tick?
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {" "}
        I&apos;m driven by the challenge of turning complex ideas into intuitive
        and beautiful user experiences. Witnessing users seamlessly navigate and
        interact with the websites and applications I help build brings me
        immense satisfaction. Beyond the technical aspects, I&apos;m passionate
        about creating digital experiences that have a positive impact. Whether
        it&apos;s building an accessible website or contributing to a social
        good platform, I find purpose in using my skills to make a difference in
        the online world.
      </p>
    </section>
  );
}
