import React, { useState, useEffect } from "react";
import {
  Brain,
  TrendingUp,
  Instagram,
  BookOpen,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Dot,
} from "lucide-react";

const courses = [
  {
    no: 1,
    title: "Marketing Psychology",
    subtitle: "Consumer Behavior Mastery",
    description: "Understand the mindset of customers and learn how psychology shapes buying decisions. Build strategies that connect deeply and convert consistently.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    lessons: 24,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
  },
  {
    no: 2,
    title: "SEO Optimization",
    subtitle: "Search Engine Dominance", 
    description: "Master keyword research, on‑page SEO, technical hygiene, and link building so you can grow stable, compounding organic traffic.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    lessons: 32,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=center"
  },
  {
    no: 3,
    title: "Meta Advertising",
    subtitle: "Social Media ROI",
    description: "Plan, launch, and optimise campaigns on Facebook & Instagram—from audience design to creative testing and performance scaling.",
    icon: Instagram,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50", 
    lessons: 28,
    duration: "7 weeks",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&crop=center"
  },
  {
    no: 4,
    title: "Financial Management",
    subtitle: "Business Accounting",
    description: "Hands‑on workflows for invoices, expenses, GST, reconciliation, and reporting so your finance ops stay tidy and audit‑ready.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    lessons: 20,
    duration: "5 weeks",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
  },
];

export default function IPadCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % courses.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentCourse = courses[currentSlide];
  const Icon = currentCourse.icon;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#086046] to-[#18cb96] bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Digital Course Library
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Master Digital</span>
            <span className="block bg-gradient-to-r from-[#086046] to-[#18cb96] bg-clip-text text-transparent">
              Marketing Skills
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Transform your business with our comprehensive course collection. Interactive learning experiences designed for real-world success.
          </p>
        </div>

        {/* iPad Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Multiple Shadows for Depth */}
          <div className="absolute inset-0 transform translate-y-8 scale-98">
            <div className="w-full h-full bg-black/40 blur-3xl rounded-[2rem]" />
          </div>
          <div className="absolute inset-0 transform translate-y-4 scale-99">
            <div className="w-full h-full bg-black/20 blur-xl rounded-[2rem]" />
        </div>

          {/* iPad Base */}
          <div 
            className="relative transform transition-all duration-700 ease-out hover:scale-[1.01] hover:-translate-y-2"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
             {/* iPad Body with realistic proportions */}
             <div className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[2rem] p-4 shadow-2xl" style={{ aspectRatio: '4/2.8' }}>
              
              {/* iPad Edge Highlights */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] border border-white/30 pointer-events-none" />
              
              {/* Side Buttons and Ports */}
              <div className="absolute -right-1 top-16 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-l-sm" />
              <div className="absolute -right-1 top-28 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-l-sm" />
              <div className="absolute -right-1 top-44 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-l-sm" />
              
              {/* Screen */}
              <div className="relative bg-black rounded-[1.2rem] overflow-hidden h-full">
                {/* Screen Border/Bezel */}
                <div className="absolute inset-2 bg-black rounded-[0.8rem] overflow-hidden border border-gray-800">
                  
                  {/* Course Content with realistic screen appearance */}
                  <div className={`relative h-full bg-gradient-to-br ${currentCourse.bgColor} transition-all duration-700 ease-out`}>
                    
                    {/* Screen Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
                    
                    {/* Course Card */}
                    <div className="absolute inset-3 bg-white/96 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/50">
                      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Left Side - Course Info */}
                        <div className="p-6 flex flex-col justify-center">
                          <div className="space-y-4">
                            {/* Course Number & Icon */}
                            <div className="flex items-center gap-3">
  <div
    className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentCourse.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
  >
    {currentCourse.no}
  </div>

  <div
    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentCourse.color} flex items-center justify-center text-white shadow-md`}
  >
    <Icon className="w-5 h-5" />
  </div>
</div>

{/* Title & Subtitle */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-1">
    {currentCourse.title}
  </h3>
  <p
    className={`text-xs font-semibold bg-gradient-to-r ${currentCourse.color} bg-clip-text text-transparent uppercase tracking-wide`}
  >
    {currentCourse.subtitle}
  </p>
</div>


                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {currentCourse.description}
                            </p>

                            {/* Stats */}
                            <div className="flex gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                {currentCourse.lessons} Lessons
                              </span>
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {currentCourse.duration}
                              </span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2">
                              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${currentCourse.color} text-white font-medium transition-all hover:scale-105 active:scale-95 text-sm shadow-md`}>
                                <Play className="w-3 h-3" />
                                Start Learning
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium transition-all hover:bg-gray-50 text-sm">
                                Learn More
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className={`relative bg-gradient-to-br ${currentCourse.color} flex items-center justify-center overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10" />
                          <div className="relative z-10 text-white/20">
                            <Icon className="w-24 h-24" />
                          </div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute top-3 right-3 w-16 h-16 border border-white/20 rounded-full" />
                          <div className="absolute bottom-3 left-3 w-12 h-12 border border-white/20 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <button 
                        onClick={prevSlide}
                        className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                      >
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      
                      <div className="flex gap-1">
                        {courses.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              index === currentSlide ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                  </div>

                      <button 
                        onClick={nextSlide}
                        className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                      >
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Screen Reflection & Anti-glare coating */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[0.8rem]" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/20 pointer-events-none rounded-[0.8rem]" />
              </div>

              {/* iPad Home Button with realistic depth */}
              
              
              {/* Camera (if visible) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full border border-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Course Navigation Below */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-4">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <button
                  key={course.no}
                  onClick={() => goToSlide(index)}
                  className={`group p-4 rounded-xl transition-all duration-300 ${
                    index === currentSlide 
                      ?" bg-gradient-to-r ${course.color} text-white scale-110" 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <div className="mt-2 text-xs font-medium">
                     {course.title}
                  </div>
                </button>
              );
            })}
          </div>
            </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Get instant access to all courses and start building your digital marketing expertise today.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#086046] to-[#18cb96] text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-lg">
              <BookOpen className="w-5 h-5" />
              Explore All Courses
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

