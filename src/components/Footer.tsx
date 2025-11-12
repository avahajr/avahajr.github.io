import { Link } from "@heroui/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site.ts";
import deployTimeStamp from "@/config/deploy-timestamp.json";
import useTimeAgo from "@/hooks/use-time-ago.ts";
export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    console.log(deployTimeStamp);
    setTime(new Date(deployTimeStamp * 1000));
    console.log("Deploy Time Stamp:", time?.toDateString());
  }, []);

  return (
    <footer className="w-full flex items-center justify-center py-3 gap-1">
      <span className="text-default-600">Made with</span>
      <i className="text-red-400 bi bi-heart-fill px-1" />
      <span className="text-default-600 ">by</span>
      <Link isExternal href={siteConfig.profiles[0].href} title="Ava's GitHub">
        <p className="text-primary">Ava</p>
      </Link>
      <span>Last deployed {useTimeAgo(time)}</span>
    </footer>
  );
}
