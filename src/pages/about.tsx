import { Link } from "@heroui/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { siteConfig } from "@/config/site.ts";

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const deemphasize: string = "dark:opacity-90";

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: siteConfig.job.responsibilities,
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-56 sm:pt-10"
      id="about"
    >
      <div className={"flex flex-col gap-8"}>
        <h1 className="text-6xl sm:text-7xl font-semibold">
          Hi, I&#39;m Ava.
        </h1>
        <p className="text-3xl sm:text-4xl">
          <span className={deemphasize}>
            I&#39;m a recent Columbia grad passionate about{" "}
          </span>
          <span className="font-semibold"> user-centered design{" "}</span>
          <span className={deemphasize}>and building things{" "}</span>
          <span className="font-semibold">
            from the ground up
          </span>
          .
        </p>
        <p className=" text-lg sm:text-xl min-h-24 mt-4">
          I&#39;m currently a {siteConfig.job.title.inASentence} at{" "}
          {siteConfig.job.company}, where I{" "}
          <span ref={typedRef} className="font-medium" id="typed" />
        </p>
      </div>
      <Link
        isExternal
        showAnchorIcon
        className="text-2xl mt-10"
        href={siteConfig.resume}
      >
        Resume
      </Link>
    </section>
  );
}
