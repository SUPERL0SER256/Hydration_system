"use client";

export default function SweatFacts() {
  return (
    <section className="w-full py-32 px-4 bg-orange text-black flex flex-col items-center overflow-hidden border-b-8 border-black">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        <div className="text-center md:text-left">
          <h2 className="text-[10vw] md:text-8xl leading-none font-anton uppercase tracking-tight text-white mix-blend-difference">SWEAT IS DATA.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-yellow border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform">
            <h3 className="text-4xl font-anton uppercase mb-4 text-red">Fact 01</h3>
            <p className="text-2xl font-bold font-sans uppercase mb-4 leading-tight">Thirst is a delayed signal.</p>
            <p className="text-lg font-medium font-sans">By the time you feel thirsty, you're already 1-2% dehydrated. Drink before your body has to ask.</p>
          </div>

          <div className="bg-deep-navy border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white hover:scale-105 transition-transform rotate-2">
            <h3 className="text-4xl font-anton uppercase mb-4 text-lime-green">Fact 02</h3>
            <p className="text-2xl font-bold font-sans uppercase mb-4 leading-tight">Clear pee isn't the goal.</p>
            <p className="text-lg font-medium font-sans text-gray-300">Perfectly clear urine means you're over-hydrated and flushing out electrolytes. Aim for pale yellow.</p>
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform -rotate-2">
            <h3 className="text-4xl font-anton uppercase mb-4 text-electric-blue">Fact 03</h3>
            <p className="text-2xl font-bold font-sans uppercase mb-4 leading-tight">Water weight is heavy.</p>
            <p className="text-lg font-medium font-sans">Losing 2% of your body weight in sweat can cause a 10% drop in athletic performance. Weigh yourself before and after long workouts.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
