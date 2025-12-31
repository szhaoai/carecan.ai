
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Users, Activity } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-care-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-care-indigo text-xs font-bold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-care-indigo animate-pulse"></span>
              Now PHIPA Certified
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Modernizing Canadian Healthcare with <span className="text-care-teal">Ethical, High-Impact AI.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              We partner with hospitals, clinics, and health organizations to turn complex data into streamlined care. Secure, PHIPA-compliant, and built for Canada’s health ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('book-call')}
                className="bg-care-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                Book Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('security')}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:border-care-teal transition-all"
              >
                Security Standards
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={18} className="text-care-teal" /> Data Residency
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={18} className="text-care-teal" /> 128-bit Encryption
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={18} className="text-care-teal" /> Clinically Validated
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-slate-900 font-bold">Operational Performance</h3>
                  <p className="text-xs text-slate-400">Real-time Facility Analytics</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Activity size={14} /> ER Wait Times
                  </div>
                  <div className="text-2xl font-bold text-care-teal">-34.2%</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Users size={14} /> Patient Flux
                  </div>
                  <div className="text-2xl font-bold text-care-indigo">+210</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-care-teal to-care-indigo"
                  ></motion.div>
                </div>
                <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-care-teal opacity-60"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  <span>System Capacity</span>
                  <span>Safety Threshold</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Security Node Status</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    Encrypted
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-care-indigo text-white p-4 rounded-2xl shadow-lg hidden sm:block">
              <BarChart3 size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 rounded-2xl shadow-lg hidden sm:block">
              <CheckCircle2 size={24} className="text-care-teal" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
