import { Link } from "@heroui/link";

import useResume from "@/hooks/use-resume.ts";
import { siteConfig } from "@/config/site.ts";
import {profileIcons} from "@/components/icons.tsx";

export default function Contact() {

  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-16"
      id="contact"
    >
      <div className={"flex"}>
        <div className={"flex flex-col "}>
          <div className="text-7xl font-semibold">Like what you see?</div>
          <div className="text-xl mt-4">
            <p className="mb-8">Get in touch on these platforms.</p>

            <ul className={"ml-2 w-fit"}>
              {siteConfig.profiles.map((profile, i) => (
                <li key={profile.icon} className={"mb-1.5 w-fit"}>
                  <Link
                    key={profile.icon}
                    isExternal
                    className="text-default-500 flex gap-1"
                    href={profile.href}
                    title={"Ava's " + profile.title}
                  >
                    {profileIcons[i]}
                    <span>{profile.handle}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              showAnchorIcon
              className="text-xl mt-8"
              href={"#"}
              onPress={useResume}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
