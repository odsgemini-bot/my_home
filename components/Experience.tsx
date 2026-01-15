
import React from 'react';
import { CAREER, ACHIEVEMENTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-white h-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-12 flex items-center">
              <span className="w-8 h-1 bg-emerald-500 mr-4"></span>
              경력 및 이력
            </h2>
            <div className="space-y-12">
              {CAREER.map((item, idx) => (
                <div key={idx} className="relative pl-12 border-l border-neutral-800">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-black mb-1">{item.title}</h3>
                  <p className="text-neutral-400 font-medium mb-4">{item.company}</p>
                  <p className="text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-black mb-12 flex items-center">
              <span className="w-8 h-1 bg-emerald-500 mr-4"></span>
              활동 및 성과
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {ACHIEVEMENTS.map((item, idx) => (
                <div key={idx} className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-black uppercase tracking-tighter">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-emerald-600 rounded-[32px] shadow-2xl shadow-emerald-900/20">
              <h4 className="text-2xl font-black mb-4">함께 미래를 만들어가고 싶으신가요?</h4>
              <p className="text-emerald-100 mb-8 leading-relaxed opacity-90">
                20년의 노하우와 끊임없는 열정으로 여러분의 비즈니스에 확실한 성장을 약속드립니다. 
                지금 바로 연락하여 새로운 가능성을 열어보세요.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-black hover:bg-emerald-50 transition-colors shadow-lg"
              >
                대화 시작하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
