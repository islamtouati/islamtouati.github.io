import Link from "next/link";
import { PreloadResources } from "./preload";
import Image from "next/image";
import ChannelLink from "./components/channelLink";
import Badge from "./components/badge";

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
