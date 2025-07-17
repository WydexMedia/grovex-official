import React, { useEffect, useRef, useState } from 'react';

interface SectionVisibility {
  design: boolean;
  build: boolean;
  market: boolean;
}

function VideoAnimation() {
  const designRef = useRef<HTMLDivElement | null>(null);
  const buildRef = useRef<HTMLDivElement | null>(null);
  const marketRef = useRef<HTMLDivElement | null>(null);

  const [scrollY, setScrollY] = useState(0);
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>({
    design: false,
    build: false,
    market: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute('data-section') as keyof SectionVisibility;
          if (sectionName) {
            setSectionVisibility(prev => ({
              ...prev,
              [sectionName]: entry.isIntersecting
            }));
          }
        });
      },
      { 
        threshold: 0.4,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (designRef.current) observer.observe(designRef.current);
    if (buildRef.current) observer.observe(buildRef.current);
    if (marketRef.current) observer.observe(marketRef.current);

    return () => observer.disconnect();
  }, []);

  const getScrollTransform = (sectionIndex: number) => {
    const sectionOffset = sectionIndex * window.innerHeight;
    const relativeScroll = scrollY - sectionOffset;
    const progress = Math.max(0, Math.min(1, (relativeScroll + window.innerHeight * 0.7) / window.innerHeight));
    
    const scale = 0.7 + (progress * 0.3);
    const translateY = (1 - progress) * 150;
    const opacity = progress < 0.2 ? 0 : progress > 0.8 ? 1 : (progress - 0.2) / 0.6;
    
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      opacity: opacity,
    };
  };

  const getVideoTransform = (sectionIndex: number) => {
    const sectionOffset = sectionIndex * window.innerHeight;
    const relativeScroll = scrollY - sectionOffset;
    const progress = Math.max(0, Math.min(1, (relativeScroll + window.innerHeight * 0.6) / window.innerHeight));
    
    const scale = 0.8 + (progress * 0.2);
    const translateY = (1 - progress) * 100;
    const opacity = progress < 0.1 ? 0 : progress > 0.9 ? 1 : progress;
    
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      opacity: opacity,
    };
  };

  return (
    <div>
      {/* Design Section */}
      <div 
        ref={designRef}
        data-section="design"
        className='relative bg-black h-screen overflow-hidden'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[40%] md:h-[85%] object-cover transition-all duration-[2000ms] ease-out'
            style={sectionVisibility.design ? getVideoTransform(0) : { opacity: 0, transform: 'scale(0.8) translateY(100px)' }}
          >
            <source src='/videos/butterfly.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        
        <div className="relative z-20 w-full h-full flex flex-col">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className="max-w-4xl mx-auto transition-all duration-[1500ms] ease-out"
              style={sectionVisibility.design ? getScrollTransform(0) : { opacity: 0, transform: 'scale(0.7) translateY(150px)' }}
            >
              <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Design</span>
                </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out" style={{ transitionDelay: '0.3s' }}>
                Creativity meets logic. Every interface we craft begins with a design rooted in clarity, beauty, and purpose.
              </p>
              <a 
                href="#" 
                className="learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/40 rounded-xl text-white text-lg font-medium hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-blue-400/20 hover:shadow-blue-400/30 transform hover:scale-105"
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Build Section */}
      <div 
        ref={buildRef}
        data-section="build"
        className='relative bg-black h-screen overflow-hidden my-[-2px]'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[40%] md:h-[85%] object-cover transition-all duration-[2000ms] ease-out'
            style={sectionVisibility.build ? getVideoTransform(1) : { opacity: 0, transform: 'scale(0.8) translateY(100px)' }}
          >
            <source src='/videos/build.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        
        <div className="relative z-20 w-full h-full flex flex-col ">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className="max-w-4xl mx-auto transition-all duration-[1500ms] ease-out"
              style={sectionVisibility.build ? getScrollTransform(1) : { opacity: 0, transform: 'scale(0.7) translateY(150px)' }}
            >
              <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Build</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/10 to-teal-400/10 blur-lg opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div> 
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-green-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out" style={{ transitionDelay: '0.3s' }}>
                From concept to code, we build robust systems that scale with your ideas and evolve with your vision.
              </p>
              <a 
                href="#" 
                className="learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-400/40 rounded-xl text-white text-lg font-medium hover:from-green-500/30 hover:to-teal-500/30 hover:border-green-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transform hover:scale-105"
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Market Section */}
      <div 
        ref={marketRef}
        data-section="market"
        className='relative bg-black h-screen overflow-hidden my-[-1px]'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[40%] md:h-[85%] object-cover transition-all duration-[2000ms] ease-out'
            style={sectionVisibility.market ? getVideoTransform(2) : { opacity: 0, transform: 'scale(0.8) translateY(100px)' }}
          >
            <source src='/videos/market.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        
        <div className="relative z-20 w-full h-full flex flex-col">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className="max-w-4xl mx-auto transition-all duration-[1500ms] ease-out"
              style={sectionVisibility.market ? getScrollTransform(2) : { opacity: 0, transform: 'scale(0.7) translateY(150px)' }}
            >
              <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Market</span>
                </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out" style={{ transitionDelay: '0.3s' }}>
                Launch with impact. We help you bring your product to the right audience, with strategy, clarity, and innovation.
              </p>
              <a 
                href="#" 
                className="learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/40 rounded-xl text-white text-lg font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-purple-400/20 hover:shadow-purple-400/30 transform hover:scale-105"
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default VideoAnimation;