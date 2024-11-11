import { PortfolioItem } from "../config/portfolioItems";

import Project from "@/components/project.tsx";

interface ProjectsProps {
  projects: PortfolioItem[];
}

export default function Portfolio({ projects }: ProjectsProps) {
  return (
    <section className="min-h-screen pt-52 sm:pt-40" id="portfolio">
      <h2 className="text-6xl font-semibold  mb-8">Portfolio</h2>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </section>
  );
}
