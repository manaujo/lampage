import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "ChefComanda - Sistema de Comandas Inteligente";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      
      <main>
        <Hero />
        
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <CTASection />
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <Advantages />
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <Testimonials />
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;