"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Авиакомпании</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/airlines/victory" className="text-gray-600 hover:text-blue-600 text-sm">
                  Победа
                </Link>
              </li>
              <li>
                <Link href="/airlines/air-cairo" className="text-gray-600 hover:text-blue-600 text-sm">
                  AIR CAIRO
                </Link>
              </li>
              <li>
                <Link href="/airlines/rossiya-airlines" className="text-gray-600 hover:text-blue-600 text-sm">
                  Россия
                </Link>
              </li>
              <li>
                <Link href="/airlines/azimut" className="text-gray-600 hover:text-blue-600 text-sm">
                  Азимут
                </Link>
              </li>
              <li>
                <Link href="/airlines" className="text-gray-600 hover:text-blue-600 text-sm">
                  Ещё 5 авиакомпаний
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Направления</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/routes/mow/sochi" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва — Сочи
                </Link>
              </li>
              <li>
                <Link href="/routes/mow/kgd" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва — Калининград
                </Link>
              </li>
              <li>
                <Link href="/routes/mow/kja" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва — Красноярск
                </Link>
              </li>
              <li>
                <Link href="/routes/mow/mcx" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва — Махачкала
                </Link>
              </li>
              <li>
                <Link href="/routes/mow/led" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва — Санкт-Петербург
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Города</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cities/moskva-mow" className="text-gray-600 hover:text-blue-600 text-sm">
                  Москва
                </Link>
              </li>
              <li>
                <Link href="/cities/novosibirsk-ovb" className="text-gray-600 hover:text-blue-600 text-sm">
                  Новосибирск
                </Link>
              </li>
              <li>
                <Link href="/cities/sankt-peterburg-led" className="text-gray-600 hover:text-blue-600 text-sm">
                  Санкт-Петербург
                </Link>
              </li>
              <li>
                <Link href="/cities/tumen-tjm" className="text-gray-600 hover:text-blue-600 text-sm">
                  Тюмень
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-gray-600 hover:text-blue-600 text-sm">
                  Ещё 5 городов
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Аэропорты</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/airports/sheremetevo" className="text-gray-600 hover:text-blue-600 text-sm">
                  Шереметьево
                </Link>
              </li>
              <li>
                <Link href="/airports/vnukovo" className="text-gray-600 hover:text-blue-600 text-sm">
                  Внуково
                </Link>
              </li>
              <li>
                <Link href="/airports/kazan" className="text-gray-600 hover:text-blue-600 text-sm">
                  Казань
                </Link>
              </li>
              <li>
                <Link href="/airports/domodedovo" className="text-gray-600 hover:text-blue-600 text-sm">
                  Домодедово
                </Link>
              </li>
              <li>
                <Link href="/airports" className="text-gray-600 hover:text-blue-600 text-sm">
                  Ещё 5 аэропортов
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-gray-700 font-semibold mb-4">Помощь и советы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/faq/ne-prishel-bilet" className="text-gray-600 hover:text-blue-600 text-sm">
              Не пришёл билет
            </Link>
            <Link href="/faq/vozvrat-ili-obmen-bileta" className="text-gray-600 hover:text-blue-600 text-sm">
              Возврат или обмен билета
            </Link>
            <Link href="/faq/pro-bagazh" className="text-gray-600 hover:text-blue-600 text-sm">
              Про багаж
            </Link>
            <Link href="/faq/izmenenie-pasportnyh-dannyh" className="text-gray-600 hover:text-blue-600 text-sm">
              Изменение паспортных данных
            </Link>
            <Link href="/faq/perelety-s-detmi" className="text-gray-600 hover:text-blue-600 text-sm">
              Перелёты с детьми
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
              Ещё 6 вопросов
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="inline-flex">
                <Image
                  src="/images/aviasales-logo-dark.svg"
                  alt="Авиасейлс"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
              <p className="text-gray-500 text-sm mt-2">© 2007–2025</p>

              <div className="mt-4 flex space-x-4">
                <a href="https://vk.com/aviasales" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.193c-.56 0-.817.293-.956.617 0 0-1.115 2.719-2.695 4.482-.51.513-.741.675-1.02.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.16-.806-.618-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.87 2.138v3.228c0 .707-.127.836-.407.836-.742 0-2.546-2.725-3.617-5.844-.209-.607-.42-.856-.98-.856H2.752c-.627 0-.752.293-.752.617 0 .577.742 3.443 3.456 7.229 1.807 2.583 4.352 3.986 6.671 3.986 1.391 0 1.563-.313 1.563-.853v-1.966c0-.627.133-.752.576-.752.327 0 .887.164 2.195 1.424 1.494 1.494 1.74 2.163 2.584 2.163h2.193c.627 0 .94-.313.76-.932-.198-.615-.91-1.506-1.855-2.565-.512-.604-1.279-1.256-1.51-1.559-.327-.419-.234-.605 0-.976.001 0 2.672-3.759 2.95-5.04z" />
                  </svg>
                </a>
                <a href="https://t.me/aviasales" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </a>
                <a href="https://twitter.com/aviasales" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-700 font-semibold mb-3">Об Авиасейлс</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                      О компании
                    </Link>
                  </li>
                  <li>
                    <Link href="/vacancies" className="text-gray-600 hover:text-blue-600 text-sm">
                      Вакансии
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
                      Поддержка
                    </Link>
                  </li>
                  <li>
                    <a href="https://ad.aviasales.ru/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-sm">
                      Реклама
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-700 font-semibold mb-3">Сервисы</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/hotels" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 14l.5-2.5L5 9.5M19.5 8.5L18 11h3l-1.5 2.5M9 22v-5h6v5M23 22H1V9l11-4 11 4v13z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Отели и хостелы
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.travelpayouts.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Travelpayouts
                    </a>
                  </li>
                  <li>
                    <Link href="/psgr" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v18M5 8h14M5 16h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      ПСЖР
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-4 border-t border-gray-200 text-sm text-gray-500">
            <p>Интернет-сервис для покупки авиабилетов работает с 2007 года. Мы ищем билеты по 2000+ авиакомпаниям. В 2023 году нам доверились более 25 миллионов туристов. Поиск бесплатный. Лучшие цены, надёжные партнёры!</p>

            <div className="mt-4 flex items-center justify-between">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
