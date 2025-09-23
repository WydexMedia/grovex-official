import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: `"Wydex Media’s expertise and dedication helped us scale Interval to new heights. Their team truly feels like an extension of ours."`,
    name: 'Aslah Thadathil',
    role: 'Co-founder of Interval',
    image: './images/aslah.png',
  },
  {
    quote: `"The team at Wydex is proactive, professional, and always delivers more than expected. Highly recommended!"`,
    name: 'Muhammed Arshad',
    role: 'COO Magic Lambs',
    image: '/images/arshad.jpeg',
  },
  {
    quote: `"From branding to digital marketing, Wydex Media is our go-to partner for growth and innovation."`,
    name: 'Fazil',
    role: 'proprietor of parcel service calicut',
    image: '/images/fazil.jpeg',
  },
  {
    quote: `"Wydex Media transformed our digital presence and helped us reach new customers. Their creativity and professionalism are unmatched."`,
    name: 'Sadik',
    role: 'CEO Camiya Diamonds',
    image: '',
  },
  {
    quote: `"The Wydex team delivered results beyond our expectations. Highly recommend them for any business looking to grow online."`,
    name: 'CEO Nilam Builders',
    role: 'CEO Nilam Builders',
    image: '',
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
            Client page heading
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
                className="w-full h-auto max-h-[400px] rounded-lg"
              />
            ) : (
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-[600px]  min-h-[600px] bg-white rounded-lg object-cover"
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
              Trusted by Industry Leaders
            </span>
            <div className="w-20 h-px bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClintSay;
