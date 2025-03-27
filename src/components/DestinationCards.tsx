"use client";

import Image from "next/image";
import Link from "next/link";

type Destination = {
  id: string;
  title: string;
  country: string;
  imageUrl: string;
  price: number;
};

const destinations: Destination[] = [
  {
    id: "1",
    title: "Коломбо",
    country: "Шри-Ланка",
    imageUrl: "/images/colombo.jpg",
    price: 9785,
  },
  {
    id: "2",
    title: "Мале",
    country: "Мальдивы",
    imageUrl: "/images/male.jpg",
    price: 18270,
  },
  {
    id: "3",
    title: "Ташкент",
    country: "Узбекистан",
    imageUrl: "/images/tashkent.jpg",
    price: 5050,
  },
  {
    id: "4",
    title: "Бангкок",
    country: "Таиланд",
    imageUrl: "/images/bangkok.jpg",
    price: 16809,
  },
];

export const DestinationCards = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6 stapel-bold">Ваш набор штампов</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <Link
            href={`/search/MOW${destination.id}`}
            key={destination.id}
            className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative w-full h-40">
              <Image
                src={destination.imageUrl}
                alt={destination.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold stapel-bold">{destination.title}</h3>
                <p className="text-white/80 text-sm">{destination.country}</p>
                <div className="mt-1">
                  <span className="text-white text-xs font-semibold">от</span>{" "}
                  <span className="text-white text-sm font-bold">{destination.price.toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Показать все
        </button>
      </div>
    </div>
  );
};
