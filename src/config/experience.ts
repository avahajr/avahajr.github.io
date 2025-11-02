interface JobExperience {
  isCurrentJob: boolean;
  title: {
    capitalized: string;
    inASentence: string;
  };
  company: string;
  responsibilities: string[];
}

export const jobs: JobExperience[] = [
  {
    title: {
      capitalized: "Software Engineer",
      inASentence: "software engineer",
    },
    company: "M&T Bank",
    responsibilities: [
      "develop performant APIs in Java SpringBoot.",
      "optimize CI/CD pipelines.",
      "design and build Angular components.",
      "obsess over details.",
    ],
    isCurrentJob: true,
  },
  {
    title: {
      capitalized: "Software Engineer",
      inASentence: "software engineer",
    },
    company: "WBAR Radio",
    responsibilities: [
      "design and maintain backend systems.",
      "build responsive React components.",
      "ensure web stream security.",
      "wear every hat.",
    ],
    isCurrentJob: false,
  },
];
