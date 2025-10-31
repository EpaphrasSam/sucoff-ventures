"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Equipment", href: "/equipment" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname?.startsWith(href);

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      height="72px"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="font-heading text-xl font-bold text-primary hover:opacity-90 transition"
          >
            Sucoff Ventures
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition-all relative ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="pt-6 bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full py-3 text-lg font-medium ${
                isActive(item.href) ? "text-primary" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
