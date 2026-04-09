import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Только практика",
    description:
      "Никаких лекций и абстрактных примеров. Пишете реальный код с первого дня. Каждое задание — шаг к готовому сервису.",
  },
  {
    number: "02",
    title: "Индивидуальный подход",
    description:
      "Персональный ментор адаптирует программу под ваш уровень и темп. Регулярные созвоны и код-ревью каждой задачи.",
  },
  {
    number: "03",
    title: "5 сервисов в портфолио",
    description:
      "Telegram-бот, платежная система, Web3 сервис, AI интеграция, Task Manager. Реальные проекты для резюме.",
  },
];

export function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-headline text-[hsl(var(--foreground))] mb-6 text-balance">
            Почему это{" "}
            <span className="text-primary">работает</span>
          </h2>
          <p className="text-body-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Наша программа — это не курс с видеолекциями. 
            Это практическое обучение, где ваш код будет идеальным и рабочим.
          </p>
        </motion.div>

        {/* Value Cards - Large numbered list */}
        <div className="space-y-0">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t border-[hsl(var(--dark-border))] py-10 lg:py-14"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
                {/* Number */}
                <span className="font-serif text-6xl lg:text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500 lg:w-32 shrink-0">
                  {value.number}
                </span>
                
                {/* Content */}
                <div className="flex-1 lg:pt-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[hsl(var(--foreground))] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-xl">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
