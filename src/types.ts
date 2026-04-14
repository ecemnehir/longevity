import { ReactNode } from 'react';

export interface PromptItem {
  title: string;
  content: string;
  note?: string;
  isExample?: boolean;
}

export interface TabContent {
  id: number;
  name: string;
  title: string;
  icon: ReactNode;
  link?: string;
  linkText?: string;
  prompts?: PromptItem[];
  infoBox?: {
    text: string;
    type: 'green' | 'yellow';
  };
  steps?: string[];
  principles?: { icon: string; text: string }[];
}

export interface FooterLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}
