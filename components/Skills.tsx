
import React from 'react';
import { SKILLS } from '../constants';
import { Check } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-neutral-900 mb-4">보유 기술 및 강점</h2>
          <p className="text-neutral-500 text-lg">최적의 도구를 선택하여 최고의 효율을 만들어냅니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="group relative p-10 bg-neutral-50 rounded-[40px] hover:bg-emerald-600 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-500">
                {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-32 h-32 text-neutral-900 group-hover:text-white' })}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-neutral-500 group-hover:text-emerald-50 transition-colors leading-relaxed">
                  {skill.description}
                </p>
                <ul className="mt-8 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {['최상위 전문성', '실무 중심 활용', '지속적 학습'].map((item, i) => (
                    <li key={i} className="flex items-center text-white text-sm font-bold">
                      <Check className="w-4 h-4 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
