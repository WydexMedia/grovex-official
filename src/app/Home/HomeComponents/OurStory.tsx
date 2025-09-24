// src/app/Home/HomeComponents/OurStory.tsx

/* eslint-disable @typescript-eslint/no-namespace */
'use client';

import React, { useEffect } from 'react';

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
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left side – Text */}
        <div className="space-y-6 md:ml-[100px]">
          <h2 className="text-4xl font-bold text-black">Our Story</h2>
          <p className="text-lg text-black leading-relaxed">
            Grovex started with a simple idea—learning should be clear, useful, and connected to the real world. We bring together courses in Meta Ads, SEO, Marketing Psychology, and Zoho Books to give learners practical skills they can apply right away.

            Instead of heavy theory, we focus on structured lessons that make sense and deliver results. Our story is about helping people grow—whether it’s building a career, running a business, or simply gaining confidence in new skills.
          </p>
          <button
            className="learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#086046] to-[#18cb96] rounded-xl text-white text-lg font-medium hover:from-[#086046]/30 hover:to-[#18cb96] hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-purple-400/20 hover:shadow-purple-400/30 transform hover:scale-105"
            style={{ transitionDelay: '0.6s' }}
          >
            About Us
          </button>
        </div>

        {/* Right side – 3D logo */}
        <div className="flex flex-col justify-center items-center bg-black rounded-2xl shadow-xl p-6 min-w-[260px] w-full max-w-[340px] h-[340px] mx-auto border border-gray-800">

          <img
            src="/Logo/GROVEX LOGO.png"
            alt="Grovex"
            className="w-full h-full rounded-xl object-cover"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '300px',
              backgroundColor: 'transparent',
            }}
          />

        </div>
      </div>
    </section>
  );
};

export default OurStory;
