import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-deep-navy border-b-8 border-black">
        
        {/* Chaotic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute top-[10%] left-[5%] text-[10vw] font-anton font-bold text-electric-blue opacity-50 rotate-[-15deg] hover:rotate-0 transition-transform cursor-default pointer-events-auto">WATER</span>
          <span className="absolute top-[20%] right-[10%] text-[8vw] font-anton font-bold text-orange opacity-60 rotate-[20deg] hover:-rotate-12 transition-transform cursor-default pointer-events-auto">ELECTROLYTES</span>
          <span className="absolute bottom-[30%] left-[15%] text-[12vw] font-anton font-bold text-lime-green opacity-40 rotate-[10deg] hover:-rotate-6 transition-transform cursor-default pointer-events-auto">SUGARS</span>
          <span className="absolute bottom-[20%] right-[5%] text-[9vw] font-anton font-bold text-yellow opacity-50 rotate-[-25deg] hover:rotate-12 transition-transform cursor-default pointer-events-auto">ENERGY</span>
          <span className="absolute top-[40%] right-[30%] text-[15vw] font-anton font-bold text-red opacity-30 -z-10 blur-[2px]">SWEAT</span>
        </div>

        {/* Main Hero Text */}
        <div className="z-10 text-center flex flex-col gap-0 items-center justify-center pointer-events-none relative w-full px-4">
          <h1 className="text-[12vw] leading-[0.85] font-anton font-bold text-white m-0 hover:text-sky-blue transition-colors pointer-events-auto cursor-default">HOW MUCH</h1>
          <h1 className="text-[12vw] leading-[0.85] font-anton font-bold text-lime-green m-0 hover:text-white transition-colors pointer-events-auto cursor-default">DID YOU</h1>
          <h1 className="text-[12vw] leading-[0.85] font-anton font-bold text-white m-0 hover:text-red transition-colors pointer-events-auto cursor-default">LOSE?</h1>
        </div>

        {/* CTA Buttons */}
        <div className="z-10 mt-16 flex flex-col sm:flex-row gap-6">
          <Link href="/plan" className="group flex items-center gap-4 px-8 py-6 bg-electric-blue text-white font-anton font-bold text-2xl uppercase tracking-wider border-4 border-black hover:bg-white hover:text-black transition-all hover:scale-105 rotate-[-2deg] hover:rotate-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Check Your Hydration <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
