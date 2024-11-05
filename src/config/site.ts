export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ava Hajratwala",
  description: "Ava Hajratwala's personal website",
  navItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: [
    { platform: "github", href: "https://github.com/avahajr" },
    { platform: "linkedin", href: "https://www.linkedin.com/in/avahajr" },
  ],
  resume: 'https://github.com/avahajr/avahajr/blob/main/Ava_Hajratwala_resume.pdf'
};
