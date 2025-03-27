import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-600 stapel-bold">404</h1>
          <h2 className="text-3xl font-bold mt-2 stapel-bold">Страница не найдена</h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Похоже, вы пытаетесь найти билет на рейс, который не существует.
            Возможно, ссылка устарела или была введена с ошибкой.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/"
              className="aviasales-blue-bg text-white px-6 py-3 rounded-md font-medium inline-block hover:bg-blue-700 transition-colors"
            >
              Вернуться на главную
            </Link>

            <div className="mt-4">
              <Link
                href="/hotels"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Поискать отели
              </Link>
              <span className="mx-2 text-gray-400">•</span>
              <Link
                href="/guides"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Посмотреть экскурсии
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
