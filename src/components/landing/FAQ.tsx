import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useId } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Нужен ли опыт программирования?",
    answer:
      "Нет, курс рассчитан на обучение с нуля. Мы начинаем с основ и постепенно переходим к продвинутым темам. Главное — желание учиться и готовность уделять время практике.",
  },
  {
    question: "Сколько времени нужно уделять обучению?",
    answer:
      "Рекомендуем выделять минимум 10-15 часов в неделю. Чем больше практики — тем быстрее результат. Программа гибкая и адаптируется под ваш график. Можно совмещать с основной работой.",
  },
  {
    question: "Как быстро я смогу найти работу?",
    answer:
      "При активном обучении и выполнении всех заданий большинство студентов выходят на рынок через 6-9 месяцев. Мы помогаем с подготовкой к собеседованиям и составлением резюме.",
  },
  {
    question: "Как работает рассрочка?",
    answer:
      "Наши партнёры предоставляют рассрочку до 36 месяцев. В базовом тарифе получается 11 000 ₽/мес (итого 396 000 ₽), в VIP — 17 000 ₽/мес (итого 612 000 ₽). Без скрытых платежей.",
  },
  {
    question: "Как устроена гарантия трудоустройства?",
    answer:
      "В VIP-тарифе: если вы выполнили все задания программы, активно ищете работу в течение 6 месяцев после окончания, но не получили офер — мы вернём деньги. Подробные условия обсуждаем на консультации.",
  },
  {
    question: "Чем это отличается от бесплатных курсов?",
    answer:
      "Персональный ментор, который проверяет каждую строчку кода. Реальные проекты в портфолио вместо учебных примеров. Поддержка до трудоустройства. Мы несём ответственность за ваш результат.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const uniqueId = useId();
  const panelId = `faq-panel-${uniqueId}`;
  const buttonId = `faq-button-${uniqueId}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-border"
    >
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none"
        >
          <span className="font-medium text-foreground pr-8 group-hover:text-primary group-focus-visible:text-primary transition-colors">
            {faq.question}
          </span>
          <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary group-focus-visible:border-primary group-focus-visible:text-primary group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 transition-colors">
            {isOpen ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </span>
        </button>
      </h3>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-headline text-foreground mb-4">
            Ответы на{" "}
            <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Не нашли ответ? Напишите нам в Telegram
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
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
