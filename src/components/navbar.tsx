import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { useState, useEffect } from "react";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import useScrollspy from "@/hooks/use-scrollspy.ts";
import { ThemeSwitch } from "@/components/theme-switch.tsx";

export default function NavbarComponent() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIntersectingElementIndex] = useScrollspy(sections, {
    offset: 200,
  });
  const [currentActiveSection, setCurrentSection] = useState(
    siteConfig.navItems[0],
  );

  useEffect(() => {
    const sectionIds = siteConfig.navItems.map((nav) => nav.href.slice(1));
    const selectedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    setSections(selectedSections);
  }, [siteConfig.navItems]);

  useEffect(() => {
    if (currentIntersectingElementIndex !== -1) {
      setCurrentSection(siteConfig.navItems[currentIntersectingElementIndex]);
    }
  }, [currentIntersectingElementIndex]);

  useEffect(() => {
    document.title = `Ava Hajratwala - ${currentActiveSection.label}`;
  }, [currentActiveSection]);

  const menuItems = siteConfig.navItems.map((nav) => (
    <NavbarItem key={nav.label}>
      <Button
        key={nav.label}
        as={Link}
        color={"secondary"}
        href={nav.href}
        role={"button"}
        variant={nav.label === currentActiveSection.label ? "shadow" : "flat"}
      >
        {nav.label}
      </Button>
    </NavbarItem>
  ));

  return (
    <Navbar
      isBordered
      className="mx-auto pt-14 pb-14 sm:pt-8 sm:pb-8"
      id="navbar"
    >
      <div className="flex mx-auto">
        <div className="block">
          <NavbarBrand className="gap-5 flex mx-auto">
            <Avatar
              alt="Ava in central park"
              radius="full"
              size="lg"
              src="ava.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h3 className="text-lg font-semibold leading-none">
                Ava Hajratwala
              </h3>
              <div className="text-sm">
                {siteConfig.job.title.capitalized}
                <span className="text-default-500">
                  {" "}
                  @ {siteConfig.job.company}
                </span>
              </div>
              <div className="flex text-xs">
                <i className="bi bi-mortarboard pr-1" />
                <div>Columbia University</div>
                <i className="bi bi-dot" />
                <div>Dec 2024</div>
              </div>
            </div>
          </NavbarBrand>
          {/*Mobile menu*/}
          <div className={"flex justify-between mt-4 sm:hidden"}>
            {menuItems}
          </div>
        </div>
      </div>
      {/*Non-mobile menu*/}
      <NavbarContent className="hidden sm:flex" justify={"end"}>
        {menuItems}
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  );
}
