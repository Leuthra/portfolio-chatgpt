import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import FadeInLeft from "@/components/transition/FadeInLeft";
import FadeInUp from "@/components/transition/FadeInUp";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Connect with me through my social media channels and discover how we can collaborate on exciting projects together.",
  alternates: {
    canonical: '/social',
    languages: {
      'id': '/id'
    },
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <FadeInUp>
        <H1>Social Media</H1>
      </FadeInUp>
      <FadeInLeft>
        <section className="space-y-3">
          <p>
            I share open code projects and contribute to relevant repositories on github. mainly focus on developing innovative and useful web and solutions. Feel free to visit my profile to see more about my work.
          </p>
          <p>links to all my social accounts:</p>
          <ul className="list-inside list-disc space-y-1">
            <li className="py-1">
              <a
                href="https://www.instagram.com/romi_muh05"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                Instagram
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.github.com/leuthra"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                GitHub
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.linkedin.com/in/romidev"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                LinkedIn
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://discord.com/users/931877123277352991"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                Discord
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://facebook.com/romi.muharam.18"
                className="underline dark:text-[#DEC8F8] text-[#41008C]"
              >
                Facebook
              </a>
            </li>
          </ul>
          <hr className="border-muted" />
        </section>
      </FadeInLeft>
      <section className="space-y-3">
        <FadeInUp>
          <H2>Business inquiries</H2>
        </FadeInUp>
        <FadeInLeft>
          <p>
            If you would like to work with me on a project, please contact me via email at{" "}
            <a
              href="mailto:leuthra@romidev.me"
              className="underline dark:text-[#DEC8F8] text-[#41008C]"
            >
              leuthra@romidev.me
            </a>
          </p>
          <p className="pt-5">
            see my skills on the resume I&apos;ve created on the{" "}
            <a
              href="/resume.pdf"
              className="underline dark:text-[#DEC8F8] text-[#41008C]"
            >
              resume.pdf
            </a>
          </p>
        </FadeInLeft>
      </section>
    </section>
  );
}