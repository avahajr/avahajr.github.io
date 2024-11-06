import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

export default function NavbarComponent() {
  const [currentActiveSection, setCurrentSection] = useState(
    siteConfig.navItems[0]
  );

  const handleSectionChange = (nav: { href: string; label: string }) => {
    setCurrentSection(nav);
    window.location.href = nav.href;
  };
  const menuItems = siteConfig.navItems.map((nav) => (
    <NavbarItem key={nav.label}>
      <Button
        key={nav.label}
        as={Link}
        color={"secondary"}
        variant={nav.label === currentActiveSection.label ? "shadow" : "flat"}
        onClick={() => handleSectionChange(nav)}
      >
        {nav.label}
      </Button>
    </NavbarItem>
  ));

  return (
    <Navbar
      isBordered
      className="mx-auto pt-14 pb-14 sm:pt-8 sm:pb-8"
    >
      <div className="flex mx-auto" id="me">
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
          </NavbarBrand>
          <div className={"flex justify-between mt-4 sm:hidden"}>
            {menuItems}
          </div>
        </div>
      </div>
      <NavbarContent className="hidden sm:flex" justify={"end"}>
        {menuItems}
      </NavbarContent>
    </Navbar>
  );
}
