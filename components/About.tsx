
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-emerald-100 rounded-[40px] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Developer Oh Doo-sung" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-8 border-white/20 rounded-[40px] m-4"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">20+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years EXP</p>
            </div>
          </div>
          
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black text-neutral-900 mb-6">
                기본에 충실하며<br />
                <span className="text-emerald-500 text-5xl">가치를 더하는 개발</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                2004년부터 시작된 개발 여정 속에서 저는 화려한 기술보다 '동작하는 코드의 가치'를 더 중요하게 여겨왔습니다. 꼼꼼한 설계는 시스템의 수명을 연장시키고, 창의적인 발상은 불가능을 가능케 합니다. 저는 이 두 가지를 균형 있게 갖춘 전문가로서 여러분의 든든한 파트너가 되고자 합니다.
              </p>
            </div>
            
            <div className="space-y-6">
              {ACHIEVEMENTS.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <span className="font-black text-xs">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-500 leading-snug">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
