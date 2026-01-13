"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
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
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

type NavRoute = {
  label: string;
  href: string;
  children?: NavRoute[];
};

const navRoutes: NavRoute[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Management Team", href: "/team" },
      { label: "Plants & Equipment", href: "/equipment" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Certifications",
    href: "/certifications",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [utilityHeight, setUtilityHeight] = React.useState(0);
  const [menuOffset, setMenuOffset] = React.useState(0);
  const utilityBarRef = React.useRef<HTMLDivElement | null>(null);
  const heroNavbarRef = React.useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const updateMeasurements = React.useCallback(() => {
    const utility = utilityBarRef.current?.offsetHeight ?? 0;
    const navbar = heroNavbarRef.current?.offsetHeight ?? 0;

    setUtilityHeight(utility);
    setMenuOffset(utility + navbar);
  }, []);

  React.useLayoutEffect(() => {
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, [updateMeasurements]);

  const isRouteActive = (href: string, children?: NavRoute[]): boolean => {
    // Check if current pathname matches this route
    if (href === "/") {
      return pathname === href;
    }

    // Check if pathname starts with this route
    const isActive = pathname?.startsWith(href) || false;

    // Also check children routes
    if (children) {
      const hasActiveChild = children.some((child) =>
        isRouteActive(child.href)
      );
      return isActive || hasActiveChild;
    }

    return isActive;
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div
        ref={utilityBarRef}
        className="bg-slate-900 text-white py-2 border-b border-slate-800 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FiMapPin className="w-3.5 h-3.5 text-accent" />
              <span className="text-slate-300">Goaso-Bechem, Ahafo Region</span>
            </div>
            <a
              href="tel:+233244564256"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <FiPhone className="w-3.5 h-3.5 text-accent" />
              <span className="text-slate-300">+233 (0) 24 456 4256</span>
            </a>
          </div>
          <a
            href="mailto:mikekwamecoffie@yahoo.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FiMail className="w-3.5 h-3.5 text-accent" />
            <span className="text-slate-300">mikekwamecoffie@yahoo.com</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <HeroNavbar
        ref={heroNavbarRef}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        maxWidth="xl"
        className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm sticky z-40"
        style={{ top: utilityHeight ? `${utilityHeight}px` : undefined }}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            icon={
              isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )
            }
            className="lg:hidden"
          />
          <NavbarBrand>
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              <Image
                src="/sucoff_logo.png"
                alt="Sucoff Ventures Logo"
                width={80}
                height={80}
                className="h-auto w-auto max-h-12"
                priority
              />
              <span className="font-heading sm:text-3xl text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight italic truncate">
                Sucoff Ventures
              </span>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden lg:flex gap-8" justify="center">
          {navRoutes.map((route) => {
            const isActive = isRouteActive(route.href, route.children);

            if (route.children && route.children.length > 0) {
              // Dropdown menu
              return (
                <Dropdown key={route.href} placement="bottom-start">
                  <NavbarItem isActive={isActive}>
                    <DropdownTrigger>
                      <button
                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-slate-700"
                        }`}
                      >
                        <span className="relative">
                          {route.label}
                          {isActive && (
                            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full" />
                          )}
                        </span>
                        <FiChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label={`${route.label} submenu`}
                    onAction={(key) => {
                      const href = key as string;
                      router.push(href);
                    }}
                  >
                    {route.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <DropdownItem
                          key={child.href}
                          href={child.href}
                          className={`${
                            isChildActive
                              ? "text-primary font-semibold"
                              : "text-slate-700"
                          }`}
                        >
                          <span className="relative inline-block">
                            {child.label}
                            {isChildActive && (
                              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full" />
                            )}
                          </span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              );
            }

            // Regular link
            return (
              <NavbarItem key={route.href} isActive={isActive}>
                <Link
                  href={route.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    isActive ? "text-primary" : "text-slate-700"
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full" />
                  )}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        {/* Mobile Navigation Menu */}
        <NavbarMenu
          className="fixed left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
          style={
            menuOffset
              ? {
                  top: `${Math.max(menuOffset - 1, 0)}px`,
                }
              : undefined
          }
        >
          {navRoutes.map((route) => {
            const isActive = isRouteActive(route.href, route.children);

            if (route.children && route.children.length > 0) {
              // Dropdown items in mobile - show parent and all children directly
              const isParentActive = pathname === route.href;
              return (
                <React.Fragment key={route.href}>
                  <NavbarMenuItem>
                    <Link
                      href={route.href}
                      className={`w-full relative ${
                        isParentActive ? "text-primary" : "text-slate-700"
                      } hover:text-primary`}
                      size="lg"
                      onPress={() => handleNavClick(route.href)}
                    >
                      <span className="relative inline-block">
                        {route.label}
                      </span>
                    </Link>
                  </NavbarMenuItem>
                  {route.children.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <NavbarMenuItem key={child.href}>
                        <Link
                          href={child.href}
                          className={`w-full pl-6 relative ${
                            isChildActive ? "text-primary" : "text-slate-700"
                          } hover:text-primary`}
                          size="lg"
                          onPress={() => handleNavClick(child.href)}
                        >
                          <span className="relative inline-block">
                            {child.label}
                            {isChildActive && (
                              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full" />
                            )}
                          </span>
                        </Link>
                      </NavbarMenuItem>
                    );
                  })}
                </React.Fragment>
              );
            }

            // Regular menu item
            return (
              <NavbarMenuItem key={route.href}>
                <Link
                  href={route.href}
                  className={`w-full relative ${
                    isActive ? "text-primary" : "text-slate-700"
                  } hover:text-primary`}
                  size="lg"
                  onPress={() => handleNavClick(route.href)}
                >
                  <span className="relative inline-block">
                    {route.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full" />
                    )}
                  </span>
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </HeroNavbar>
    </>
  );
}
