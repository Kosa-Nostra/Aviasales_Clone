import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function HotelsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Navbar />

      <div className="aviasales-blue-bg py-16">
        <h1 className="text-center text-white text-4xl font-bold stapel-bold mb-2">
          Здесь отели со скидками до 60%
        </h1>
        <p className="text-center text-white/80">
          Сравниваем цены на отели по 67 сайтам бронирования
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative md:col-span-2">
              <label className="block text-xs text-gray-500 mb-1">Город или отель</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Москва"
              />
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Заезд — выезд</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="27 мар — 29 мар"
              />
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Гости</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2 взрослых"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="aviasales-orange-button text-white font-semibold py-3 px-8 rounded-md transition-colors">
              Найти отели
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6 stapel-bold">Популярные направления</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-40">
              <Image
                src="/images/bangkok.jpg"
                alt="Bangkok"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold stapel-bold">Бангкок</h3>
                <p className="text-white/80 text-sm">Таиланд</p>
                <div className="mt-1">
                  <span className="text-white text-xs font-semibold">от</span>{" "}
                  <span className="text-white text-sm font-bold">2 400 ₽</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-40">
              <Image
                src="/images/male.jpg"
                alt="Maldives"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold stapel-bold">Мальдивы</h3>
                <p className="text-white/80 text-sm">Мальдивы</p>
                <div className="mt-1">
                  <span className="text-white text-xs font-semibold">от</span>{" "}
                  <span className="text-white text-sm font-bold">9 500 ₽</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-40">
              <Image
                src="/images/tashkent.jpg"
                alt="Tashkent"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold stapel-bold">Ташкент</h3>
                <p className="text-white/80 text-sm">Узбекистан</p>
                <div className="mt-1">
                  <span className="text-white text-xs font-semibold">от</span>{" "}
                  <span className="text-white text-sm font-bold">1 850 ₽</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-40">
              <Image
                src="/images/colombo.jpg"
                alt="Colombo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold stapel-bold">Коломбо</h3>
                <p className="text-white/80 text-sm">Шри-Ланка</p>
                <div className="mt-1">
                  <span className="text-white text-xs font-semibold">от</span>{" "}
                  <span className="text-white text-sm font-bold">3 200 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
