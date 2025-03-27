"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const ClientBody = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ClientBody;
