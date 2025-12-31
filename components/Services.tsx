
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Map, Cpu, Activity, BarChart3, Lock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  focus: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, focus, description, icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-care-indigo transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-care-teal mb-6 group-hover:bg-care-indigo group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <div className="text-xs font-bold text-care-indigo uppercase tracking-wider mb-4 flex items-center gap-1.5">
        <Lock size={12} /> {focus}
      </div>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Strategy & Governance",
      focus: "Data Sovereignty",
      description: "Ensure your clinical data stays in Canada. We build governance frameworks that meet strict PHIPA requirements while unlocking the power of your existing datasets.",
      icon: <Shield size={28} />
    },
    {
      title: "Clinical & Operational Automation",
      focus: "Triage & Billing",
      description: "Reduce administrative burnout. Our automation engines handle complex triage flows and medical billing reconciliations with 99.9% clinical accuracy.",
      icon: <Cpu size={28} />
    },
    {
      title: "Health Data Intelligence",
      focus: "ER Wait Times",
      description: "Predictive analytics for flow management. Our models forecast patient surges 48 hours in advance, allowing for dynamic staffing and reduced ER congestion.",
      icon: <BarChart3 size={28} />
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-care-teal uppercase tracking-widest mb-4">Our Expertise</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Engineered for the complexities of modern Canadian healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
