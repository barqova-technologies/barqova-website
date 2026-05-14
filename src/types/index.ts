export type ServiceCardData = {
  title: string;
  description: string;
  href: string;
  icon: "code" | "globe" | "smartphone" | "users";
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  linkedin: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  author: string;
  body: string;
};

export type JobOpening = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  summary: string;
};
