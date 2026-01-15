import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}