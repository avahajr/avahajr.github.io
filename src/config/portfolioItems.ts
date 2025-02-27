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
    demoVideoUrl:
      "https://www.youtube.com/embed/JOeE-m3F6E4?si=GDFrqUCKHh7AKdTv",
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
    title: "WebAudio DJ",
    description: "DJ Kit built with the WebAudio API and React.",
    liveUrl: "https://avahajr.github.io/dj-kit/",
    repoUrl: "https://github.com/avahajr/dj-kit",
    actionPhrase: "Try it out",
    coverImage: "webaudio-dj/cover.png",
    tags: ["React", "WebAudio API"],
  },
];

export { type PortfolioItem, portfolioItems };
