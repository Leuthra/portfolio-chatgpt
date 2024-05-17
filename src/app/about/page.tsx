import jogging from "@/assets/jogging.webp";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "@/components/transition/FadeInLeft";
import FadeInUp from "@/components/transition/FadeInUp";

export const metadata: Metadata = {
  title: "About Me",
  description: "Explore further details about Romi Muharom and delve deeper into his portfolio of remarkable work and achievements.",
  alternates: {
    canonical: '/about',
    languages: {
      'id': '/id'
    },
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <FadeInUp>
        <H1>About Me</H1>
      </FadeInUp>
      <section className="space-y-3">
        <FadeInLeft>
          <p>
            My name is <strong>Romi Muharom</strong> and I am a self-taught IT Enthusiast from Indonesia. I started programming in 2021, at the age of 17, and since then I have created several projects that can develop my skills.
          </p>
          <p>
            I&apos;m passionate about building cool websites and I love
            sharing the things I learn with my audience.
          </p>
        </FadeInLeft>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <FadeInUp>
          <H2>Skills</H2>
        </FadeInUp>
        <FadeInLeft>
          <p>
            I&apos;m a full-stack web developer who delves into{" "}
            <strong>React</strong>, <strong>Next.js</strong>, and{" "}
            <strong>Node.js</strong>.
          </p>
          <div>
            <p>
            I also have experience with flutter but have stopped at the moment. I prefer web development because it can be used almost on all devices and reaches the whole world.
            </p>
          </div>
        </FadeInLeft>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <FadeInUp>
          <H2>Side projects</H2>
        </FadeInUp>
        <FadeInLeft>
          <p>
            In my free time, I like to work on side projects to keep my skill
            sharp and try out new tech. Here is a list of my current projects:{" "}
          </p>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://teacherday.vercel.app"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                Teacherday.vercel.app
              </a>{" "}
              - An Happy teachers day app
            </li>
            <li>
              <Link
                href="https://contact-leuthra.vercel.app"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                Contact-leuthra.vercel.app
              </Link>{" "}
              - An Phone number storage app
            </li>
          </ul>
        </FadeInLeft>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <FadeInUp>
          <H2>Hobbies</H2>
        </FadeInUp>
        <FadeInLeft>
          <p>
            Besides programming, I like to exercise. I play soccer and do
            Badmintoon. I also like reading comics and going out
            sometimes. I think having hobbies other than coding is important for
            mental health.
          </p>
          <p>
            I&apos;m also very much into self-improvement, nutrition, and positive
            psychology.
          </p>
          <Image
            src={jogging}
            alt="jogging group photo"
            className="rounded-md"
            priority={true}
            placeholder="blur"
            blurDataURL={jogging.toString()}
          />
        </FadeInLeft>
      </section>
    </section>
  );
}
