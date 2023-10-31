import { SVGLineGlowAnimateContainer } from "@/components/common/line-glow";
import { siteConfig } from "@/config/site";
import { DashboardIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black h-screen max-h-screen flex items-center">
      <div className="absolute bottom-0 -z-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6">
        <div className="absolute rotate-90 top-1/2 left-1/2 mt-2.5 transform -translate-x-1/2 -translate-y-1/2">
          <SVGLineGlowAnimateContainer />
        </div>

        <div className="bg-black h-28 mx-auto w-full flex items-center content-center justify-center space-x-2">
          <img alt="logo" className="w-16 z-10" src="/logos/logo-white-256x256.png" />
          <span className="text-white text-5xl font-semibold z-10">{siteConfig.name}</span>
        </div>

        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#dfdfdf,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent mx-auto">Timeless elegance meets modern trends.</span>

            <div className="w-full flex items-center justify-center space-x-4 my-5">
              <Link href={"/shop"}>
                <div className="relative max-w-xs overflow-hidden  border flex items-center flex-col border-neutral-800 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                  <div className="mb-4">
                    <ExternalLinkIcon className="h-12 w-12 text-neutral-400" />
                  </div>
                  <h3 className="mb-2 font-medium tracking-tight text-neutral-100">Shop</h3>
                  <p className="text-xs text-neutral-400">Discover the new collections</p>
                </div>
              </Link>
              <Link href={"/admin"}>
                <div className="relative max-w-xs overflow-hidden border flex items-center flex-col border-neutral-800 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                  <div className="mb-4">
                    <DashboardIcon className="h-12 w-12 text-neutral-400" />
                  </div>
                  <h3 className="mb-2 font-medium tracking-tight text-neutral-100">Admin</h3>
                  <p className="text-xs text-neutral-400">Manage and update the shop</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
