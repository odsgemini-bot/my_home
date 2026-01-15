
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-emerald-50 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold tracking-wide animate-bounce">
          안녕하세요, 개발자 오두성입니다
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-neutral-900 mb-8 leading-[1.1] tracking-tight">
          "<span className="text-emerald-500">{CONTACT_INFO.slogan}</span>"
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          꼼꼼함과 창의력, 그리고 20년의 성실함을 담아<br />
          비즈니스의 가치를 현실로 구현합니다.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#experience" 
            className="w-full md:w-auto px-10 py-4 bg-neutral-900 text-white rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl"
          >
            포트폴리오 보기
          </a>
          <a 
            href="#contact" 
            className="w-full md:w-auto px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all"
          >
            연락하기
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
