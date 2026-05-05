export type Project = {
  slug: string;
  name: string;
  category: "Web App" | "Mobile App" | "SaaS";
  description: string;
  tech: string[];
  status?: string;
};

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

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  warm: string;
  icon: string;
};
