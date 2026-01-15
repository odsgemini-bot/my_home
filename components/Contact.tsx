
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-neutral-50 rounded-[60px] p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px] opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl font-black text-neutral-900 mb-6 leading-tight">
                준비되셨나요?<br />
                <span className="text-emerald-500">언제든 환영합니다.</span>
              </h2>
              <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                아이디어만 있으셔도 괜찮습니다. 구체적인 설계부터 안정적인 구현까지,<br className="hidden md:block" />
                함께 머리를 맞대고 최고의 결과물을 만들어 나가겠습니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mr-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-neutral-900 hover:text-emerald-500 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mr-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-neutral-900 hover:text-emerald-500 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-neutral-200/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">성함 / 기업명</label>
                  <input 
                    type="text" 
                    placeholder="홍길동" 
                    className="w-full px-6 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-neutral-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">이메일 주소</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-6 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-neutral-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">문의 내용</label>
                  <textarea 
                    rows={4} 
                    placeholder="프로젝트 제안이나 궁금하신 점을 남겨주세요." 
                    className="w-full px-6 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-neutral-900 font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center group"
                >
                  제안 보내기
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
