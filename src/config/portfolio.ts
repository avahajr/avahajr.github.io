interface PortfolioItem {
  title: string;
  description: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  actionPhrase: string;
  repoUrl: string;
  coverImage?: string;
  previewVideo?: string;
  tags: string[];
}

const portfolio: PortfolioItem[] = [
  {
    title: "wbar.org",
    description:
      "The official website for WBAR, Barnard College's radio station.",
    liveUrl: "https://wbar.org",
    repoUrl: "https://github.com/wbar-radio/wbar-app",
    coverImage: "wbar.org/cover.png",
    previewVideo: "wbar.org/preview.webm",
    actionPhrase: "Listen",
    tags: ["React", "TailwindCSS", "FastAPI", "Supabase", "Vercel"],
  },
  {
    title: "Flight Simulator",
    description:
      "A flight simulator built with an ESP-32, the Unity game engine, and pure determination.",
    demoVideoUrl: "https://www.youtube.com/watch?v=JOeE-m3F6E4",
    repoUrl: "https://github.com/avahajr/serial-flight-sim",
    actionPhrase: "Watch the demo",
    coverImage: "flight-simulator/cover.png",
    previewVideo: "flight-simulator/preview.webm",
    tags: ["Arduino", "Unity", "C#", "C++"],
  },
  {
    title: "Privacy Guardian",
    description:
      "A GPT-powered tool for helping users understand the policies they sign.",
    repoUrl: "https://github.com/avahajr/privacy-guardian",
    liveUrl: "https://privacy-guardian-ten.vercel.app/",
    demoVideoUrl: "https://youtu.be/MudcqqNe720",
    coverImage: "privacy-guardian/cover.png",
    previewVideo: "privacy-guardian/preview.webm",
    actionPhrase: "Try it out",
    tags: ["React", "Flask", "TailwindCSS", "GPT-4"],
  },
  {
    title: "Evolutionary Lunar Lander",
    description:
      'Developing novel genetic algorithms, which learn "reward-hacking" techniques to solve classic RL problems in new ways.',
    liveUrl: "lunar-lander/sri-poster.pdf",
    repoUrl: ".",
    actionPhrase: "See poster",
    previewVideo: "lunar-lander/lunar-lander-upscaled.webm",
    coverImage: "lunar-lander/lunar-lander-upscaled.png",
    tags: ["Reinforcement Learning", "Parallel computing", "Python"],
  },
];

export { type PortfolioItem, portfolio };
