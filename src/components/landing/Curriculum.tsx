import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Основы Golang",
    subtitle: "От «Hello, World!» до первого backend-сервиса",
    tasks: "32 практических задания",
    topics: [
      "Переменные, типы данных, указатели",
      "Управление потоком: if, switch, for",
      "Слайсы, map, строки и руны",
      "Функции и error-first подход",
      "Горутины, каналы, sync.Mutex",
      "Работа с файлами и JSON",
    ],
    outcomes: [
      "Писать чистый Go-код",
      "Понимать базовую конкурентность",
      "Работать с данными и файлами",
    ],
  },
  {
    number: "02",
    title: "Golang Pro",
    subtitle: "От разработчика к инженеру",
    tasks: "25 реальных заданий",
    topics: [
      "Продвинутые структуры данных",
      "Архитектура и DI",
      "Интерфейсы и композиция",
      "Worker pool, Fan-in/Fan-out",
      "REST API и Middleware",
      "PostgreSQL и транзакции",
      "Unit и интеграционные тесты",
    ],
    outcomes: [
      "Проектировать backend-сервисы",
      "Понимать production архитектуру",
      "Писать масштабируемые системы",
    ],
  },
  {
    number: "03",
    title: "Telegram Bot",
    subtitle: "От идеи до продакшена",
    tasks: "30+ практических заданий",
    topics: [
      "API Telegram, webhook vs polling",
      "Архитектура handlers/services/repository",
      "FSM и состояния диалогов",
      "Интеграция с базой данных",
    ],
    outcomes: [
      "Работающий бот в продакшене",
      "Чистая архитектура кода",
      "Готов к масштабированию",
    ],
  },
  {
    number: "04",
    title: "Платежная система",
    subtitle: "От транзакции до отказоустойчивого сервиса",
    tasks: "Финтех-уровень",
    topics: [
      "Жизненный цикл платежа",
      "Idempotency и статусы транзакций",
      "Управление балансами",
      "Безопасность и консистентность",
    ],
    outcomes: [
      "Принимать и обрабатывать платежи",
      "Гарантировать консистентность",
      "Архитектура production-уровня",
    ],
  },
  {
    number: "05",
    title: "Web3 & Blockchain",
    subtitle: "От запроса к ноде до смарт-контрактов",
    tasks: "30+ практических заданий",
    topics: [
      "Блоки, транзакции, газ, RPC",
      "Подключение к Ethereum через Go",
      "Смарт-контракты и ABI",
      "Event listeners и индексирование",
      "Безопасность Web3",
    ],
    outcomes: [
      "Работать с нодой Ethereum",
      "Отправлять транзакции",
      "Интегрировать смарт-контракты",
    ],
  },
];

function ModuleCard({ module, index, isOpen, onToggle }: { 
  module: typeof modules[0]; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-start gap-6 text-left group"
      >
        {/* Module Number */}
        <span className="font-serif text-4xl lg:text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors shrink-0 w-16 lg:w-20">
          {module.number}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-muted-foreground">
                {module.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:block text-sm text-muted-foreground">
                {module.tasks}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-[88px] lg:pl-[104px] pr-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Topics */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Что изучите
              </h4>
              <ul className="space-y-2">
                {module.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mt-2.5 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="lg:border-l lg:border-border lg:pl-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Результат
              </h4>
              <ul className="space-y-3">
                {module.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="program" className="py-24 lg:py-32 section-dark relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-headline text-[hsl(var(--foreground))] mb-4 text-balance">
            Программа{" "}
            <span className="text-primary">профессии</span>
          </h2>
          <p className="text-body-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
            5 модулей, 120+ практических заданий. Каждый модуль — 
            это шаг от новичка к профессиональному Go-разработчику.
          </p>
        </motion.div>

        {/* Modules Accordion */}
        <div className="border-t border-[hsl(var(--dark-border))]">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.number}
              module={module}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
