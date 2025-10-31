"use client";

import * as React from "react";
import { HeroUIProvider } from "./HeroUIProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
