import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const clientLogos = [
  { src: '/wydex Clinets black/ATHER  best digital marketing agency in calicut.webp', alt: 'Ather' },
  { src: '/wydex Clinets black/BAMBEE  best digital marketing agency in calicut.webp', alt: 'Bambee' },
  { src: '/wydex Clinets black/BEXLEY  best digital marketing agency in calicut.webp', alt: 'Bexley' },
  { src: '/wydex Clinets black/BNI  best digital marketing agency in calicut.webp', alt: 'BNI' },
  { src: '/wydex Clinets black/BOTIQUEEN  best digital marketing agency in calicut.webp', alt: 'Botiqueen' },
  { src: '/wydex Clinets black/CAMIYA  best digital marketing agency in calicut.webp', alt: 'Camiya' },
  { src: '/wydex Clinets black/care best digital marketing agency in calicut.webp', alt: 'Care' },
  { src: '/wydex Clinets black/CHILLIES RESTAURENT  best digital marketing agency in calicut.webp', alt: 'Chillies Restaurant' },
  { src: '/wydex Clinets black/COBALT  best digital marketing agency in calicut.webp', alt: 'Cobalt' },
  { src: '/wydex Clinets black/FIALOVY  best digital marketing agency in calicut.webp', alt: 'Fialovy' },
  { src: '/wydex Clinets black/FINJET  best digital marketing agency in calicut.webp', alt: 'Finjet' },
  { src: '/wydex Clinets black/FLAVOURS OF KERALA  best digital marketing agency in calicut.webp', alt: 'Flavours of Kerala' },
  { src: '/wydex Clinets black/FOO FOODS  best digital marketing agency in calicut.webp', alt: 'Foo Foods' },
  { src: '/wydex Clinets black/GROVEX  best digital marketing agency in calicut.webp', alt: 'Grovex' },
  { src: '/wydex Clinets black/HISLEEP  best digital marketing agency in calicut.webp', alt: 'Hisleep' },
];

export default function Clients() {
  const router = useRouter();
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
           Our Certifications
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our clients are everything to us; so are we to them — the best marketing agency in Calicut.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => router.push('/Home/listClients')}
            className="
      group cursor-pointer
      inline-flex flex-col items-center justify-center
      px-4 py-4 md:px-10
      bg-black rounded-lg
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      cursor-pointer
    "
          >
            <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold text-white mb-4 text-center gap-2">
              <span>Our client stories do not end here...</span>
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-white transform group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>


      </div>
    </section>
  );
}