import { useState, useRef } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { PortfolioItem } from "@/config/portfolioItems";

interface ProjectProps {
  project: PortfolioItem;
}

export default function Project({ project }: ProjectProps) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.controls = true;
    }
  };

  return (
    <Card
      isHoverable
      className={"p-2 mt-8"}
      shadow="sm"
      onMouseEnter={() => project.previewVideo && setShowVideo(true)}
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
        ref={videoRef}
        autoPlay
        loop
        muted
        className="mx-auto p-2"
        hidden={!showVideo}
        preload="auto"
        src={project.previewVideo}
        onPlay={handleVideoPlay}
      >
        <track kind="captions" label="English" src="" srcLang="en" />
      </video>
      <Image
        alt={project.title}
        className="mx-auto p-2"
        hidden={showVideo}
        src={project.coverImage}
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
