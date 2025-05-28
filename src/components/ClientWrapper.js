'use client';

import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const ClientWrapper = ({ children }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Navbar currentLanguage={language} setLanguage={setLanguage} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer currentLanguage={language} />
    </>
  );
};

export default ClientWrapper;
