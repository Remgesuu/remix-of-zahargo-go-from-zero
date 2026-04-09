import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { LINKS } from "@/config/links";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate form submission - in production, replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // For now, always succeed and redirect to Telegram
    setFormState("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (formState === "success") {
    return (
      <section id="apply" className="py-24 lg:py-32 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative z-10 max-w-xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[hsl(var(--card))] rounded-xl p-10"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Отлично!
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-8">
              Теперь напишите в Telegram, чтобы обсудить детали и записаться на бесплатную консультацию.
            </p>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в Telegram
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-headline text-[hsl(var(--foreground))] mb-6 text-balance">
              Начните путь в{" "}
              <span className="text-primary">Go-разработке</span>
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами для бесплатной консультации. 
              Обсудим ваши цели и подберём оптимальный формат обучения.
            </p>

            <ul className="space-y-4">
              {[
                "Бесплатная консультация 30 минут",
                "Персональный план обучения",
                "Ответы на все вопросы",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[hsl(var(--card))] rounded-xl p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--dark-border))] rounded-lg text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Как вас зовут?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--dark-border))] rounded-lg text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="background"
                    className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2"
                  >
                    Ваш опыт
                  </label>
                  <select
                    id="background"
                    name="background"
                    required
                    value={formData.background}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--dark-border))] rounded-lg text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Выберите вариант</option>
                    <option value="no-experience">Нет опыта в IT</option>
                    <option value="other-it">Работаю в IT (не разработчик)</option>
                    <option value="other-lang">Разработчик на другом языке</option>
                    <option value="student">Студент / учусь программированию</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-full font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {formState === "submitting" ? (
                  "Отправляем..."
                ) : (
                  <>
                    Записаться на консультацию
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
                Или{" "}
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  напишите напрямую в Telegram
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
