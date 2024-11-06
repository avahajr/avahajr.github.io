interface PortfolioItem {
  title: string;
  description: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  actionPhrase: string;
  repoUrl: string;
  image?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "wbar.org",
    description: "The official website for WBAR Radio.",
    liveUrl: "https://wbar.org",
    repoUrl: "https://github.com/wbar-radio/wbar-app",
    image: "wbar.png",
    actionPhrase: "Listen",
    tags: ["React", "Express.js", "SQL"],
  },
  {
    title: "Flight Simulator",
    description: "A flight simulator built with Unity and C#.",
    demoVideoUrl: "",
    repoUrl: "",
    actionPhrase: "Watch the demo",
    image: "",
    tags: ["Unity", "C#", "Arduino"],
  },
  {
    title: "Privacy Helper",
    description:
      "A GPT-powered tool for helping users understand the policies they sign.",
    demoVideoUrl: "",
    repoUrl: "",
    actionPhrase: "Watch the Demo",
    image: "privacy-helper.png",
    tags: ["React", "Flask", "OpenAI API", "Bootstrap CSS"],
  },
  {
    title: "WebAudio DJ",
    description: "DJ Kit built with the WebAudio API and React.",
    liveUrl: "https://avahajr.github.io/dj-kit/",
    repoUrl: "https://github.com/avahajr/dj-kit",
    actionPhrase: "Try it out",
    image: "",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];

export { type PortfolioItem, portfolioItems };
