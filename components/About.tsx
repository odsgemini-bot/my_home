
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CheckCircle2, User, Zap, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    { 
      title: '꼼꼼함', 
      desc: '작은 디테일 하나가 대규모 시스템의 안정성을 결정한다는 믿음으로 한 줄의 코드에도 정성을 다합니다.',
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    { 
      title: '창의력', 
      desc: '기존의 방식에 얽매이지 않고 최적의 효율을 낼 수 있는 새로운 접근 방식을 끊임없이 모색합니다.',
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      title: '성실함', 
      desc: '20년이라는 시간 동안 변함없이 개발의 현장을 지켜온 성실함은 제 가장 강력한 무기입니다.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-3xl rotate-3 translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Profile" 
                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-neutral-100">
                <p className="text-4xl font-black text-emerald-600 mb-1">20+</p>
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black text-neutral-900 mb-6 leading-tight">
              성장을 멈추지 않는<br />
              <span className="text-emerald-500">20년차 베테랑 개발자</span>입니다.
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              기술은 도구일 뿐, 핵심은 가치를 만드는 것입니다. 저는 단순히 동작하는 코드를 넘어, 비즈니스 문제를 해결하고 사용자에게 감동을 주는 결과물을 만드는 데 집중합니다. 수많은 실무 경험을 통해 쌓인 통찰력은 어떠한 복잡한 문제도 해결할 수 있는 기반이 됩니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-black text-neutral-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-500 leading-snug">{card.desc}</p>
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
