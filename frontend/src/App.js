import React, { useState, useEffect } from 'react';
import './App.css';
import siteConfig from './config/siteConfig';
import { trackScrollDepth } from './utils/analytics';

// Components
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Projects from './components/Projects';
import FounderLetter from './components/FounderLetter';
import BookingPackages from './components/BookingPackages';
import OurVibe from './components/OurVibe';
import FAQ from './components/FAQ';
import BlogTeaser from './components/BlogTeaser';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingBookButton from './components/FloatingBookButton';
import CookieConsent from './components/CookieConsent';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrollDepthTracked, setScrollDepthTracked] = useState({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      Object.keys(scrollDepthTracked).forEach(depth => {
        if (scrollPercent >= parseInt(depth) && !scrollDepthTracked[depth]) {
          trackScrollDepth(depth);
          setScrollDepthTracked(prev => ({ ...prev, [depth]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDepthTracked]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        setIsBookingModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBookingModalOpen]);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
      <Hero onBookClick={openBookingModal} />
      <WhatWeDo onBookClick={openBookingModal} />
      <Projects />
      <FounderLetter />
      <BookingPackages onBookClick={openBookingModal} />
      <OurVibe />
      <FAQ />
      <BlogTeaser />
      <Footer />

      <FloatingBookButton onClick={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      <CookieConsent />
    </div>
  );
}

export default App;
