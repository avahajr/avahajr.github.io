import { PortfolioItem } from "../config/portfolioItems";

import Project from "@/components/project.tsx";

interface ProjectsProps {
  projects: PortfolioItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-20 mb-8">Projects</h2>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}
