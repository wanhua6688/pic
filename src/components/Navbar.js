'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ currentLanguage = 'en', setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const translations = {
    en: {
      companyName: 'Policy Innovation Consortium',
      about: 'About PIC',
      business: 'Business Modules',
      leadership: 'Leadership',
      achievements: 'Achievements',
      news: 'News',
      contact: 'Contact'
    },
    ja: {
      companyName: '政策イノベーションコンソーシアム',
      about: 'PICについて',
      business: '事業モジュール',
      leadership: 'リーダーシップ',
      achievements: '実績',
      news: 'ニュース',
      contact: 'お問い合わせ'
    }
  };

  const t = translations[currentLanguage];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="PIC Logo"
                  width={50}
                  height={50}
                  className="mr-2"
                />
                <span className="text-primary font-bold text-lg">
                  {t.companyName}
                </span>
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.about}
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.business}
            </Link>
            <Link href="/leadership" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.leadership}
            </Link>
            {/* <Link href="/achievements" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.achievements}
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.news}
            </Link> */}
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {t.contact}
            </Link>
            
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'ja' : 'en')}
              className="ml-4 bg-neutral hover:bg-gray-200 px-3 py-1 rounded-md text-sm font-medium"
            >
              {currentLanguage === 'en' ? '日本語' : 'English'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.about}
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.business}
            </Link>
            <Link href="/leadership" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.leadership}
            </Link>
            {/* <Link href="/achievements" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.achievements}
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.news}
            </Link> */}
            <Link href="/contact" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              {t.contact}
            </Link>
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'ja' : 'en')}
              className="mt-4 w-full text-left bg-neutral hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              {currentLanguage === 'en' ? '日本語' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
