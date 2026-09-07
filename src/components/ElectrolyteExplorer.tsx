"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const electrolytes = [
  {
    symbol: "Na⁺",
    name: "SODIUM",
    role: "THE SPONGE",
    detail: "Sodium is the salty stuff you taste when you sweat! It acts like a sponge, helping your body hold onto the water you drink so you don't dry out. Without it, your muscles might cramp up!",
    color: "bg-electric-blue",
    textColor: "text-white",
    rotate: "rotate-2",
  },
  {
    symbol: "K⁺",
    name: "POTASSIUM",
    role: "THE MUSCLE MOVER",
    detail: "Potassium is the superhero that helps your muscles flex and relax! It works together with sodium to keep the water balanced all over your body. You can get lots of it from eating bananas!",
    color: "bg-lime-green",
    textColor: "text-black",
    rotate: "-rotate-2",
  },
  {
    symbol: "Mg²⁺",
    name: "MAGNESIUM",
    role: "THE BATTERY",
    detail: "Magnesium is like the battery power for your body. It helps turn the food you eat into the energy you need to run around. If you're feeling really tired, you might need more magnesium!",
    color: "bg-orange",
    textColor: "text-black",
    rotate: "rotate-1",
  },
  {
    symbol: "Ca²⁺",
    name: "CALCIUM",
    role: "THE BUILDER",
    detail: "You probably know calcium makes your bones super strong, but did you know your muscles need it to move? Every time you jump, run, or throw, calcium is helping your muscles do the work!",
    color: "bg-yellow",
    textColor: "text-black",
    rotate: "-rotate-1",
  },
  {
    symbol: "Cl⁻",
    name: "CHLORIDE",
    role: "THE BALANCER",
    detail: "Chloride is sodium's best friend! They travel together in your sweat (that's what makes salt!). It helps make sure the liquids in your body stay perfectly balanced while you play.",
    color: "bg-red",
    textColor: "text-white",
    rotate: "rotate-3",
  },
];

export default function ElectrolyteExplorer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen py-32 px-4 bg-white text-black flex flex-col items-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        <div className="text-center md:text-left border-b-8 border-black pb-8">
          <h2 className="text-[10vw] md:text-8xl leading-none font-anton uppercase tracking-tight">Meet The Sweat Squad</h2>
          <p className="text-2xl md:text-4xl font-bold font-sans uppercase mt-4">Your body's secret helpers.</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {electrolytes.map((elec, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={elec.symbol}
                className={cn(
                  "relative border-8 border-black transition-all duration-300 ease-in-out cursor-pointer",
                  elec.color,
                  elec.textColor,
                  !isExpanded && elec.rotate,
                  !isExpanded ? "hover:scale-105" : "scale-100 z-10 w-full md:w-[600px] rotate-0 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]",
                  isExpanded ? "p-12" : "p-8 w-[280px]"
                )}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-6xl font-anton">{elec.symbol}</h3>
                  <button className="p-2 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-colors">
                    <Plus className={cn("w-8 h-8 transition-transform duration-300", isExpanded && "rotate-45")} />
                  </button>
                </div>
                
                <h4 className="text-4xl font-anton mb-2">{elec.name}</h4>
                <p className="text-xl font-bold uppercase mb-4">{elec.role}</p>
                
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t-4 border-current animate-in fade-in slide-in-from-top-4">
                    <p className="text-xl font-medium leading-relaxed font-sans">{elec.detail}</p>
                    <button className="mt-8 px-6 py-3 bg-black text-white font-anton uppercase text-xl hover:bg-white hover:text-black hover:border-black border-4 border-transparent transition-colors">
                      Close
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
