import React from 'react';
import {
  Search, Palette, Target, Users, Brain ,TrendingUp ,Instagram, BookOpen
} from 'lucide-react';

// const numberColors = ["text-blue-600", "text-purple-600", "text-pink-600", "text-green-600"];
// const iconColors = ["text-blue-500", "text-purple-500", "text-pink-500", "text-green-500"];

const services = [
  {
    no: 1,
    title: 'Marketing Psychology',
    description: 'Learn how to run effective ad campaigns on Facebook and Instagram. From audience targeting to campaign optimization, this course teaches you how to generate leads and sales using Meta Ads.',
    icon: <Brain className="w-12 h-12" />,
    features: [],
  },
  {
    no: 2,
    title: 'SEO (Search Engine Optimisation)',
    description: 'Master the art of ranking websites on search engines. Our SEO course covers keyword research, on-page SEO, link building, and analytics—helping you drive consistent, organic traffic.',
    icon: <TrendingUp className="w-12 h-12" />,
    features: [],
  },
  {
    no: 3,
    title: 'Meta Ads',
    description: 'Understand the mindset of customers and learn how psychology shapes buying decisions. This course gives you techniques to design strategies that connect with audiences on a deeper level.',
    icon: <Instagram className="w-12 h-12" />,
    features: [],
  },
  {
    no: 4,
    title: 'Zoho Books Support',
    description: 'Get hands-on training in Zoho Books, a powerful accounting software. Learn how to manage invoices, track expenses, handle GST, and streamline business finances with ease.',
    icon: <BookOpen className="w-12 h-12" />,
    features: [],
  },

];

function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">

            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">

            </span>
            <br />
            <span className="bg-gradient-to-r from-[#086046] to-[#18cb96] bg-clip-text text-transparent">
              Exploring our Courses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Grovex, we offer courses designed to give you practical skills that can be applied in real business situations.
             Each program is structured to be simple, clear, and result-focused.


          </p>
        </div>

        {/* Services Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full min-h-[420px] rounded-2xl"
    >
      <div className="relative z-10 flex flex-col h-full">

        {/* Top Section (Number + Icon + Title) */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            {/* Number in black */}
            <div
              className="text-6xl font-extrabold mr-4 drop-shadow-sm select-none leading-none text-black"
              style={{ WebkitTextStroke: "1px #bdbdbd" }}
            >
              {String(service.no).padStart(2, "0")}
            </div>

            {/* Icon always black */}
            <div className="text-black">
              {React.cloneElement(service.icon, { className: "w-12 h-12 text-black" })}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>


       

      




      </div>
    </section>
  );
}

export default Services;
