"use client";

import { Droplet } from "lucide-react";

export default function DailyWater() {
  return (
    <section className="w-full min-h-screen py-32 px-4 bg-sky-blue text-black flex flex-col items-center justify-center overflow-hidden border-y-8 border-black">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-[12vw] md:text-9xl leading-none font-anton uppercase tracking-tight">
            THE DAILY <br/> <span className="text-white mix-blend-difference">MINIMUM.</span>
          </h2>
          <p className="text-2xl md:text-4xl font-bold font-sans uppercase border-l-8 border-black pl-6 py-2">
            Hydration isn't a goal. <br/> It's a baseline.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6 relative">
          <div className="absolute -top-20 -right-20 text-[20vw] opacity-10 pointer-events-none rotate-12">💧</div>
          
          <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-6xl font-anton uppercase mb-4 text-deep-navy">MEN</h3>
            <div className="flex items-center gap-4">
              <span className="text-8xl font-anton">3.7</span>
              <span className="text-3xl font-bold uppercase leading-none">Liters<br/>Per Day</span>
            </div>
          </div>

          <div className="bg-electric-blue text-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform ml-0 md:ml-12">
            <h3 className="text-6xl font-anton uppercase mb-4 text-lime-green">WOMEN</h3>
            <div className="flex items-center gap-4">
              <span className="text-8xl font-anton">2.7</span>
              <span className="text-3xl font-bold uppercase leading-none">Liters<br/>Per Day</span>
            </div>
          </div>

          <p className="mt-8 text-xl font-bold font-sans bg-black text-white p-6 rotate-1">
            * This includes water from food (about 20%). Add more for heat, humidity, or sweating.
          </p>
        </div>

      </div>
    </section>
  );
}
