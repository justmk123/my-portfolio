import { NavItem, SocialLink, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
];

export const PROFILE = {
  firstName: "MAHMOOD",
  lastName: "KHAN",
  subtitle: "CYBERSECURITY ANALYST",
  intro: "HI, I AM"
};

export const ABOUT_CONTENT = {
  heading: "DIGITAL GUARDIAN",
  description: "I am a Cybersecurity Student with a passion for offensive security and threat hunting. My journey involves breaking systems to build them stronger, analyzing malware behavior, and securing critical network infrastructures.",
  description2: "From solving CTF challenges to auditing web applications, I focus on the intersection of cryptography, network defense, and ethical hacking. My goal is to ensure data integrity and confidentiality in an increasingly hostile digital landscape."
};

export const EDUCATION_DATA = [
  {
    period: "2023 - Present",
    institution: "Ahmad Dahlan University,",
    location: "Yogyakarta",
    degree: "Informatics Engineering (Cyber Security Focus)"
  }
];

export const EXPERIENCE_DATA = [
  {
    period: "2020 - 2023",
    company: "PLTU Cilacap",
    role: "IT Network Support Intern",
    current: false
  },
  {
    period: "2024",
    company: "SE KUBI UAD",
    role: "Junior System Administrator",
    current: false
  },
  {
    period: "2025 - Present",
    company: "Publika Labs",
    role: "Security Analyst",
    current: true
  },
  {
    period: "2025 - Present",
    company: "YOUP Creative",
    role: "Web Security Consultant",
    current: true
  }
];

export const SKILLS_DATA = [
  {
    category: "OFFENSIVE SEC",
    icon: "terminal",
    items: ["Burp Suite", "Metasploit", "Nmap", "Kali Linux", "SQLMap", "Hydra"]
  },
  {
    category: "DEFENSIVE OPS",
    icon: "database",
    items: ["SIEM (Wazuh)", "Wireshark", "Snort IDS", "Firewalls", "Incident Response", "Splunk"]
  },
  {
    category: "SCRIPTING",
    icon: "code",
    items: ["Python", "Bash", "PowerShell", "C++", "Assembly", "Go"]
  },
  {
    category: "INFRASTRUCTURE",
    icon: "brain",
    items: ["Linux Hardening", "Active Directory", "Docker", "AWS Security", "TCP/IP Analysis", "VPNs"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "PACKET SENTINEL",
    description: "A Python-based network traffic analyzer and intrusion detection system capable of flagging suspicious TCP/UDP signatures in real-time.",
    tags: ["Python", "Scapy", "Wireshark", "Socket Programming"],
    image: "https://images.unsplash.com/photo-1558494949-ef253b29427b?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    title: "SECURE VAULT",
    description: "End-to-end encrypted file sharing platform implementing AES-256 and RSA encryption standards for secure data exchange.",
    tags: ["Cryptography", "Node.js", "OpenSSL", "React"],
    image: "https://images.unsplash.com/photo-1614064641938-3bcee52942c9?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    title: "VULN SCANNER",
    description: "Automated vulnerability scanner that checks web applications for OWASP Top 10 flaws like SQL Injection and XSS.",
    tags: ["Bash", "Python", "OWASP", "Automation"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" }
  },
  {
    title: "KEYLOGGER HUNTER",
    description: "A memory forensics tool designed to detect and isolate hook-based keyloggers in Windows environments.",
    tags: ["C++", "WinAPI", "Malware Analysis", "Forensics"],
    image: "https://images.unsplash.com/photo-1563206767-5b1d972eefab?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" }
  }
];

export const MARQUEE_TEXT = "PENETRATION TESTING • NETWORK SECURITY • CRYPTOGRAPHY • INCIDENT RESPONSE • ETHICAL HACKING • MALWARE ANALYSIS • OSINT • ";