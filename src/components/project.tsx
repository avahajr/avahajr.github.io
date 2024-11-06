import { useState } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { PortfolioItem } from "@/config/portfolioItems";

interface ProjectProps {
  project: PortfolioItem;
}

export default function Project({ project }: ProjectProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card
      isHoverable
      className={"p-2 mt-8"}
      shadow="sm"
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
    >
      <CardHeader className={"block"}>
        <div className={"flex"}>
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
        </div>
        <div className="mt-2 text-xl font-semibold">{project.title}</div>
      </CardHeader>
      <video
        autoPlay
        loop
        preload="auto"
        className="mx-auto p-2"
        src={project.previewVideo}
        hidden={!showVideo}
      >
        <track kind="captions" label="English" src="" srcLang="en" />
      </video>
      <Image
        alt={project.title}
        className="mx-auto p-2"
        src={project.coverImage}
        hidden={showVideo}
      />
      <CardFooter className="flex justify-between">
        <div>{project.description}</div>
        <div>
          <Link
            isExternal
            showAnchorIcon
            href={project.liveUrl || project.demoVideoUrl}
          >
            {project.actionPhrase}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}