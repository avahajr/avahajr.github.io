import { useState, useRef, Fragment } from "react";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

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
        <div
          className={
            "text-tiny flex flex-wrap text-gray-700 uppercase font-bold gap-1"
          }
        >
          {project.tags.map((tag, index) => (
            <Fragment key={`tag-dot-${index}`}>
              <span key={`tag-${index}`}>{tag}</span>
              {index !== project.tags.length - 1 && (
                <span key={`dot-${index}`} className="text-gray-500">
                  •
                </span>
              )}
            </Fragment>
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
      <CardFooter className="flex justify-between items-end">
        <div className={"w-2/3"}>{project.description}</div>
        <div>
          <Link
            isExternal
            showAnchorIcon
            href={project.liveUrl || project.demoVideoUrl || project.repoUrl}
          >
            {project.actionPhrase}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
