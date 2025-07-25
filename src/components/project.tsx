import { Fragment } from "react";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Spinner } from "@heroui/spinner";
import HoverVideoPlayer from "react-hover-video-player";

import { PortfolioItem } from "@/config/portfolioItems";

interface ProjectProps {
  project: PortfolioItem;
}

export default function Project({ project }: ProjectProps) {
  const overlayImage = (
    <img alt={project.title} className="mx-auto p-2" src={project.coverImage} />
  );

  return (
    <Card isHoverable className={"p-2 mt-8"} shadow="sm">
      <CardHeader className={"block"}>
        <div
          className={
            "text-tiny flex flex-wrap text-dark-700 uppercase font-bold gap-1"
          }
        >
          {project.tags.map((tag, index) => (
            <Fragment key={`tag-dot-${index}`}>
              <span
                key={`tag-${index}`}
                className={"opacity-80 dark:opacity-50"}
              >
                {tag}
              </span>
              {index !== project.tags.length - 1 && (
                <span
                  key={`dot-${index}`}
                  className="text-dark-500 opacity-50 dark:opacity-70"
                >
                  •
                </span>
              )}
            </Fragment>
          ))}
        </div>
        <div className="mt-2 text-xl font-semibold">{project.title}</div>
      </CardHeader>
      {project.previewVideo ? (
        <HoverVideoPlayer
          loop
          muted
          className="mx-auto p-2"
          loadingOverlay={<Spinner />}
          loadingOverlayWrapperStyle={{ borderRadius: "0.5rem" }}
          pausedOverlay={overlayImage}
          pausedOverlayWrapperStyle={{ borderRadius: "0.5rem" }}
          preload="auto"
          videoSrc={project.previewVideo}
        >
          <track kind="captions" label="English" src="" srcLang="en" />
        </HoverVideoPlayer>
      ) : (
        overlayImage
      )}
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
