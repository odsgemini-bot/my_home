
import React from 'react';
import { CAREER } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-50 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-black text-neutral-900 mb-16 text-center">경력 및 이력</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-20">
            {CAREER.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 hidden md:block"></div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className={`p-8 bg-white rounded-3xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all ${idx % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                    <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-2 block">{item.period}</span>
                    <h3 className="text-2xl font-black text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-400 font-bold mb-4">{item.company}</p>
                    <p className="text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
