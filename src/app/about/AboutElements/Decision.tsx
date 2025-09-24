import React, { useEffect, useRef } from 'react';

function Decision() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll<HTMLElement>('.decision-guide, .decision-card');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);


  return (
    <>
      {/* Decision Guide */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-50 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="decision-guide">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              
              
              {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
                How to Choose the 
                <span className="block text-gray-700 mt-2">
                  Right One for Your Business?
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Make informed decisions with our comprehensive guide to selecting the perfect advertising platform for your unique business needs.
                </p>
              </div> */}
            </div>
            
            {/* Decision Cards */}
           
            
            {/* Bottom CTA Section */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-100">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                    Still Not Sure Which Platform to Choose?
                  </h3>
                  
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed">
                    Our experts can analyze your business goals, target audience, and budget to recommend the perfect advertising strategy tailored just for you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <a
                      href="https://wa.me/919188380779?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-black text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 text-base sm:text-lg cursor-pointer"
                    >
                      Get Free Consultation
                    </a>
                    
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-black font-semibold rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 text-base sm:text-lg cursor-pointer">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>
    </>
  );
}

export default Decision;