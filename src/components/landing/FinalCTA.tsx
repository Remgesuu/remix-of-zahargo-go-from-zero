import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/config/links";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-display text-[hsl(var(--foreground))] mb-6 text-balance">
            Готовы{" "}
            <span className="text-primary">начать</span>?
          </h2>
          
          <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-xl mx-auto leading-relaxed">
            Запишитесь на менторство и начните свой путь 
            в Go-разработке уже сегодня
          </p>

          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
          >
            Записаться на менторство
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Trust note */}
          <p className="mt-8 text-sm text-[hsl(var(--muted-foreground))]">
            Бесплатная консультация — ответим на все вопросы
          </p>
        </motion.div>
      </div>
    </section>
  );
}
