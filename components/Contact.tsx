
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <div className="bg-neutral-900 rounded-[60px] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1" />
              <path d="M0 80 C 30 20 60 20 100 80" fill="none" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                준비되셨나요?<br />
                <span className="text-emerald-500">함께 시작해봅시다.</span>
              </h2>
              <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                20년차의 노하우가 담긴 기술력을 만나보세요.<br />
                단순 개발을 넘어 비즈니스의 성공을 고민합니다.
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 p-6 bg-neutral-800 rounded-3xl hover:bg-neutral-700 transition-all group">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/40">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm font-bold uppercase tracking-wider">이메일 문의</p>
                    <p className="text-white text-xl font-bold group-hover:text-emerald-400 transition-colors">{CONTACT_INFO.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-6 p-6 bg-neutral-800 rounded-3xl hover:bg-neutral-700 transition-all group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm font-bold uppercase tracking-wider">전화 연결</p>
                    <p className="text-white text-xl font-bold group-hover:text-emerald-400 transition-colors">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[40px] shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">성함 / 기업명</label>
                  <input type="text" className="w-full px-6 py-4 bg-neutral-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl transition-all outline-none" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">연락처</label>
                  <input type="text" className="w-full px-6 py-4 bg-neutral-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl transition-all outline-none" placeholder="010-0000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">문의 사항</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-neutral-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl transition-all outline-none resize-none" placeholder="문의하실 내용을 입력해주세요."></textarea>
                </div>
                <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 transition-all flex items-center justify-center gap-2 group">
                  문의 보내기
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
