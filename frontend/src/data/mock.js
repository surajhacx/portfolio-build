export const mockData = {
  hero: {
    name: "Suraj Theekshana",
    title: "Ethical Hacker & Cybersecurity Professional",
    description: "First Sri Lankan to achieve HackTheBox Offshore Certification",
    achievements: [
      "2 CVE Discoveries",
      "Bug Hunter at 12+ Major Companies", 
      "OSCP+ | OSCP | OSWP Certified"
    ]
  },
  
  about: {
    description: "Highly accomplished cybersecurity professional with a passion for ethical hacking and bug hunting. With a proven track record of identifying and exploiting vulnerabilities in prominent platforms, I have established myself as a leader in the field, consistently delivering outstanding results.",
    skills: [
      "Ethical Hacking",
      "Bug Bounty Hunting", 
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Research",
      "Exploit Development"
    ]
  },
  
  experience: {
    areas: [
      {
        title: "Web Application Security",
        description: "Comprehensive testing of web applications for OWASP Top 10 vulnerabilities and beyond",
        skills: ["XSS", "SQL Injection", "CSRF", "Authentication Bypass", "Business Logic Flaws"]
      },
      {
        title: "Mobile Application Security", 
        description: "Security assessment of Android and iOS applications",
        skills: ["Static Analysis", "Dynamic Analysis", "Runtime Manipulation", "Binary Analysis"]
      },
      {
        title: "API Security Testing",
        description: "REST, GraphQL, and SOAP API security assessments",
        skills: ["Authentication", "Authorization", "Rate Limiting", "Input Validation"]
      },
      {
        title: "Network Security",
        description: "Network infrastructure penetration testing and security assessments",
        skills: ["Network Scanning", "Service Enumeration", "Lateral Movement", "Privilege Escalation"]
      },
      {
        title: "Windows Security",
        description: "Windows environment security testing and Active Directory assessments",
        skills: ["AD Enumeration", "Privilege Escalation", "Persistence", "Domain Takeover"]
      }
    ]
  },
  
  certifications: [
    {
      name: "OSCP+",
      issuer: "Offensive Security",
      url: "https://credentials.offsec.com/37444eda-dfea-49f2-b8c8-f5ea3564338d#acc.ycb3eI8Z",
      year: "2024",
      description: "Advanced Penetration Testing with Kali Linux"
    },
    {
      name: "OSCP", 
      issuer: "Offensive Security",
      url: "https://credentials.offsec.com/9744230a-c5a7-4a5b-9879-9b854cabc25f#acc.IJcp48R0",
      year: "2023",
      description: "Penetration Testing with Kali Linux"
    },
    {
      name: "OSWP",
      issuer: "Offensive Security", 
      url: "https://credentials.offsec.com/47a38259-6cca-4c59-a066-6dd650ed1f85",
      year: "2023",
      description: "Offensive Security Wireless Professional"
    },
    {
      name: "HackTheBox Offshore",
      issuer: "HackTheBox",
      url: "#",
      year: "2024", 
      description: "First Sri Lankan to achieve this certification"
    }
  ],
  
  bugBounty: {
    companies: [
      { name: "Allianz", logo: "/api/placeholder/120/60", severity: "High" },
      { name: "CrowdStrike", logo: "/api/placeholder/120/60", severity: "Critical" },
      { name: "Nokia", logo: "/api/placeholder/120/60", severity: "Medium" },
      { name: "Drexel University", logo: "/api/placeholder/120/60", severity: "High" },
      { name: "PornHub", logo: "/api/placeholder/120/60", severity: "Medium" },
      { name: "Bugzero", logo: "/api/placeholder/120/60", severity: "High" },
      { name: "PayHere", logo: "/api/placeholder/120/60", severity: "Critical" },
      { name: "Helakuru", logo: "/api/placeholder/120/60", severity: "Medium" },
      { name: "WSO2", logo: "/api/placeholder/120/60", severity: "High" },
      { name: "MSI", logo: "/api/placeholder/120/60", severity: "Medium" },
      { name: "HackerOne", logo: "/api/placeholder/120/60", severity: "High" }
    ],
    cves: [
      {
        id: "CVE-2024-34452",
        description: "Critical vulnerability discovered in enterprise software",
        year: "2024"
      },
      {
        id: "CVE-2024-48605", 
        description: "High severity vulnerability in web application framework",
        year: "2024"
      }
    ]
  },
  
  contact: {
    email: "surajtheekshanahackerone@gmail.com",
    linkedin: "https://www.linkedin.com/in/suraj-theekshana-10171023a/",
    services: [
      "Penetration Testing",
      "Bug Bounty Hunting", 
      "Security Consulting",
      "Vulnerability Assessment",
      "Security Code Review",
      "Red Team Operations"
    ]
  }
};