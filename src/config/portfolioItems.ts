interface PortfolioItem {
  title: string;
  description: string;
  demoVideoEmbed: string;
  repoLink: string;
  image?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Flight Simulator",
    description: "A flight simulator built with Unity and C#.",
    demoVideoEmbed: "",
    repoLink: "",
    image: "flight-simulator.png",
    tags: ["Unity", "C#", "Arduino"],
  },
  {
    title: "wbar.org",
    description: "The official website for WBAR Radio.",
    demoVideoEmbed: "",
    repoLink: "",
    image: "wbar-org.png",
    tags: ["React", "Express.js", "SQL"],
  },
  {
    title: "Privacy Helper",
    description:
      "A GPT-powered tool for helping users understand the policies they sign.",
    demoVideoEmbed: "",
    repoLink: "",
    image: "privacy-helper.png",
    tags: ["React", "Flask", "OpenAI API", "Bootstrap CSS"],
  },
  {
    title: "WebAudio DJ",
    description: "DJ Kit built with the WebAudio API and React.",
    demoVideoEmbed: "",
    repoLink: "",
    image: "dj-kit.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];

export { type PortfolioItem, portfolioItems };
