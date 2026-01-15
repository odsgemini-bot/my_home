
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-white px-6 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-8 border border-emerald-100 shadow-sm">
          <Sparkles className="w-4 h-4" />
          <span>20년차 개발자 오두성</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-neutral-900 mb-8 leading-[1.1] tracking-tight">
          "<span className="text-emerald-500">{CONTACT_INFO.slogan}</span>"
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {CONTACT_INFO.keywords.map((kw, idx) => (
            <span key={idx} className="text-xl md:text-3xl font-light text-neutral-400">
              #{kw}
            </span>
          ))}
        </div>

        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          꼼꼼함으로 빈틈없는 코드를, 창의력으로 혁신적인 솔루션을,<br className="hidden md:block" />
          그리고 20년의 성실함으로 신뢰를 쌓아온 개발자 오두성입니다.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#about" className="px-10 py-4 bg-neutral-900 text-white rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl hover:scale-105 active:scale-95">
            더 알아보기
          </a>
          <a href="#contact" className="px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95">
            함께 일하기
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neutral-300" />
      </div>
    </section>
  );
};

export default Hero;
