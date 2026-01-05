'use client';

import { ThemeProvider } from "@/lib/ThemeContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
