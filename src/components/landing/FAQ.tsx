import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Как работает рассрочка?",
    answer:
      "Наши партнёры дадут вам рассрочку до 36 месяцев на курс. В месяц получается примерно от 11 000 ₽. Без процентов и скрытых платежей.",
  },
  {
    question: "Нужно ли знание английского языка?",
    answer:
      "Нет, специальные знания английского языка не нужны. Мы сделали обучение таким, чтобы его смог пройти любой человек, независимо от знаний английского.",
  },
  {
    question: "Вы берёте всех на обучение?",
    answer:
      "Да! Вам не нужно иметь диплом о высшем образовании, знать английский или математику. Мы всему вас научим с нуля.",
  },
  {
    question: "А если уже есть работа в IT?",
    answer:
      "Тогда ты уже многое знаешь и можешь выбрать темы, где хочешь подтянуть скилы. Мы поможем тебе стать более крутым специалистом!",
  },
  {
    question: "Сколько времени нужно уделять обучению?",
    answer:
      "Рекомендуем выделять минимум 10-15 часов в неделю. Чем больше практики — тем быстрее результат. Программа гибкая и адаптируется под ваш график.",
  },
  {
    question: "Что если мне не подойдёт?",
    answer:
      "В VIP-тарифе есть гарантия возврата средств, если вы не найдёте работу. В любом случае, первые занятия помогут понять, подходит ли вам формат.",
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
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-foreground pr-8 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      <motion.div
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
