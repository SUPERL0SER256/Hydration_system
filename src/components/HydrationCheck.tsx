import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HydrationCheck() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-lime-green text-black">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-anton uppercase tracking-tight mb-4">Hydration Plan</h2>
          <p className="text-2xl font-bold font-sans uppercase">Know what you need.</p>
        </div>

        <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-1">
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-deep-navy text-white p-8 border-4 border-black -rotate-1">
              <h3 className="text-4xl font-anton uppercase text-lime-green mb-2">The Game Plan</h3>
              <p className="text-xl font-bold mb-6">When you run and play hard, your body loses water and important minerals through sweat. Let's fill your tank back up!</p>
              
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 p-4 border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-anton text-2xl text-sky-blue">BEFORE YOU PLAY</h4>
                  <p>Drink 2 big glasses of water before you even start moving.</p>
                </div>
                <div className="bg-white/10 p-4 border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-anton text-2xl text-orange">WHILE YOU PLAY</h4>
                  <p>Take 4 to 6 good gulps of water every 20 minutes when you take a break. If you're playing for a really long time, have a sports drink to get your salt back!</p>
                </div>
                <div className="bg-white/10 p-4 border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-anton text-2xl text-yellow">AFTER YOU'RE DONE</h4>
                  <p>Drink lots of water to replace what you sweat out. Eat a banana or some salty snacks to help your muscles feel good again!</p>
                </div>
              </div>
            </div>
            
            <Link href="/" className="self-start flex items-center gap-2 px-6 py-4 bg-black text-white font-anton uppercase text-xl hover:bg-electric-blue transition-colors border-4 border-transparent hover:border-black">
              <ArrowLeft className="w-6 h-6" /> Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
