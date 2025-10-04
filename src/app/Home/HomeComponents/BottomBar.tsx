import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

// Add BlogPost type for type safety
interface BlogPost {
  _id: string;
  image?: string;
  title: string;
  description: string;
  author?: string;
  createdAt?: string;
}

function BottomBar() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogPosts(data));
  }, []);

  // const handleGetStarted = () => {
  //   const el = document.getElementById('contact');
  //   if (el) el.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <section className="relative py-24 bg-gradient-to-r from-black to-slate-900">
  {/* Decorative background gradients */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl" />
  </div>

  <div className="mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
      <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
        Latest
      </span>
      <br />
      <span className="bg-gradient-to-r from-[#086046] to-[#18cb96] bg-clip-text text-transparent">
        Articles
      </span>
    </h2>

    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
      “This is where digital learning meets inspiration. From quick tips to in-depth lessons, we bring you knowledge that’s practical, clear, and future-ready.”
    </p>

    {/* Blog Posts Grid - Focused on Image Content Only */}
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex flex-nowrap space-x-6 my-3">
        {blogPosts.map((post, index) => (
          <div key={post._id} className={`flex-shrink-0 w-80 bg-gray-900 overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 border-gray-800`}>
            <div className="relative overflow-hidden">
              <Image
                src={post.image || '/images/default.jpg'}
                alt={post.title}
                width={320}
                height={192}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

export default BottomBar;