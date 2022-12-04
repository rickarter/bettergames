import Image from "next/image";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });
export default function Hero() {
    const hero_content = {
      h1: "A Better Place To Enjoy Minecraft",
      description:
        "We are here to provide you with better minigame experience",
      hero_image: {
        alt: "Hero Image",
        path: "Path to image",
      },
      cta: "PLAY.BETTERGAMES.ONLINE",
    };

    const subway_content = {
      h1: "Subway Surfers",
      description:
        "Play your favourite game but inside of minecraft. Run as long as you can, beware of trains...",
      image: {
        alt: "Subway Surfers Image",
        path: "/subway_surfers.jpeg",
      },
    }
    const pvp_content = {
      h1: "Better PVP",
      description:
        "Completely redisgned PVP system that.... yada yada please come up with better description",
      image: {
        alt: "Better PVP Image",
        path: "/better_pvp.png",
      },
    }

    return (
        <>
        <section className="flex w-full flex-col">
          <div className="bg-[url('/map.png')] bg-top">
            <div className="bg-[url('/background.png')] bg-top mx-auto grid max-w-7xl grid-cols-1 gap-y-8 px-8 py-24">
              {/* Server Info */}
                  <div className="flex flex-col justify-center space-y-14">
                    <h1
                    className={`${dm.className} bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400 text-center text-8xl font-bold lg:text-8xl`}
                    >
                    {hero_content?.h1}
                    </h1>
                    <p className="text-center font-normal text-4xl text-white">
                    {hero_content?.description}
                    </p>
                    <div className="flex flex-col justify-center items-center">
                      <button className="rounded-lg shadow-2xl bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-5 font-medium text-grey text-2xl transition hover:bg-amber-400">
                        {hero_content?.cta}
                      </button>
                    </div>
                  </div>
              </div>
            </div>

          <div className="bg-gray mx-auto grid w-full cols-1 gap-x-20 gap-y-8 px-12 py-12 md:grid-cols-3">
            {/* Subway Surfers Info */}
            <div className="flex flex-col space-y-5">
              <h1
              className={`${dm.className} w-max text-4xl font-bold text-gray-800 lg:text-5xl`}
              >
                {subway_content?.h1}
              </h1>
              <p className="text-left font-light text-3xl text-gray-600">
                {subway_content?.description}
              </p>
            </div>
            {/* Right Image */}
            <div className="col-span-2">
              <Image
                className="min-h-[0rem] w-full rounded-lg shadow-2xl"
                src={subway_content?.image?.path}
                alt={subway_content?.image?.alt}
                width={640}
                height={360}
                priority
              />
            </div>
          </div>

          <div className="bg-gray-100 mx-auto grid w-full cols-1 gap-x-20 gap-y-8 px-12 py-12 md:grid-cols-3">
            {/* Better PVP Info */}
            <div className="order-first flex flex-col space-y-5 md:order-last">
              <h1
              className={`${dm.className} w-max text-4xl font-bold text-gray-800 lg:text-5xl`}
              >
                {pvp_content?.h1}
              </h1>
              <p className="text-left font-light text-3xl text-gray-600">
                {pvp_content?.description}
              </p>
            </div>
            {/* Right Image */}
            <div className="col-span-2">
              <Image
                className="min-h-[0rem] w-full rounded-lg shadow-2xl"
                src={pvp_content?.image?.path}
                alt={pvp_content?.image?.alt}
                width={640}
                height={360}
                priority
              />
            </div>
          </div>
        </section>
        </>
    )

}
