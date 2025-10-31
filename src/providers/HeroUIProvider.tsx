"use client";

import * as React from "react";
import { HeroUIProvider as HeroUIBaseProvider } from "@heroui/react";

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return <HeroUIBaseProvider>{children}</HeroUIBaseProvider>;
}
