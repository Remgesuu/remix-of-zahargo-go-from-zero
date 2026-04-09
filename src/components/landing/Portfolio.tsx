import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Telegram Bot",
    description: "Полноценный бот с webhook, обработкой команд, FSM и интеграцией с базой данных",
    tags: ["API", "Webhooks", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Web3 & Blockchain",
    description: "Сервис для работы с Ethereum: подключение к ноде, транзакции, смарт-контракты",
    tags: ["Ethereum", "JSON-RPC", "Contracts"],
  },
  {
    number: "03",
    title: "AI Service",
    description: "Backend для работы с LLM: промпты, стриминг, RAG и интеграция с OpenAI/Anthropic",
    tags: ["LLM", "Streaming", "RAG"],
  },
  {
    number: "04",
    title: "Payment System",
    description: "Платежный сервис с idempotency, управлением балансами и транзакциями",
    tags: ["Финтех", "Транзакции", "Security"],
  },
  {
    number: "05",
    title: "Task Manager",
    description: "Mini Jira с проектами, задачами, статусами и уведомлениями",
    tags: ["REST API", "Auth", "Realtime"],
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif text-headline text-foreground mb-4 text-balance">
              <span className="text-primary">5 проектов</span> в портфолио
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Каждый проект — это реальный production-ready сервис, 
              который можно показать на собеседовании.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative bg-card border border-border rounded-lg p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 ${
                index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Number */}
              <span className="absolute top-6 right-6 lg:top-8 lg:right-8 font-serif text-5xl lg:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                {project.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
