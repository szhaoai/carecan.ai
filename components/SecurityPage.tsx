
import React from 'react';
import { motion } from 'framer-motion';
// Added CheckCircle2 to imports
import { ShieldCheck, Lock, Database, FileText, ArrowLeft, Globe, EyeOff, Server, CheckCircle2 } from 'lucide-react';

interface SecurityPageProps {
  onBack: () => void;
}

const SecurityPage: React.FC<SecurityPageProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-care-teal font-bold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-care-teal font-bold text-sm uppercase tracking-widest mb-4">
            <ShieldCheck size={20} /> Security Whitepaper V2.1
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Built for the most sensitive <br/><span className="text-care-indigo">health data in Canada.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            CareCan.ai is engineered from the ground up to exceed PHIPA, PIPEDA, and FIPPA requirements. We treat every data point as a sacred trust between patient and provider.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-care-teal border border-slate-100">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Canadian Data Residency</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our infrastructure is hosted exclusively on Microsoft Azure and AWS regions within Toronto and Montreal. No clinical data ever crosses international borders.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-care-teal border border-slate-100">
                <Lock size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">End-to-End Encryption</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  AES-256 encryption for data at rest and TLS 1.3 for data in transit. We utilize hardware security modules (HSM) for clinical key management.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-care-teal border border-slate-100">
                <EyeOff size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Zero-Knowledge Processing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Where possible, we implement differential privacy and federated learning, ensuring our AI improves without ever needing to see un-anonymized PII.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <h4 className="text-sm font-bold text-care-teal uppercase tracking-widest mb-6">Compliance Framework</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">PHIPA (Ontario)</span>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">PIPEDA (Federal)</span>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">SOC2 Type II</span>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">HIPAA (Compatibility)</span>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-slate-400">ISO 27001</span>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-800 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Server className="text-care-teal" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Audit Trail</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full immutable logging of every data access event. Managed through centralized SOC monitored 24/7 by Canadian security analysts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-care-bg p-12 rounded-[3rem] text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Questions about implementation?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto italic">"Our technical team can join your IT governance board calls to explain our architecture in detail."</p>
          <button 
            onClick={onBack}
            className="bg-care-teal text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            Schedule Technical Deep-Dive
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
