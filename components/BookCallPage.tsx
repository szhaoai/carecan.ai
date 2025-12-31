
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, CheckCircle2, Shield } from 'lucide-react';

interface BookCallPageProps {
  onBack: () => void;
}

const BookCallPage: React.FC<BookCallPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);

  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "04:45 PM"];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-care-teal font-bold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Summary */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Book Your Strategy Call</h1>
            <p className="text-slate-600 mb-8">
              A 30-minute technical discovery session to evaluate AI readiness and clinical impact.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <Clock className="text-care-teal shrink-0" size={18} />
                <span>30-minute Consultation</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <Shield className="text-care-teal shrink-0" size={18} />
                <span>NDA & Privacy Compliant</span>
              </div>
            </div>

            <div className="mt-12 bg-care-teal/5 p-6 rounded-2xl border border-care-teal/10">
              <h4 className="font-bold text-care-teal mb-2">Agenda:</h4>
              <ul className="text-xs space-y-2 text-slate-600">
                <li className="flex gap-2">1. Current Data Infrastructure Audit</li>
                <li className="flex gap-2">2. Key Clinical Friction Points</li>
                <li className="flex gap-2">3. PHIPA Compliance Roadmap</li>
                <li className="flex gap-2">4. Next Steps & Pilot Feasibility</li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Booking */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200"
            >
              {step === 1 ? (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Calendar className="text-care-teal" /> Select Date & Time
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Available Dates</p>
                      {[0, 1, 2].map((i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i + 1);
                        return (
                          <button key={i} className="w-full text-left px-4 py-3 rounded-xl border border-slate-100 hover:border-care-teal hover:bg-care-teal/5 transition-all group">
                            <div className="text-sm font-bold text-slate-900">{date.toLocaleDateString('en-CA', { weekday: 'long', month: 'short', day: 'numeric' })}</div>
                            <div className="text-xs text-slate-400 group-hover:text-care-teal transition-colors">2 Slots Available</div>
                          </button>
                        );
                      })}
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Available Times (EST)</p>
                      <div className="grid grid-cols-1 gap-2">
                        {timeSlots.map(time => (
                          <button 
                            key={time} 
                            onClick={() => setStep(2)}
                            className="px-4 py-2 rounded-lg border border-slate-100 hover:border-care-teal hover:text-care-teal text-sm font-medium transition-all"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Almost There!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">Please complete the contact form at the bottom of the home page to finalize your appointment request with the selected time.</p>
                  <button 
                    onClick={onBack}
                    className="bg-care-teal text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    Return to Homepage
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCallPage;
