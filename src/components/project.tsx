import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { PortfolioItem } from "@/config/portfolioItems";

interface ProjectProps {
  project: PortfolioItem;
}

export default function Project({ project }: ProjectProps) {
  return (
    <Card isHoverable className={"p-2 mt-10"} shadow="sm">
      <CardHeader className={"flex"}>
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={"text-tiny text-gray-700 uppercase font-bold"}
          >
            {tag}
            {index !== project.tags.length - 1 && (
              <i className="bi bi-dot pl-0.5 pr-0.5" />
            )}
          </span>
        ))}
      </CardHeader>
      <CardBody>
        {project.image && <Image alt={project.title} src={project.image} />}
      </CardBody>
      <CardFooter>
        <div>See the demo</div>
      </CardFooter>
    </Card>
  );
}
