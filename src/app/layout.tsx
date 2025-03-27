import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600"]
});

export const metadata = {
  title: "Купить авиабилеты дёшево онлайн | Авиасейлс — поиск самых дешевых билетов на самолет",
  description: "Авиасейлс помогает найти и купить самые дешёвые авиабилеты. Поиск билетов на самолёт по 2000+ авиакомпаниям, ведущим авиакассам и лучшие цены на авиабилеты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/stapel-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
