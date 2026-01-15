// Import React to resolve the React namespace for React.ReactNode
import React from 'react';

export interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
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