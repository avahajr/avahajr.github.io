import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";

import { siteConfig } from "@/config/site";
import React from "react";

export default function Navbar() {
  const [currentActiveSection, setCurrentSection] = React.useState(siteConfig.navItems[0]);
  const handleSectionChange = (nav: { href: string, label: string }) => {
    setCurrentSection(nav);
    window.location.href = nav.href;
  };
  return (
    <Card className="p-5 m-5">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar radius="full" size="lg" src="ava.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h3 className="text-lg font-semibold leading-none">Ava Hajratwala</h3>
            <div className="text-sm">
              Software Engineer
              <span className="text-default-400"> @ WBAR Radio</span>
            </div>
            <div className="flex text-xs">
              <i className="bi bi-mortarboard pr-1" />
              <div>Columbia University</div>
              <i className="bi bi-dot" />
              <div>Dec 2024</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="w-full">
        <div className="flex justify-between w-full">
          {siteConfig.navItems.map((nav) => (
            <Button
              key={nav.label}
              color={"secondary"}
              variant={
                nav.label === currentActiveSection.label ? "shadow" : "flat"
              }
              onClick={() => handleSectionChange(nav)}
            >
              {nav.label}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
