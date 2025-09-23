import React, { useEffect, useRef } from 'react';

function About() {
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

        const elements = document.querySelectorAll<HTMLElement>('.platform-card, .section-header');
        elements.forEach(el => {
            observerRef.current?.observe(el);
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    return (
        <>
            {/* About Section */}
            <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='10' cy='10' r='1' fill='%23000000'/></pattern></defs><rect width='100' height='100' fill='url(%23dots)'/></svg>")`
                        }}
                    />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="section-header text-center mb-12 sm:mb-16 lg:mb-20">


                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 leading-tight">
                            Smart Advertising Choices That
                            <span className="block bg-gradient-to-r from-[#186046] to-[#18cb96] bg-clip-text text-transparent mt-2">
                                Drive Results
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Grovex is a modern learning platform focused on helping individuals and businesses grow through practical,
                             industry-ready skills. We create hands-on courses in digital marketing, Meta Ads, and other in-demand areas, 
                             designed to turn knowledge into real results. With expert mentors and updated content,
                              Grovex makes learning simple, impactful, and career-focused.

                        </p>
                    </div>

                    {/* Cards Grid */}
                   

                    {/* Bottom CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-[#086046] to-[#18cb96] rounded-full mb-4">
                            <div className="bg-white rounded-full px-8 py-3">
                                <span className="text-sm font-semibold bg-gradient-to-r from-[#086046] to-[#18cb96]  bg-clip-text text-transparent">
                                    Ready to Choose Your Platform?
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Let&apos;s discuss which advertising platform aligns best with your business goals
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;