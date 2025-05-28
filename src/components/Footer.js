'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = ({ currentLanguage = 'en' }) => {
  const translations = {
    en: {
      companyName: 'Policy Innovation Consortium',
      address: 'Address',
      addressContent: 'Tokyo, Japan',
      phone: 'Phone',
      email: 'Email',
      contact: 'Contact Us',
      links: 'Quick Links',
      about: 'About PIC',
      business: 'Business Modules',
      leadership: 'Leadership',
      achievements: 'Achievements',
      news: 'News',
      copyright: '© 2025 Policy Innovation Consortium. All Rights Reserved.',
      send: 'Send'
    },
    ja: {
      companyName: '政策イノベーションコンソーシアム',
      address: '住所',
      addressContent: '東京都',
      phone: '電話番号',
      email: 'メール',
      contact: 'お問い合わせ',
      links: 'クイックリンク',
      about: 'PICについて',
      business: '事業モジュール',
      leadership: 'リーダーシップ',
      achievements: '実績',
      news: 'ニュース',
      copyright: '© 2025 政策イノベーションコンソーシアム. All Rights Reserved.',
      send: '送信'
    }
  };

  const t = translations[currentLanguage];

  return (
    <footer className="bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and contact info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="PIC Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="font-bold text-xl">{t.companyName}</span>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-1">{t.address}:</p>
              <p className="mb-3">{t.addressContent}</p>
              
              <p className="font-semibold mb-1">{t.phone}:</p>
              <p className="mb-3">+81-9841643062</p>
              
              <p className="font-semibold mb-1">{t.email}:</p>
              <p className="mb-3">contact@pic-innovation.com</p>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.links}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:underline">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:underline">
                  {t.business}
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:underline">
                  {t.leadership}
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:underline">
                  {t.achievements}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  {t.news}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact form or newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.contact}</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="4" 
                  className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary/90  py-2 px-6 rounded transition duration-300"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
