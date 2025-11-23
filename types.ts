export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    demo: string;
    code: string;
  };
  featured?: boolean;
}