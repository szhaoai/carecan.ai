
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    province: ''
  });
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validateEmail = (email: string) => {
    const personalDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com'];
    const domain = email.split('@')[1];
    if (personalDomains.includes(domain?.toLowerCase())) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please use an institutional or work email address.');
      return;
    }

    setStatus('loading');
    
    // Simulating API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (err) {
      setError('Connection failed. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="bg-care-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Ready to architect <span className="text-care-teal">your AI future?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-care-teal shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">1:1 Strategy Assessment</h4>
                  <p className="text-slate-600 text-sm">Understand your data readiness and PHIPA compliance roadmap.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-care-teal shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ROI-First Roadmap</h4>
                  <p className="text-slate-600 text-sm">We don't build tech for tech's sake. Every project starts with a business case.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-care-indigo/5 border border-care-indigo/10 rounded-2xl">
              <p className="text-care-indigo text-sm font-semibold mb-2">Technical Residency Notice:</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                All data remains within Canadian borders. Our infra is hosted in Toronto and Montreal regions only, meeting the highest standards for provincial health data residency requirements.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 mb-8">A strategy consultant will contact your institution within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-care-teal font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-care-teal focus:ring-2 focus:ring-care-teal/10 transition-all outline-none"
                      placeholder="Dr. Jane Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                    <input 
                      required
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${error ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-care-teal focus:ring-care-teal/10'}`}
                      placeholder="jsmith@health-org.ca"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Organization Name</label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-care-teal focus:ring-2 focus:ring-care-teal/10 transition-all outline-none"
                    placeholder="E.g. Toronto General Hospital"
                    value={formData.org}
                    onChange={e => setFormData({...formData, org: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Province</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-care-teal focus:ring-2 focus:ring-care-teal/10 transition-all outline-none bg-white"
                    value={formData.province}
                    onChange={e => setFormData({...formData, province: e.target.value})}
                  >
                    <option value="">Select Province</option>
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                    <option value="QC">Quebec</option>
                    <option value="AB">Alberta</option>
                    <option value="MB">Manitoba</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="PE">Prince Edward Island</option>
                  </select>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm flex items-center gap-2 font-medium">
                    <AlertCircle size={18} /> {error}
                  </div>
                )}

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-care-teal text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? 'Processing...' : (
                    <>
                      Book Strategy Call <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
