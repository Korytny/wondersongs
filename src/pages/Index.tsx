
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SongTypesSection from '@/components/SongTypesSection';
import SongExamplesSection from '@/components/SongExamplesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SongTypesSection />
        <SongExamplesSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
