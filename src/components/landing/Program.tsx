import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useId } from "react";
import { ChevronDown, Check, Code, Briefcase, Rocket } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Основы Golang",
    subtitle: "От «Hello, World!» до первого backend-сервиса",
    tasks: "32 практических задания",
    icon: Code,
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
    project: null,
  },
  {
    number: "02",
    title: "Golang Pro",
    subtitle: "От разработчика к инженеру",
    tasks: "25 реальных заданий",
    icon: Briefcase,
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
    project: null,
  },
  {
    number: "03",
    title: "Telegram Bot",
    subtitle: "От идеи до продакшена",
    tasks: "30+ практических заданий",
    icon: Rocket,
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
    project: {
      title: "Проект: Telegram Bot",
      description: "Полноценный бот с webhook, обработкой команд, FSM и интеграцией с базой данных",
      tags: ["API", "Webhooks", "PostgreSQL"],
    },
  },
  {
    number: "04",
    title: "Платежная система",
    subtitle: "От транзакции до отказоустойчивого сервиса",
    tasks: "Финтех-уровень",
    icon: Briefcase,
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
    project: {
      title: "Проект: Payment System",
      description: "Платежный сервис с idempotency, управлением балансами и транзакциями",
      tags: ["Финтех", "Транзакции", "Security"],
    },
  },
  {
    number: "05",
    title: "Web3 & Blockchain",
    subtitle: "От запроса к ноде до смарт-контрактов",
    tasks: "30+ практических заданий",
    icon: Rocket,
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
    project: {
      title: "Проект: Web3 Service",
      description: "Сервис для работы с Ethereum: подключение к ноде, транзакции, смарт-контракты",
      tags: ["Ethereum", "JSON-RPC", "Contracts"],
    },
  },
  {
    number: "06",
    title: "AI Service",
    subtitle: "Интеграция с LLM и современный AI backend",
    tasks: "20+ практических заданий",
    icon: Rocket,
    topics: [
      "Работа с OpenAI/Anthropic API",
      "Prompt engineering",
      "Стриминг ответов",
      "RAG и векторные базы данных",
    ],
    outcomes: [
      "Интегрировать LLM в сервисы",
      "Оптимизировать промпты",
      "Строить RAG-системы",
    ],
    project: {
      title: "Проект: AI Service",
      description: "Backend для работы с LLM: промпты, стриминг, RAG и интеграция с OpenAI/Anthropic",
      tags: ["LLM", "Streaming", "RAG"],
    },
  },
  {
    number: "07",
    title: "Финальный проект",
    subtitle: "Task Manager от архитектуры до деплоя",
    tasks: "Production-ready SaaS",
    icon: Briefcase,
    topics: [
      "Архитектура микросервиса",
      "REST API и авторизация",
      "WebSocket для realtime",
      "Docker и CI/CD",
      "Документация и тесты",
    ],
    outcomes: [
      "Готовый SaaS в портфолио",
      "Опыт full-cycle разработки",
      "Готовность к собеседованиям",
    ],
    project: {
      title: "Проект: Task Manager",
      description: "Mini Jira с проектами, задачами, статусами и уведомлениями",
      tags: ["REST API", "Auth", "Realtime"],
    },
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
  const uniqueId = useId();
  const panelId = `module-panel-${uniqueId}`;
  const buttonId = `module-button-${uniqueId}`;
  const Icon = module.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-[hsl(var(--dark-border))] last:border-b-0"
    >
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full py-6 lg:py-8 flex items-start gap-4 lg:gap-6 text-left group focus-visible:outline-none"
        >
          {/* Module Number */}
          <span className="font-serif text-3xl lg:text-4xl font-bold text-primary group-hover:text-primary/80 group-focus-visible:text-primary/80 transition-colors shrink-0 w-12 lg:w-16">
            {module.number}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-serif text-lg lg:text-xl font-semibold text-[hsl(var(--foreground))] group-hover:text-primary group-focus-visible:text-primary transition-colors">
                    {module.title}
                  </span>
                  <Icon className="w-4 h-4 text-primary/50 hidden sm:block" />
                </div>
                <p className="text-sm lg:text-base text-[hsl(var(--muted-foreground))]">
                  {module.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                <span className="hidden md:block text-sm text-[hsl(var(--muted-foreground))]">
                  {module.tasks}
                </span>
                <span className="w-8 h-8 rounded-full border border-[hsl(var(--dark-border))] flex items-center justify-center group-hover:border-primary group-focus-visible:border-primary group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[hsl(var(--background))] transition-colors">
                  <ChevronDown
                    className={`w-4 h-4 text-[hsl(var(--muted-foreground))] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
        </button>
      </h3>

      {/* Expandable Content */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-16 lg:pl-[88px] pr-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Topics */}
            <div>
              <h4 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider mb-4">
                Что изучите
              </h4>
              <ul className="space-y-2">
                {module.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 text-[hsl(var(--muted-foreground))]"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mt-2.5 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="lg:border-l lg:border-[hsl(var(--dark-border))] lg:pl-8">
              <h4 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider mb-4">
                Результат
              </h4>
              <ul className="space-y-3">
                {module.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-3 text-[hsl(var(--foreground))]"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              {/* Project Card (if exists) */}
              {module.project && (
                <div className="mt-6 p-4 bg-[hsl(var(--card))] rounded-lg border border-[hsl(var(--dark-border))]">
                  <h5 className="font-semibold text-[hsl(var(--foreground))] mb-2">
                    {module.project.title}
                  </h5>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                    {module.project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {module.project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Program() {
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
          className="mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] tracking-wide uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Путь к профессии
          </span>
          <h2 className="font-serif text-headline text-[hsl(var(--foreground))] mb-4 text-balance">
            <span className="text-primary">7 модулей</span>, 5 проектов в портфолио
          </h2>
          <p className="text-body-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
            Структурированная программа от основ до production-ready сервисов. 
            Каждый модуль — это шаг к работе мечты.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-16"
        >
          <div className="text-center p-4 lg:p-6 bg-[hsl(var(--card))] rounded-lg">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-[hsl(var(--foreground))]">150+</span>
            <p className="text-xs lg:text-sm text-[hsl(var(--muted-foreground))] mt-1">практических заданий</p>
          </div>
          <div className="text-center p-4 lg:p-6 bg-[hsl(var(--card))] rounded-lg">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-primary">5</span>
            <p className="text-xs lg:text-sm text-[hsl(var(--muted-foreground))] mt-1">проектов в портфолио</p>
          </div>
          <div className="text-center p-4 lg:p-6 bg-[hsl(var(--card))] rounded-lg">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-primary">6-9</span>
            <p className="text-xs lg:text-sm text-[hsl(var(--muted-foreground))] mt-1">месяцев продуктивной работы</p>
          </div>
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
