"use client";

import { useState } from "react";

export const SearchForm = () => {
  const [searchType, setSearchType] = useState("avia");

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-3 px-4 ${
            searchType === "avia"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setSearchType("avia")}
        >
          <span className="stapel-bold">Авиабилеты</span>
        </button>
        <button
          className={`py-3 px-4 ${
            searchType === "hotel"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setSearchType("hotel")}
        >
          <span className="stapel-bold">Отели</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <label className="block text-xs text-gray-500 mb-1">Откуда</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Москва"
            />
          </div>

          <div className="relative">
            <label className="block text-xs text-gray-500 mb-1">Куда</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Санкт-Петербург"
            />
          </div>

          <div className="relative">
            <label className="block text-xs text-gray-500 mb-1">Когда</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="28 мар — 4 апр"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="flex items-center text-sm text-gray-600 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span>Составить сложный маршрут</span>
            </button>
          </div>

          <button className="aviasales-orange-button text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Найти билеты
          </button>
        </div>
      </div>
    </div>
  );
};
