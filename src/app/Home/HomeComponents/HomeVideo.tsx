import React from 'react';

function HomeVideo() {
  return (
   
    <section className="relative overflow-hidden bg-neutral-950 sm:mt-[62px] md:mt-[77px] ">
      {/* --- Decorative background --- */}
      {/* Soft color glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_12%_-10%,rgba(16,185,129,0.20),transparent),radial-gradient(900px_500px_at_90%_0%,rgba(59,130,246,0.18),transparent)]" />
        {/* Subtle grid with radial fade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]" />
      </div>

      {/* --- Content --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[88vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wider text-emerald-300/80">
              GROVEX • SKILLS THAT MATTER
            </p>

            <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                Advanced Meta <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">Ads</span>
              </span>{" "}
              <span className="text-white/90">Course in Kerala</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              Master performance marketing the practical way—ad strategy, creatives,
              tracking, and scaling. Designed for marketers, founders, and growth teams.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 ease-out hover:scale-[1.03] bg-gradient-to-r from-emerald-600 to-green-700 hover:from-green-600 hover:to-emerald-700"
              >
                Contact Us
              </a>

              
            </div>

            
           
          </div>

          {/* Visual */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-x-10 bottom-10 -z-10 h-40 rounded-[40%] bg-emerald-500/15 blur-3xl" />
            <img
              src="/images/Student_Image.png"
              alt="Student holding laptop and notes"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-[0_30px_60px_rgba(16,185,129,0.25)] motion-safe:animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      {/* Keyframes (scoped) */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  


  );
}

export default HomeVideo;