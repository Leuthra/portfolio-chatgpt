import me from "@/assets/me.webp";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import FadeInLeft from "@/components/transition/FadeInLeft";
import FadeInUp from "@/components/transition/FadeInUp";

export const metadata: Metadata = {
  title: "Romi Muharom - My Smart Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 size-auto bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <FadeInUp>
            <H1 className="text-center sm:text-start">Hi, I&apos;m Romi 👋</H1>
          </FadeInUp>
          <FadeInLeft>
            <p className="text-center sm:text-start">
              I&apos;m a web developer from Indonesia who builds cool
              projects and learns to code over the internet.
            </p>
          </FadeInLeft>
        </div>
        <FadeInLeft>
          <div className="flex justify-center">
            <Image
              src={me}
              loading="eager"
              alt="A photo of me"
              className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
              priority={true}
              placeholder="blur"
              blurDataURL={me.toString()}
            />
          </div>
        </FadeInLeft>
      </section>
      <section className="space-y-3 text-center">
        <FadeInUp>
          <H2>Ask the chatbot anything about me</H2>
        </FadeInUp>
        <FadeInLeft>
          <p>
            Click the little <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline pb-1 lucide lucide-bot"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg> icon in the top bar
            to activate the AI chat. You can ask the chatbot any question about me
            and it will find the relevant info on this website. The bot can even
            provide links to pages you&apos;re looking for.
          </p>
        </FadeInLeft>
      </section>
    </section>
  );
}