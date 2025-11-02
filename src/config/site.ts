import { jobs } from "@/config/experience.ts";
export const siteConfig = {
  name: "Ava Hajratwala",
  description: "Ava Hajratwala's personal website",
  job: jobs[0],
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  profiles: [
    {
      icon: "i-mdi-github",
      title: "GitHub",
      href: "https://github.com/avahajr",
      handle: "@avahajr",
    },
    {
      icon: "i-mdi-linkedin",
      title: "LinkedIn",
      handle: "/in/avahajr",
      href: "https://www.linkedin.com/in/avahajr",
    },
    {
      icon: "i-mdi-email-outline",
      title: "Email",
      href: "mailto:avahajr@gmail.com",
      handle: "avahajr@gmail.com",
    },
  ],
  resume: "Ava_Hajratwala_resume.pdf",
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "MySQL",
    "Haskell",
    "Python",
    "Java",
    "C++",
    "Git",
  ],
};
