import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Mentor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mentor" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 origin-top-right" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">
              <span className="w-8 h-px bg-primary" />
              Ментор
            </span>
            
            <h2 className="font-serif text-headline text-foreground mb-8 text-balance">
              Курс ведёт{" "}
              <span className="text-primary">практик</span>,{" "}
              а не теоретик
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="text-foreground font-semibold">Захар Жихарев</span> — 
                Go-разработчик с опытом в крупных продуктовых компаниях.
              </p>
              <p>
                Если вы пользовались бонусами в Макдональдсе, 
                то вы уже заочно знакомы. Именно он разрабатывал этот сервис.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-serif text-4xl font-bold text-foreground">5+</span>
                  <p className="text-sm text-muted-foreground mt-1">лет в Go-разработке</p>
                </div>
                <div>
                  <span className="font-serif text-4xl font-bold text-foreground">50+</span>
                  <p className="text-sm text-muted-foreground mt-1">выпускников</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-card to-muted rounded-lg overflow-hidden relative">
              {/* Initials as placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[160px] lg:text-[200px] font-bold text-primary/10">
                  ЗЖ
                </span>
              </div>
              
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/90 to-transparent">
                <blockquote className="font-serif text-lg lg:text-xl text-background italic">
                  {'"'}Моя цель — чтобы каждый студент получил работу{'"'}
                </blockquote>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
