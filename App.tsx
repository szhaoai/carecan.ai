
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import BookCallPage from './components/BookCallPage';
import SecurityPage from './components/SecurityPage';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export type Page = 'home' | 'book-call' | 'security';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <div className="w-8 h-8 bg-care-teal rounded flex items-center justify-center text-white font-bold">C</div>
            <span className="text-xl font-bold tracking-tight text-care-teal">CareCan.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => navigateTo('home')} className="hover:text-care-teal transition-colors">Home</button>
            <button 
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home');
                setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="hover:text-care-teal transition-colors"
            >
              Services
            </button>
            <button onClick={() => navigateTo('security')} className="hover:text-care-teal transition-colors">Security</button>
            <button 
              onClick={() => navigateTo('book-call')}
              className="bg-care-teal text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <TrustBar />
            <section id="services">
              <Services />
            </section>
            <section id="case-studies" className="bg-white">
              <CaseStudies />
            </section>
            <section id="contact">
              <ContactForm />
            </section>
          </>
        )}
        {currentPage === 'book-call' && <BookCallPage onBack={() => navigateTo('home')} />}
        {currentPage === 'security' && <SecurityPage onBack={() => navigateTo('home')} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 bg-care-teal rounded flex items-center justify-center text-white font-bold">C</div>
              <span className="text-xl font-bold tracking-tight text-white">CareCan.ai</span>
            </div>
            <p className="max-w-md text-slate-400 mb-6">
              Empowering Canadian healthcare with AI solutions that prioritize security, ethics, and clinical impact. PHIPA compliant and locally engineered.
            </p>
            <div className="flex items-center gap-2 text-sm text-care-teal font-semibold">
              <ShieldCheck size={16} />
              <span>PHIPA & PIPEDA Compliant</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => navigateTo('book-call')} className="hover:text-white">Book Strategy Call</button></li>
              <li><button onClick={() => navigateTo('security')} className="hover:text-white">Security Whitepaper</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info@carecan.ai</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (800) CARE-CAN</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Toronto Innovation Hub, ON</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} CareCan.ai Solutions Inc. All rights reserved. Built in Canada.
        </div>
      </footer>
    </div>
  );
};

export default App;
