import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-neutral-900 mb-4">보유 기술 및 도구</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SKILLS.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div key={idx} className="group p-10 bg-neutral-50 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 border border-transparent hover:border-emerald-100">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                  <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <div className="text-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4">{skill.name}</h3>
                <p className="text-neutral-500 leading-relaxed text-lg">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 p-12 bg-neutral-900 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">어떠한 환경에서도 최적의 도구를 찾아냅니다.</h4>
            <p className="text-neutral-400">현대적인 웹 프레임워크부터 업무 효율을 위한 오피스 자동화까지 포괄적인 기술 지원이 가능합니다.</p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-neutral-800 rounded-xl text-emerald-400 font-bold border border-neutral-700">TypeScript</span>
            <span className="px-4 py-2 bg-neutral-800 rounded-xl text-emerald-400 font-bold border border-neutral-700">Excel Expert</span>
            <span className="px-4 py-2 bg-neutral-800 rounded-xl text-emerald-400 font-bold border border-neutral-700">System Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;