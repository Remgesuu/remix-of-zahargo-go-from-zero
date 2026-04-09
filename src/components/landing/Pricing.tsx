import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { LINKS } from "@/config/links";

const plans = [
  {
    name: "Индивидуально",
    price: "11 000",
    totalPrice: "396 000",
    period: "мес",
    duration: "36 месяцев",
    description: "Всё необходимое для старта в Go-разработке",
    features: [
      "Индивидуальный ментор",
      "Чат и онлайн-звонки",
      "Финальный проект — реальный SaaS",
      "Доступ в закрытое сообщество",
      "Код-ревью каждой задачи",
    ],
    highlighted: false,
  },
  {
    name: "VIP",
    price: "17 000",
    totalPrice: "612 000",
    period: "мес",
    duration: "36 месяцев",
    description: "Для тех, кто хочет гарантий трудоустройства",
    features: [
      "Все опции базового тарифа",
      "Модуль «Подготовка к собеседованию»",
      "Карьерный куратор до трудоустройства",
      "Гарантия возврата, если не найдёте работу",
      "Помощь с резюме и LinkedIn",
    ],
    highlighted: true,
    badge: "Популярный",
    guaranteeTerms: "При выполнении всех заданий и активном поиске работы в течение 6 месяцев после окончания программы",
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 lg:py-32 section-dark relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-headline text-[hsl(var(--foreground))] mb-4">
            Тарифы
          </h2>
          <p className="text-body-lg text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            Выберите формат обучения, который подходит именно вам
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-xl p-8 lg:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] shadow-2xl shadow-primary/10 scale-[1.02] lg:scale-105"
                  : "bg-[hsl(var(--card))] text-[hsl(var(--foreground))] border border-[hsl(var(--dark-border))] hover:border-primary/30 hover:-translate-y-1"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${
                plan.highlighted ? "text-[hsl(var(--background))]/70" : "text-[hsl(var(--muted-foreground))]"
              }`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.highlighted ? "text-primary" : "text-primary"
                  }`}>
                    ₽
                  </span>
                  <span className={`text-sm ml-1 ${
                    plan.highlighted ? "text-[hsl(var(--background))]/60" : "text-[hsl(var(--muted-foreground))]"
                  }`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-primary" : "text-primary"
                    }`} />
                    <span className={
                      plan.highlighted ? "text-[hsl(var(--background))]/90" : "text-[hsl(var(--muted-foreground))]"
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--foreground))]/90"
                }`}
              >
                Записаться
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Expensive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
            Меня часто спрашивают:
          </p>
          <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[hsl(var(--foreground))] mb-6">
            {'"'}А почему у вас обучение такое дорогое?{'"'}
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            В отличие от остальных школ мы не продаём просто лекции. 
            В стоимость включены: проверки домашних заданий, стажировка 
            со специалистами и работа над боевыми проектами. 
            Мы единственные, кто готов на это ради качественного обучения.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
