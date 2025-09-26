import React from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';

// const clientLogos = [
//   { src: '/wydex Clinets black/ATHER  best digital marketing agency in calicut.webp', alt: 'Ather' },
//   { src: '/wydex Clinets black/BAMBEE  best digital marketing agency in calicut.webp', alt: 'Bambee' },
//   { src: '/wydex Clinets black/BEXLEY  best digital marketing agency in calicut.webp', alt: 'Bexley' },
//   { src: '/wydex Clinets black/BNI  best digital marketing agency in calicut.webp', alt: 'BNI' },
//   { src: '/wydex Clinets black/BOTIQUEEN  best digital marketing agency in calicut.webp', alt: 'Botiqueen' },
//   { src: '/wydex Clinets black/CAMIYA  best digital marketing agency in calicut.webp', alt: 'Camiya' },
//   { src: '/wydex Clinets black/care best digital marketing agency in calicut.webp', alt: 'Care' },
//   { src: '/wydex Clinets black/CHILLIES RESTAURENT  best digital marketing agency in calicut.webp', alt: 'Chillies Restaurant' },
//   { src: '/wydex Clinets black/COBALT  best digital marketing agency in calicut.webp', alt: 'Cobalt' },
//   { src: '/wydex Clinets black/FIALOVY  best digital marketing agency in calicut.webp', alt: 'Fialovy' },
//   { src: '/wydex Clinets black/FINJET  best digital marketing agency in calicut.webp', alt: 'Finjet' },
//   { src: '/wydex Clinets black/FLAVOURS OF KERALA  best digital marketing agency in calicut.webp', alt: 'Flavours of Kerala' },
//   { src: '/wydex Clinets black/FOO FOODS  best digital marketing agency in calicut.webp', alt: 'Foo Foods' },
//   { src: '/wydex Clinets black/GROVEX  best digital marketing agency in calicut.webp', alt: 'Grovex' },
//   { src: '/wydex Clinets black/HISLEEP  best digital marketing agency in calicut.webp', alt: 'Hisleep' },
// ];

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

        </div>

        {/* Logos Grid */}
        {/* <div className="flex flex-col justify-center items-center text-black text-4xl my-4">
          Our Cerification is the best in kerala 
        </div> */}

        {/* CTA Section */}
        


      </div>
    </section>
  );
}