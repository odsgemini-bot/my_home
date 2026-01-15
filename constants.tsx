import { 
  Code2, 
  Table2, 
  MessageSquare
} from 'lucide-react';
import { Skill, CareerItem, Achievement } from './types';

export const CONTACT_INFO = {
  name: '오두성',
  slogan: '열심히 개발하자',
  email: 'oh.neodavinci@gmail.com',
  phone: '010-6822-5256',
  keywords: ['꼼꼼함', '창의력', '성실함']
};

export const SKILLS: Skill[] = [
  {
    name: '개발 (Development)',
    description: '20년 이상의 실무 경험을 바탕으로 시스템 설계부터 풀스택 개발까지 안정적인 솔루션을 구축합니다.',
    icon: Code2
  },
  {
    name: '엑셀 (Excel)',
    description: '단순 데이터 정리를 넘어 복잡한 수식과 매크로를 활용한 업무 자동화 및 데이터 시각화에 능숙합니다.',
    icon: Table2
  },
  {
    name: '커뮤니케이션 (Communication)',
    description: '기술적인 복잡함을 비즈니스 언어로 풀어나가며, 팀원 및 이해관계자와의 원활한 협업을 이끌어냅니다.',
    icon: MessageSquare
  }
];

export const CAREER: CareerItem[] = [
  {
    period: '2004 - Present',
    title: '시니어 풀스택 개발자',
    company: '주요 IT 솔루션 및 프로젝트 리드',
    description: '20년 동안 변화하는 기술 트렌드 속에서도 견고한 아키텍처를 설계하며 다수의 프로젝트를 성공적으로 완수해왔습니다.'
  },
  {
    period: 'Core Competency',
    title: '시스템 고도화 및 최적화',
    company: 'Enterprise Level Services',
    description: '대규모 트래픽 처리 및 레거시 시스템 현대화 작업을 통해 기업의 기술적 자산을 가치 있게 변환합니다.'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: '20+ Years',
    title: '베테랑 개발 경험',
    detail: '강산이 두 번 변하는 시간 동안 현업을 지키며 쌓아온 독보적인 문제 해결 능력'
  },
  {
    year: 'Precision',
    title: '꼼꼼한 코드 퀄리티',
    detail: '버그를 최소화하고 유지보수가 용이한 코드를 지향하는 꼼꼼한 개발 프로세스'
  },
  {
    year: 'Innovation',
    title: '창의적 업무 자동화',
    detail: '엑셀과 개발 지식을 결합하여 반복적인 수동 업무를 자동화함으로써 생산성 200% 향상'
  }
];