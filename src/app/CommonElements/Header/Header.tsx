"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();


  const userClicke = (item: string) => {
    switch (item) {
      case 'Works':
        router.push('/works');
        break;
      case 'Services':
        router.push('/#services');
        break;
      // case 'Industries':
      //   router.push('/industries');
      //   break;
      case 'About':
        router.push('/about');
        break;
      case 'Careers':
        router.push('/career');
        break;
      case 'Contact':
        router.push('/contact');
        break;
      default:
        console.log('No route found for:', item);
    }

  }


  const handleStartExam = () => {
    router.push('/exampage');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: string[] = ['Services', 'About', 'Contact'];
  // works

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled
        ? 'bg-black/40 backdrop-blur-lg border-b border-blue-400/20'
        : 'bg-black/90 border-b border-blue-400/10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex  items-center space-x-2 group">
            <Image
              src="/Logo/GROVEX LOGO.png"
              alt="grovex Logo"
              width={60}
              height={60}
              className=" w-[110px] h-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => userClicke(item)}
                className="relative px-3 lg:px-4 py-2 text-neutral-300 hover:text-white hover:cursor-pointer   font-medium transition-all duration-300 group text-sm lg:text-base"
              >
                <span className="relative z-10" >{item}</span>
                <div className="absolute inset-0 bg-green-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">

            <button
              className="px-5 py-2 ms-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-400/20 cursor-pointer"
              onClick={handleStartExam}
            >

              Attend Exam
            </button>
            <a
              className="px-5 py-2 ms-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-400/20 cursor-pointer"
              href='/login'
            >
              Login
            </a>

          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-green-400/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-blue-400/20">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => {
                  userClicke(item);
                  setIsOpen(false);
                }}
                className="block px-4 py-3 text-neutral-300 hover:text-white hover:bg-blue-400/10 rounded-lg transition-all duration-200 font-medium"
              >
                {item}
              </div>
            ))}
            <div className="pt-4 border-t border-blue-400/20 mt-4 gap-7">

              <button
              className="px-5 py-2 ms-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-400/20 cursor-pointer"
              onClick={handleStartExam}
            >

              Attend Exam
            </button>
              <a
                className="px-5 py-2 ms-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-400/20 cursor-pointer"
                href='/login'
              >
                Login
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;