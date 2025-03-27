"use client";

import Image from "next/image";
import Link from "next/link";

export const WeekendOffers = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <div className="bg-blue-500 rounded-lg overflow-hidden relative">
        <div className="p-6 md:p-8 relative z-10">
          <h2 className="text-white text-2xl font-bold mb-2 stapel-bold">
            Куда улететь на выходные
          </h2>
          <p className="text-white/90 mb-4 max-w-md">
            Билеты от 2000 ₽ туда-обратно. Идеально для спонтанных поездок на выходные
          </p>

          <Link
            href="/weekend-offers"
            className="bg-white text-blue-600 px-4 py-2 rounded-md inline-block font-semibold hover:bg-gray-100 transition-colors"
          >
            Смотреть поездки
          </Link>
        </div>

        <div className="absolute top-0 right-0 bottom-0 w-1/3 hidden md:block">
          <div className="relative h-full w-full">
            <Image
              src="/images/weekend-getaway.jpg"
              alt="Weekend Getaway"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute right-8 bottom-8 bg-white p-3 rounded-md shadow-lg hidden md:block">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/images/city-thumbnail.jpg"
                alt="City Thumbnail"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <div className="text-sm text-gray-500">Москва → Казань</div>
              <div className="text-xl font-bold text-gray-800">20 966 ₽</div>
              <div className="text-xs text-gray-500">9—12 мая · 3 дня</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
