
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Ontario Health",
  "Vancouver General",
  "SickKids",
  "UHN",
  "Alberta Health Services",
  "McGill Health"
];

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Canada's Leading Institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-lg md:text-xl font-bold text-slate-600 tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
