import { Link } from "@nextui-org/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { siteConfig } from "@/config/site.ts";

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "design and maintain backend systems.",
        "build responsive React components.",
        "ensure web stream security.",
        "wear every hat.",
      ],
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
      <h1 className="text-6xl sm:text-7xl font-semibold mb-8">
        Hi, I&#39;m Ava.
      </h1>
      <p className="text-2xl sm:text-3xl">
        I’m a recent Columbia grad with{" "}
        <span className="font-semibold">proven leadership experience</span>,{" "}
        <span className="font-semibold">excellent communication skills</span>,
        and a passion for developing new features using{" "}
        <span className="font-semibold">cutting-edge technologies</span>.
      </p>
      <p className="text-xl mt-8 min-h-24">
        I&#39;m currently a software engineer at WBAR Radio, where I{" "}
        <span ref={typedRef} className="font-medium" id="typed" />
      </p>
      <Link
        isExternal
        showAnchorIcon
        className="text-2xl mt-20"
        href={siteConfig.resume}
      >
        Resume
      </Link>
    </section>
  );
}
