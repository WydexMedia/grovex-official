import React from 'react';

function HomeVideo() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 w-full h-full bg-black ">
       
 <div className="w-full bg-black h-full bg-gradient-to-br from-blue-100 to-purple-100" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10  w-full min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row bg-black  px-4 py-20">
  {/* Text Section */}
 <div className="max-w-4xl  w-full md:ml-[10%]">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
    <span className="bg-gradient-to-r to-[#086046] from-[#18cb96] bg-clip-text text-transparent">
      Advanced Meta Ads Course{" "}
    </span>
    <span className="bg-gradient-to-r to-[#086046] from-[#067f5b] bg-clip-text text-transparent">
      in Kerala
    </span>
  </h1>
  {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
    Experience immersive visuals through our creative video storytelling
  </p> */}
</div>


  {/* Image Section */}
  <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
    <img
      src="/images/Student_Image.png"
      alt="Student"
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
    />
  </div>
</section>



       
      </div>


    </div>
  );
}

export default HomeVideo;