import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TG_LINK = "https://t.me/zaharich777";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 grain" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 lg:mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground tracking-wide uppercase">
              <span className="w-8 h-px bg-primary" />
              Go / Golang / Backend
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display text-foreground mb-8 text-balance"
          >
            Go-разработка.{" "}
            <span className="text-primary">С нуля до продакшена</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Индивидуальное менторство по созданию Golang сервисов. 
            Только практика — 5 реальных проектов в портфолио. 
            Код, который приносит деньги.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground/90 transition-all duration-300"
            >
              Записаться на менторство
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 text-foreground font-medium px-4 py-4 hover:text-primary transition-colors"
            >
              Смотреть программу
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 lg:mt-24 flex flex-wrap items-center gap-8 lg:gap-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground">5</span>
              <span className="max-w-[80px] leading-tight">реальных проектов</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground">57</span>
              <span className="max-w-[100px] leading-tight">практических заданий</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl lg:text-4xl font-bold text-primary">1:1</span>
              <span className="max-w-[100px] leading-tight">персональный ментор</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
