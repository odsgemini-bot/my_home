
import React from 'react';
import { 
  Code2, 
  Table2, 
  MessageSquare, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Monitor,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Skill, CareerItem, Achievement } from './types';

export const SKILLS: Skill[] = [
  {
    name: '개발 (Development)',
    description: '20년 이상의 풍부한 경험을 바탕으로 안정적이고 효율적인 시스템 아키텍처를 설계하고 구축합니다.',
    icon: <Code2 className="w-8 h-8 text-emerald-500" />
  },
  {
    name: '엑셀 (Excel)',
    description: '복잡한 데이터 분석 및 자동화 툴 제작에 능숙하며, 업무 효율을 극대화하는 매크로 및 함수 활용 능력을 보유하고 있습니다.',
    icon: <Table2 className="w-8 h-8 text-emerald-500" />
  },
  {
    name: '커뮤니케이션 (Communication)',
    description: '다양한 이해관계자들 사이의 가교 역할을 수행하며, 기술적 요구사항을 비즈니스 가치로 변환하는 데 탁월합니다.',
    icon: <MessageSquare className="w-8 h-8 text-emerald-500" />
  }
];

export const CAREER: CareerItem[] = [
  {
    period: '2004 - 현재',
    title: '시니어 풀스택 개발자',
    company: '주요 IT 기업 및 프로젝트 리드',
    description: '지난 20년 동안 다수의 엔터프라이즈급 솔루션 개발 및 팀 리딩을 수행하며 비즈니스 성장을 견인해 왔습니다.'
  },
  {
    period: '경험 키워드',
    title: '다양한 산업군 프로젝트 참여',
    company: '핀테크, 커머스, 플랫폼 서비스',
    description: '금융 시스템부터 대규모 트래픽 처리가 필요한 커머스 플랫폼까지 폭넓은 기술 스펙트럼을 보유하고 있습니다.'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2023',
    title: '대규모 마이그레이션 프로젝트 성공',
    detail: '노후화된 레거시 시스템을 현대적인 아키텍처로 전환하여 유지보수 비용 30% 절감'
  },
  {
    year: '2020',
    title: '사내 개발 프로세스 혁신상',
    detail: '자동화 툴 도입을 통한 개발 생산성 개선 및 코드 퀄리티 향상 기여'
  },
  {
    year: '20+ Years',
    title: '베테랑 개발자 자부심',
    detail: '단순 코드 작성을 넘어 비즈니스 가치를 창출하는 창의적 문제 해결사'
  }
];

export const CONTACT_INFO = {
  email: 'oh.neodavinci@gmail.com',
  phone: '010-6822-5256',
  name: '오두성',
  slogan: '열심히 개발하자',
  keywords: ['꼼꼼함', '창의력', '성실함']
};
