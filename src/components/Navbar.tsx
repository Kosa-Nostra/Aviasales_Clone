"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: "/images/flights-icon.svg", label: "Авиабилеты", href: "/" },
    { icon: "/images/hotels-icon.svg", label: "Отели", href: "/hotels" },
    { icon: "/images/guides-icon.svg", label: "Экскурсии", href: "/guides" },
  ];

  return (
    <header className="aviasales-blue-bg h-14 flex items-center sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex mr-4">
            <Image
              src="/images/aviasales-logo.svg"
              alt="Авиасейлс"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex">
            {tabs.map((tab, index) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative px-4 py-4 text-white text-sm flex items-center transition-colors ${
                  activeTab === index
                    ? "bg-opacity-10 bg-white"
                    : "hover:bg-opacity-5 hover:bg-white"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </Link>
            ))}
            <a
              href="https://aviasales.ru/b2b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 text-white text-sm flex items-center hover:bg-opacity-5 hover:bg-white transition-colors"
            >
              Бизнес
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-3 w-3"
              >
                <path d="M7 7l5 5 5-5m-5 5v8" />
              </svg>
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/profile"
            className="text-white hover:text-gray-200 flex items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-5 w-5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="hidden md:inline">Профиль</span>
          </Link>

          <Link
            href="/favorites"
            className="text-white hover:text-gray-200 flex items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-5 w-5"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="hidden md:inline">Избранное</span>
          </Link>

          <Link
            href="/support"
            className="text-white hover:text-gray-200 flex items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-5 w-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="hidden md:inline">Поддержка</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
