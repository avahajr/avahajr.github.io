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

const portfolioItems: PortfolioItem[] = [
  {
    title: "wbar.org",
    description: "The official website for WBAR Radio.",
    liveUrl: "https://wbar.org",
    repoUrl: "https://github.com/wbar-radio/wbar-app",
    coverImage: "wbar.org/cover1.png",
    previewVideo: "wbar.org/preview.webm",
    actionPhrase: "Listen",
    tags: ["React", "Express.js", "MYSQL"]
  },
  {
    title: "Flight Simulator",
    description: "A flight simulator built with an ESP-32 and the Unity game engine.",
    demoVideoUrl:
      "https://www.youtube.com/embed/JOeE-m3F6E4?si=GDFrqUCKHh7AKdTv",
    repoUrl: "https://github.com/avahajr/serial-flight-sim",
    actionPhrase: "Watch the demo",
    coverImage: "flight-simulator/cover.png",
    previewVideo: "flight-simulator/preview.webm",
    tags: ["Arduino", "Unity", "C#", "C++"]
  },
  {
    title: "Privacy Helper",
    description:
      "A GPT-powered tool for helping users understand the policies they sign.",
    repoUrl: "https://github.com/avahajr/privacy-helper",
    coverImage: "privacy-helper/cover.png",
    actionPhrase: "See the repo",
    tags: ["React", "Flask", "OpenAI API", "Bootstrap CSS"]
  },
  {
    title: "WebAudio DJ",
    description: "DJ Kit built with the WebAudio API and React.",
    liveUrl: "https://avahajr.github.io/dj-kit/",
    repoUrl: "https://github.com/avahajr/dj-kit",
    actionPhrase: "Try it out",
    coverImage: "webaudio-dj/cover.png",
    tags: ["React", "WebAudio API"]
  }
];

export { type PortfolioItem, portfolioItems };
