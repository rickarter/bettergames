import Image from "next/image";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });
export default function Hero() {
    const hero_content = {
      h1: "A Better Place To Enjoy Minecraft",
      description:
        "We are here to provide you with better mini game experience",
      hero_image: {
        alt: "Hero Image",
        path: "Path to image",
      },
      cta: "PLAY.BETTERGAMES.ONLINE",
    };

    return (
        <>
        <section className="flex w-full bg-white">
            <div className="bg-[url('/Beta.webp')] mx-auto grid max-w-7xl grid-cols-1 gap-4 px-8 py-8">
            {/* Server Info */}
                <div className="flex flex-col justify-center space-y-8">
                  <h1
                  className={`${dm.className} bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400 text-center text-5xl font-bold lg:text-7xl`}
                  >
                  {hero_content?.h1}
                  </h1>
                  <p className="text-center text-xl text-gray-600">
                  {hero_content?.description}
                  </p>
                  <div className="flex flex-col justify-center items-center">
                    <button className="rounded-lg bg-yellow-400 px-8 py-4 font-medium text-dark transition hover:bg-amber-400">
                        {hero_content?.cta}
                    </button>
                  </div>
                </div>
            </div>
        </section>
        </>
    )

}