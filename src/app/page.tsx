import { Navbar } from "@/components/Navbar";
import { SearchForm } from "@/components/SearchForm";
import { DestinationCards } from "@/components/DestinationCards";
import { WeekendOffers } from "@/components/WeekendOffers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Navbar />

      <div className="aviasales-blue-bg py-16">
        <h1 className="text-center text-white text-4xl font-bold stapel-bold mb-2">
          Тут поиск дешёвых авиабилетов
        </h1>
        <p className="text-center text-white/80">
          Авиабилеты по выгодным ценам, акции и распродажи
        </p>
      </div>

      <SearchForm />
      <DestinationCards />
      <WeekendOffers />
      <Footer />
    </main>
  );
}
