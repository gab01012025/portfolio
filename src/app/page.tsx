'use client';

import { useState, useCallback } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <LanguageProvider>
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      <CustomCursor />
      <div className="noise-overlay" />

      {isLoaded && (
        <>
          <Navigation />
          <main>
            <Hero />
            <Projects />
            <Stack />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </LanguageProvider>
  );
}
