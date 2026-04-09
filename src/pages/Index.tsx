import { motion } from "framer-motion";
import { Code, Rocket, Users, TrendingUp, Bot, Blocks, Brain, CreditCard, ListTodo, Check, Crown, MessageCircleQuestion, BookOpen, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Bot, title: "Телеграм бот" },
  { icon: Blocks, title: "Работа с Web3 и блокчейном Ethereum" },
  { icon: Brain, title: "AI сервис" },
  { icon: CreditCard, title: "Платежный сервис" },
  { icon: ListTodo, title: "Task Manager (mini Jira)" },
];

const salaries = [
  { level: "Junior", salary: "100k ₽", width: "33%" },
  { level: "Middle", salary: "300k ₽", width: "75%" },
  { level: "Senior", salary: "400k+ ₽", width: "100%" },
];

const TG_LINK = "https://t.me/zaharich777";

const faqs = [
  {
    q: "Как работает рассрочка?",
    a: "Наши партнёры дадут вам рассрочку до 36 месяцев на курс. В месяц получается примерно от 11 000 ₽.",
  },
  {
    q: "Нужно ли знание английского языка?",
    a: "Нет, специальные знания английского языка не нужны. Мы сделали обучение таким, чтобы его смог пройти любой человек, независимо от знаний английского языка.",
  },
  {
    q: "Вы берёте всех на обучение?",
    a: "Да! Вам не нужно иметь диплом о высшем образовании, знать английский или математику. Мы всему вас научим.",
  },
  {
    q: "А если уже есть работа в IT?",
    a: "Тогда ты уже многое знаешь и можешь выбрать темы, где хочешь подтянуть скилы. Мы поможем тебе стать более крутым специалистом!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold font-mono text-primary">
            Zahar<span className="text-foreground">Go</span>
          </span>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition"
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(160_100%_45%/0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-block font-mono text-primary text-sm tracking-wider uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              Go · Golang · Backend
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Научим делать Go сервисы{" "}
            <span className="text-primary">с&nbsp;нуля до production</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Индивидуальное обучение создания Golang сервисов. Всё обучение на практике создания сервисов, которые будут приносить вам деньги
          </motion.p>
          <motion.a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition animate-glow-pulse"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <Rocket className="w-5 h-5" />
            Записаться на менторство
          </motion.a>
        </div>
      </section>

      {/* Facts */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Факты про обучение</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Наша программа — это практическое занятие, а не лекции. Твой код будет идеальным и стройным
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Code, title: "Только практика", desc: "Никаких лекций — пишете реальный код с первого дня" },
              { icon: Users, title: "Индивидуально", desc: "Персональный ментор адаптирует программу под вас" },
              { icon: TrendingUp, title: "5 сервисов", desc: "Готовое портфолио с реальными проектами" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Сделаете <span className="text-primary">5 разных сервисов</span> для портфолио
          </motion.h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 3).map((s, i) => (
                <motion.div
                  key={s.title}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{s.title}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.slice(3).map((s, i) => (
                <motion.div
                  key={s.title}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{s.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Программа профессии */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Программа <span className="text-primary">профессии</span>
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Модуль 1 */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Модуль 1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Основы Golang — от «Hello, World!» до первого backend-сервиса</h3>
              <p className="text-muted-foreground text-sm mb-6">
                32 практико-ориентированные домашки + тесты после каждого блока = системный рост от новичка до разработчика, который уже пишет реальные сервисы
              </p>
              <p className="text-sm font-semibold mb-4">Что вы освоите:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Основы программирования на Go", desc: "Переменные, типы данных, указатели, работа с вводом/выводом (fmt, bufio), конвертация типов. Практика: CLI-утилиты и первые программы" },
                  { title: "Управление потоком выполнения", desc: "if, switch (в стиле Go), for как единственный цикл, логические операции. Практика: реализация бизнес-логики" },
                  { title: "Работа с коллекциями и строками", desc: "Слайсы и массивы, map (хэш-таблицы), строки и руны (UTF-8). Практика: обработка данных и пользовательского ввода" },
                  { title: "Функции и базовая архитектура", desc: "Множественные возвращаемые значения, error-first подход, замыкания. Практика: декомпозиция кода и чистые функции" },
                  { title: "Введение в конкурентность", desc: "Горутины, каналы (channels), sync.Mutex. Практика: простые параллельные задачи" },
                  { title: "Работа с файлами и системой", desc: "Чтение/запись файлов, работа с JSON, обработка ошибок (idiomatic Go). Практика: мини-сервис с хранением данных" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-semibold mb-3">Результат модуля — ты уже умеешь:</p>
                <ul className="space-y-2">
                  {[
                    "Писать чистый Go-код",
                    "Понимать базовую конкурентность",
                    "Работать с данными и файлами",
                    "Готов переходить к backend-разработке",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Модуль 2 */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Модуль 2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Golang Pro — от разработчика к инженеру</h3>
              <p className="text-muted-foreground text-sm mb-6">
                25 реальных домашек + тесты после каждого блока = переход от «пишу код» к «проектирую системы»
              </p>
              <p className="text-sm font-semibold mb-4">Что вы освоите:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Продвинутые структуры данных", desc: "Реализация Stack, Queue, Set, LRU-cache. Когда использовать slice vs map vs custom struct. Практика: свои структуры, как в реальных системах" },
                  { title: "Архитектура и проектирование", desc: "Разделение на слои (handler / service / repository), Dependency Injection, интерфейсы как основа архитектуры. Практика: проектирование backend-сервиса с нуля" },
                  { title: "Go как ООП (но правильно)", desc: "Интерфейсы вместо наследования, композиция вместо иерархий, полиморфизм в Go. Практика: гибкие системы, которые легко расширять" },
                  { title: "Продвинутая конкурентность", desc: "Worker pool, Fan-in / Fan-out, Context и управление жизненным циклом. Практика: высоконагруженные обработчики задач" },
                  { title: "Работа с сетью и API", desc: "HTTP-серверы (net/http), REST API, Middleware. Практика: полноценный backend-сервис" },
                  { title: "Работа с БД", desc: "PostgreSQL, SQL + базовый ORM (или sqlx), транзакции. Практика: CRUD + реальный сервис с базой" },
                  { title: "Тестирование и качество кода", desc: "Unit-тесты, моки и интерфейсы, интеграционные тесты. Практика: покрытие кода тестами" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-semibold mb-3">Результат модуля — ты уже умеешь:</p>
                <ul className="space-y-2">
                  {[
                    "Проектировать backend-сервисы",
                    "Понимать архитектуру как в реальной работе",
                    "Писать конкурентные и масштабируемые системы",
                    "Готов к собеседованиям и работе уровня Junior+/Middle",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Модуль 3 — Telegram Bot */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Модуль 3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram-бот на Golang — от идеи до продакшена</h3>
              <p className="text-muted-foreground text-sm mb-6">
                30+ практических заданий + финальный проект = полноценный бот, которого не стыдно показать работодателю
              </p>
              <p className="text-sm font-semibold mb-4">Что вы освоите:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Основы Telegram-ботов", desc: "API Telegram, webhook vs polling, регистрация бота, первые команды: /start, /help" },
                  { title: "Архитектура и структура проекта", desc: "Разделение на слои (handlers, services, repository), конфиги, ENV, Dependency Injection" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-semibold mb-3">Финальный результат — готовый Telegram-бот, который:</p>
                <ul className="space-y-2">
                  {[
                    "Работает в продакшене",
                    "Обрабатывает пользователей и данные",
                    "Имеет чистую архитектуру",
                    "Готов к масштабированию",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Module 4 */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Модуль 4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Платежная система на Golang — от транзакции до отказоустойчивого сервиса</h3>
              <p className="text-muted-foreground text-sm mb-6">
                backend, который выглядит как настоящий финтех-продукт
              </p>
              <p className="text-sm font-semibold mb-4">Что вы освоите:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Основы платежных систем", desc: "Жизненный цикл платежа, idempotency, статусы транзакций, работа с внешними API (mock/sandbox)" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-semibold mb-3">Финальный результат — полноценная платежная система, которая:</p>
                <ul className="space-y-2">
                  {[
                    "Принимает и обрабатывает платежи",
                    "Управляет балансами пользователей",
                    "Гарантирует консистентность данных при нагрузке",
                    "Устойчива к ошибкам и повторным запросам",
                    "Имеет архитектуру уровня production",
                    "Готова к интеграции с внешними сервисами",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Module 5 */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Blocks className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Модуль 5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Web3 и блокчейн Ethereum — от запроса к ноде до смарт-контрактов</h3>
              <p className="text-muted-foreground text-sm mb-6">
                30+ практических заданий + финальный проект = backend, который умеет работать с блокчейном как настоящий Web3-сервис
              </p>
              <p className="text-sm font-semibold mb-4">Что вы освоите:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Основы блокчейна", desc: "Блоки, транзакции, газ, ноды, RPC/JSON-RPC, mainnet vs testnet" },
                  { title: "Работа с Ethereum через Go", desc: "Подключение к ноде (Infura/Alchemy), отправка транзакций, приватные ключи, отслеживание статусов" },
                  { title: "Смарт-контракты", desc: "Вызов методов (read/write), ABI, события (events), интеграция backend ↔ контракт" },
                  { title: "Архитектура Web3 backend-сервиса", desc: "Слои (handlers, services, blockchain layer), индексирование, event listeners, кэширование" },
                  { title: "Безопасность Web3", desc: "Приватные ключи, replay-атаки, проверка транзакций, ограничения блокчейна" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-semibold mb-3">Финальный результат — Web3-сервис, который:</p>
                <ul className="space-y-2">
                  {[
                    "Подключается к сети Ethereum и работает с нодой",
                    "Отправляет и отслеживает транзакции",
                    "Взаимодействует со смарт-контрактом",
                    "Обрабатывает события из блокчейна",
                    "Имеет продуманную backend-архитектуру",
                    "Выглядит как реальный проект уровня Web3-компании",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Курс ведут только <span className="text-primary">топы</span> своего дела
            </h2>
          </motion.div>
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-primary font-mono">
              ЗЖ
            </div>
            <h3 className="text-xl font-bold mb-3">Захар Жихарев</h3>
            <p className="text-muted-foreground leading-relaxed">
              Если вы пользовались бонусами в Макдональдсе, то вы уже заочно знакомы. Именно он разрабатывал этот сервис
            </p>
          </motion.div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Заработок растёт вместе с опытом</h2>
          </motion.div>
          <div className="space-y-6">
            {salaries.map((s, i) => (
              <motion.div
                key={s.level}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>{s.level}</span>
                  <span className="text-primary">{s.salary}</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: s.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий формат обучения</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h3 className="text-2xl font-bold mb-2">Индивидуально</h3>
              <div className="mb-6">
                <span className="text-3xl font-black text-primary">11 000 ₽</span>
                <span className="text-muted-foreground text-sm"> / мес на 3 года</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Индивидуальный ментор с чатом и онлайн-звонками",
                  "Финальный проект — реальный SaaS в продакшене",
                  "Доступ в закрытое сообщество",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold hover:brightness-110 transition animate-glow-pulse"
              >
                Записаться
              </a>
            </motion.div>

            {/* VIP */}
            <motion.div
              className="bg-card border-2 border-primary/40 rounded-2xl p-8 flex flex-col relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                <Crown className="w-3.5 h-3.5" /> Популярный
              </div>
              <h3 className="text-2xl font-bold mb-2">VIP</h3>
              <div className="mb-6">
                <span className="text-3xl font-black text-primary">17 000 ₽</span>
                <span className="text-muted-foreground text-sm"> / мес на 3 года</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Все опции базового тарифа",
                  "Модуль: «Подготовка к собеседованию»",
                  "Индивидуальный карьерный куратор, который будет с тобой пока не найдёт тебе работу",
                  "Гарантия возврата средств если ты не найдёшь работу",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold hover:brightness-110 transition animate-glow-pulse"
              >
                Записаться
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why expensive */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 sm:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-start gap-4 mb-4">
              <MessageCircleQuestion className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground text-sm mb-2">Меня часто спрашивают:</p>
                <h3 className="text-xl font-bold">«А почему у вас обучение такое дорогое?»</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              «В отличие от остальных школ мы не продаём просто лекции и абстрактное „обучение". В стоимость курса включены: проверки домашних задач, стажировка со специалистами нашей студии и работа над боевыми проектами нам в убыток. Да, работать со студентами для студии — это убытки. Но мы единственные, кто готов на это пойти ради качественного обучения.»
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ответы на частые вопросы</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-6">
        <motion.div
          className="container mx-auto max-w-2xl text-center bg-card border border-primary/20 rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_100%_45%/0.06),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Запишитесь на менторство и начните свой путь в Go-разработке
            </p>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition animate-glow-pulse"
            >
              <Rocket className="w-5 h-5" />
              Записаться на менторство
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center text-muted-foreground text-sm">
        <span className="font-mono text-primary">ZaharGo</span> © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
