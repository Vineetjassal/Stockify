import { ThemeToggle } from "@/components/theme-toggle";
import { getStockData } from "@/lib/get-stock-data";
import { companies } from "@/lib/stock-data";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Github, TrendingUp, Twitter } from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
import Peerlistspotlightlight from "../public/darksvg.svg";
import Peerlistspotlightdark from "../public/lightsvg.svg";
import TechnologyDisplay from "@/components/TechnologyDisplay";
import { FeaturesSectionDemo } from "@/components/Features";

export default function Home({
  searchParams,
}: {
  searchParams: { ticker?: string };
}) {
  const ticker = searchParams.ticker || companies[0].ticker;
  const stockData = getStockData(ticker);

  return (
    <div className='min-h-screen pt-6 pb-12 lg:px-48 px-3 dark:bg-grid-zinc-900 bg-grid-zinc-50'>
      <nav className='w-full flex flex-row gap-2 justify-between'>
        <div className="flex">
          <TrendingUp size={30} className="mt-1"/>
          <h1 className="text-2xl font-medium ml-2"><a href="/">Stockify</a></h1>
        </div>
        <div>
        <Link
          href={"https://github.com/vineetjassal/stockify"}
          target='_blank'
          rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "h-[40px] w-[40px] px-0 mr-2"
            )}>
            <Github className='h-[1.2rem] w-[1.2rem]' />
            <span className='sr-only'>GitHub</span>
          </div>
        </Link>
        <ThemeToggle />
        </div>  
      </nav>

      <section className="flex flex-col items-center justify-center py-20">
      <div className="space-y-4 text-center">
        <div className="dark:flex justify-center hidden mt-4">
          <Image src={Peerlistspotlightlight} alt={""} width={180}/>
        </div>
        <div className="flex justify-center dark:hidden">
          <Image src={Peerlistspotlightdark} alt={""} width={180}/>
        </div>
        <div className="inline-flex">
        <a href="https://x.com/vineetjassal/" className="border-2 p-6 pt-1 pb-1 rounded-2xl flex mt-4">
        <Twitter className="flex mr-2 mt-1" size={17} /> Introducing Stockify <ArrowUpRight size={18} className="flex mt-1 ml-1"/> 
        </a>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
        Building Stock Graph <br /> for your Next project
        </h1>
        <p className="text-muted-foreground md:text-xl mt-4">
        Enhance your Next.js project with Tailwind CSS<br /> and Shadcn/UI custom components, hooks, and utilities.
        </p>
        <div className="">
        <Link
          href="#"
          className="inline-flex mt-4 h-10 items-center justify-center rounded-md px-6 bg-black dark:bg-white dark:text-black text-sm font-medium text-primary-foreground shadow hover:bg-dark/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started <ArrowRight className="ml-2" size={20}/>
        </Link>
        <Link href="https://demo-getstockify.vercel.app/" className="inline-flex mt-4 h-10 items-center justify-center rounded-md px-6 ml-4 bg-black dark:bg-white dark:text-black text-sm font-medium text-primary-foreground shadow hover:bg-dark/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false} target="_blank">Live Demo</Link>
        </div>
      </div>
    </section>

    <div className="flex justify-center">
    <video autoPlay loop style={{ width: '980px', height: '470px' }} className="shadow-lg shadow-black rounded-lg dark:shadow-white">
        <source src="/demo.mp4" />
    </video>
    </div>
      <TechnologyDisplay />
      <FeaturesSectionDemo />
      <Footer />
    </div>
  );
}
