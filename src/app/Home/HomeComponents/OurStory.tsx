// src/app/Home/HomeComponents/OurStory.tsx

/* eslint-disable @typescript-eslint/no-namespace */
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Support for the <model-viewer> web component
       */
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'auto-rotate'?: boolean;
          'camera-controls'?: boolean;
          'background-color'?: string;
          exposure?: string;
          'tone-mapping'?: string;
          'shadow-intensity'?: string;
          'shadow-softness'?: string;
          loading?: 'eager' | 'lazy';
        },
        HTMLElement
      >;
    }
  }
}

const OurStory: React.FC = () => {
  useEffect(() => {
    // Load the model-viewer script if not already loaded
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-32 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        {/* Left — Copy */}
        <div className="md:ml-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-700">
            About Grovex
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Story
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
           "Grovex started with a simple idea—learning should be clear, useful, and connected to the real world. We bring together courses in Meta Ads, SEO, Marketing Psychology, and Zoho Books to give learners practical skills they can apply right away. Instead of heavy theory, we focus on structured lessons that make sense and deliver results. Our story is about helping people grow—whether it’s building a career, running a business, or simply gaining confidence in new skills."
          </p>

          {/* micro trust points */}
          <ul className="mt-6 grid gap-3 text-slate-700/90">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Outcome-focused curriculum
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Mentorship from practitioners
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/about"
              className="
                inline-flex items-center gap-2 rounded-xl
                bg-gradient-to-r from-emerald-600 to-green-700
                px-6 py-3 font-semibold text-white
                shadow-lg shadow-emerald-500/20
                transition-all duration-300 ease-out
                hover:scale-[1.03] hover:from-green-600 hover:to-emerald-700
                focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:ring-offset-2
              "
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right — Logo card */}
        <div className="mx-auto w-full max-w-md md:mr-8">
          <div
            className="
              group relative rounded-2xl border border-slate-200 bg-white
              p-4 shadow-xl ring-1 ring-black/5 transition-transform duration-300
              hover:-translate-y-1
            "
          >
            {/* inner dark tile */}
            <div className="rounded-xl bg-neutral-950 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <img
                src="/Logo/GROVEX LOGO.png"
                alt="Grovex logo"
                className="mx-auto h-56 w-full max-w-[360px] rounded-lg object-contain"
              />
            </div>

            {/* soft bottom glow */}
            <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-6 rounded-full bg-emerald-400/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
