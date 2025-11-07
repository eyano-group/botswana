// src/types/index.ts
export interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  avatar: string;
}

export interface RecentPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

export interface ContentItem {
  id: string;
  title: string;
  content: string;
}

export interface Section {
  id: string;
  title: string;
  content: ContentItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageData {
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  commentCount: number;
  content: string[];
  sections: Section[];
}