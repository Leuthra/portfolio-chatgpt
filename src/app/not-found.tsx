import not from "@/assets/404.gif";
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Romi Muharom - Page not found",
    description: "Kamu terlalu jauh dari tempat yang seharusnya kamu berada, lebih baik kamu kembali atau kamu akan menimbulkan luka yang tidak perlu."
  };

export default function NotFound() {
    return (
        <section className="space-y-3">
            <div className="flex flex-col justify-center text-center items-center">
                <Image src={not} alt="anime" unoptimized={true} width={370} height={300} priority={true} />
                <p className="text-3xl">It looks you re lost</p>
                <Link href="/" className="py-2 font-medium border-2 rounded-md h-auto px-2 my-6">
                    <button aria-label="Chat AI">
                        Go Home
                    </button>
                </Link>
            </div>
            {/* Add more div elements with the same content to repeat the gif */}
        </section>
    )
}