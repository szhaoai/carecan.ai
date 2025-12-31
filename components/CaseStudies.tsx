
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRightCircle, Sparkles } from 'lucide-react';

interface CaseStudyData {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  metricLabel: string;
  metricValue: number;
  metricPrefix?: string;
  metricSuffix?: string;
  savings: string;
}

const Counter: React.FC<{ value: number; prefix?: string; suffix?: string }> = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 1500;
    let incrementTime = (totalDuration / end) * 2;
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{prefix}{count}{suffix}</span>;
};

const CaseStudies: React.FC = () => {
  const [viewSolutions, setViewSolutions] = useState<Record<number, boolean>>({});

  const studies: CaseStudyData[] = [
    {
      id: 1,
      title: "Metropolitan ER Surge Management",
      challenge: "Average ER wait times exceeding 6.5 hours during peak winter flu seasons.",
      solution: "Implemented predictive patient-flow AI to optimize triage staffing 24h ahead.",
      metricLabel: "Reduction in Wait Time",
      metricValue: 35,
      metricSuffix: "%",
      savings: "$2.4M Annualized Savings"
    },
    {
      id: 2,
      title: "Regional Billing Optimization",
      challenge: "Manual billing errors resulting in significant revenue leakage and audit risks.",
      solution: "AI-driven reconciliation engine identified missed billing codes in real-time.",
      metricLabel: "Billing Accuracy",
      metricValue: 99,
      metricSuffix: "%",
      savings: "$1.8M Recovered Revenue"
    },
    {
      id: 3,
      title: "Telehealth Intake Efficiency",
      challenge: "Clinical intake process taking 18 minutes per patient, causing high abandonment.",
      solution: "Integrated NLP triage assistant to pre-screen and summarize patient history.",
      metricLabel: "Efficiency Increase",
      metricValue: 85,
      metricSuffix: "%",
      savings: "5,000+ Staff Hours Saved"
    }
  ];

  const toggleSolution = (id: number) => {
    setViewSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Clinical Outcomes
        </h2>
        <p className="text-lg text-slate-600">
          Transforming healthcare hurdles into measurable operational success.
        </p>
      </div>

      <div className="space-y-6">
        {studies.map((study) => (
          <div key={study.id} className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-8 bg-care-teal rounded-full"></div>
                  {study.title}
                </h3>

                <div className="relative min-h-[100px]">
                  <AnimatePresence mode="wait">
                    {!viewSolutions[study.id] ? (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-start gap-4"
                      >
                        <div className="bg-red-50 text-red-600 px-3 py-1 rounded text-xs font-bold uppercase shrink-0">Challenge</div>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
                          "{study.challenge}"
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="solution"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-xs font-bold uppercase shrink-0">Solution</div>
                          <p className="text-lg text-slate-800 font-semibold leading-tight">
                            {study.solution}
                          </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end justify-center">
                          <div className="text-care-teal flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold tracking-tighter">
                              <Counter value={study.metricValue} prefix={study.metricPrefix} suffix={study.metricSuffix} />
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{study.metricLabel}</div>
                          <div className="mt-4 bg-care-indigo/10 text-care-indigo px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                            <Sparkles size={16} /> {study.savings}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {viewSolutions[study.id] ? "View Challenge" : "View Solution"}
                </span>
                <button 
                  onClick={() => toggleSolution(study.id)}
                  className={`w-16 h-8 rounded-full p-1 transition-colors duration-300 relative ${viewSolutions[study.id] ? 'bg-care-teal' : 'bg-slate-300'}`}
                >
                  <motion.div 
                    animate={{ x: viewSolutions[study.id] ? 32 : 0 }}
                    className="w-6 h-6 bg-white rounded-full shadow-md"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
