import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: `I specialize in SEO, but I wanted to explore social media marketing as well. I joined Grovex’s 5-day Meta Ads course, and it was a great experience. The sessions were clear and easy to understand. I gained useful knowledge about running ads effectively, which gave me more confidence in managing SMM projects. I’m really thankful to Grovex for this opportunity.`,
    name: 'Lubina',
    role: 'Co-founder of Interval',
    image: './images/Lubina.jpg',
  },
];

function ClintSay() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();

  // Auto-advance every 4 seconds
  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Swipe handlers (basic)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (distance < -minSwipeDistance) {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-20 px-4 bg-black ">
      {/* Geometric Background Elements */}


      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white">
                Stories from Our Learning Community
              </h2>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
          </div>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex flex-col md:flex-row items-center w-full h-[600px] max-w-6xl mx-auto "
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left w-full md:w-1/2 p-8">
            <blockquote className="text-white text-xl md:text-2xl leading-relaxed mb-6 italic">
              {testimonials[current].quote}
            </blockquote>

          </div>

          {/* Right Side: Image or Video */}
         <div className="flex justify-center items-center w-full md:w-1/2 p-6">
  {testimonials[current].mediaType === "video" ? (
    <video
      src={testimonials[current].media}
      controls
      className="w-full max-h-[150px] rounded-lg"
    />
  ) : (
    <img
      src={testimonials[current].image}
      alt={testimonials[current].name}
      className="max-h-[400px] w-auto bg-white rounded-lg object-cover"
    />
  )}
</div>


          {/* Carousel Controls */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-3 shadow transition-all duration-200"
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-3 shadow transition-all duration-200"
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>




        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-20 h-px bg-white"></div>
            <span className="text-white/60 text-sm uppercase tracking-widest font-medium">
             “Trusted by Leading Industry Professionals”
            </span>
            <div className="w-20 h-px bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClintSay;
