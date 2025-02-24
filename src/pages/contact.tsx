import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site.ts";

export default function Contact() {
  const titles = ["GitHub", "LinkedIn", "Email"];

  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-16"
      id="contact"
    >
      <div className="text-7xl font-semibold">Like what you see?</div>

      <div className="text-xl mt-4">
        <p className="mb-8">Stay up-to-date on my other projects. </p>

        <div className="flex gap-2.5">
          {siteConfig.links.map((link, i) => (
            <Link
              key={link.platform}
              isExternal
              className="text-4xl"
              href={link.href}
            >
              <i className={`bi bi-${link.platform}`} title={titles[i]} />
            </Link>
          ))}
        </div>
        <Link
          isExternal
          showAnchorIcon
          className="text-xl mt-8"
          href={siteConfig.resume}
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
