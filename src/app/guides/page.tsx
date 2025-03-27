import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function GuidesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Navbar />

      <div className="aviasales-blue-bg py-16">
        <h1 className="text-center text-white text-4xl font-bold stapel-bold mb-2">
          Экскурсии по всему миру
        </h1>
        <p className="text-center text-white/80">
          Билеты без наценки · Мгновенное подтверждение
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Куда едем</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Город или страна"
              />
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">Когда</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Выберите дату"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="aviasales-orange-button text-white font-semibold py-3 px-8 rounded-md transition-colors">
              Найти экскурсии
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6 stapel-bold">Популярные активности</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/bangkok.jpg"
                alt="Bangkok Activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-gray-500">Бангкок</span>
              <h3 className="font-semibold text-lg mt-1">Храм Изумрудного Будды и Королевский дворец</h3>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">4.85 (456 отзывов)</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600 text-sm">2.5 часа</span>
                <span className="font-bold">1 450 ₽</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/male.jpg"
                alt="Maldives Activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-gray-500">Мальдивы</span>
              <h3 className="font-semibold text-lg mt-1">Снорклинг-тур к рифам с морскими черепахами</h3>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">4.92 (328 отзывов)</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600 text-sm">4 часа</span>
                <span className="font-bold">3 600 ₽</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/colombo.jpg"
                alt="Colombo Activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-gray-500">Коломбо</span>
              <h3 className="font-semibold text-lg mt-1">Обзорная экскурсия по городу с местным гидом</h3>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">4.78 (215 отзывов)</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600 text-sm">6 часов</span>
                <span className="font-bold">2 200 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
