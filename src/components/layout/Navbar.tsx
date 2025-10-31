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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { FiPhone, FiMail, FiMapPin, FiChevronDown } from "react-icons/fi";

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
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FiMapPin className="w-3.5 h-3.5 text-accent" />
              <span className="text-slate-300">Goaso-Dechem, Ahafo Region</span>
            </div>
            <a href="tel:+233244564256" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FiPhone className="w-3.5 h-3.5 text-accent" />
              <span className="text-slate-300">+233 (0) 24 456 4256</span>
            </a>
          </div>
          <a href="mailto:mikekwamecoffie@yahoo.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <FiMail className="w-3.5 h-3.5 text-accent" />
            <span className="text-slate-300">mikekwamecoffie@yahoo.com</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <HeroNavbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        maxWidth="xl"
        className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
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
          <NavbarItem isActive={isActive("/")}>
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-slate-700"
              }`}
            >
              Home
            </Link>
          </NavbarItem>

          {/* About Dropdown */}
          <Dropdown>
            <NavbarItem isActive={isActive("/about")}>
              <DropdownTrigger>
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") || isActive("/team") ? "text-primary" : "text-slate-700"
                  }`}
                >
                  About Us
                  <FiChevronDown className="w-4 h-4" />
                </button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="About submenu">
              <DropdownItem key="about" href="/about">
                Our Story
              </DropdownItem>
              <DropdownItem key="team" href="/team">
                Management Team
              </DropdownItem>
              <DropdownItem key="equipment" href="/equipment">
                Plants & Equipment
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem isActive={isActive("/services")}>
            <Link
              href="/services"
              aria-current={isActive("/services") ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-slate-700"
              }`}
            >
              Services
            </Link>
          </NavbarItem>

          <NavbarItem isActive={isActive("/projects")}>
            <Link
              href="/projects"
              aria-current={isActive("/projects") ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/projects") ? "text-primary" : "text-slate-700"
              }`}
            >
              Projects
            </Link>
          </NavbarItem>

          <NavbarItem isActive={isActive("/certifications")}>
            <Link
              href="/certifications"
              aria-current={isActive("/certifications") ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/certifications") ? "text-primary" : "text-slate-700"
              }`}
            >
              Certifications
            </Link>
          </NavbarItem>

          <NavbarItem isActive={isActive("/contact")}>
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-slate-700"
              }`}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link href={item.href} className="w-full text-slate-700 hover:text-primary" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroNavbar>
    </>
  );
}
