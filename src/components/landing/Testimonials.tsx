import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей М.",
    role: "Go-разработчик",
    company: "Финтех-стартап",
    avatar: null,
    quote: "За 8 месяцев прошёл путь от маркетолога до backend-разработчика. Ключевым было то, что ментор проверял каждую строчку кода и объяснял, как писать по-настоящему чисто.",
    before: "Маркетолог",
    after: "Backend-разработчик",
    timeline: "8 месяцев",
  },
  {
    name: "Дарья К.",
    role: "Junior Go Developer",
    company: "E-commerce",
    avatar: null,
    quote: "Начинала с нуля, боялась что не потяну. Но программа построена так, что сложность нарастает постепенно. Реальные проекты в портфолио помогли получить офер уже после 5 месяцев обучения.",
    before: "Без опыта в IT",
    after: "Junior Go Developer",
    timeline: "5 месяцев",
  },
  {
    name: "Михаил С.",
    role: "Backend Engineer",
    company: "Продуктовая компания",
    avatar: null,
    quote: "Переходил с PHP на Go. Думал, что смогу сам разобраться по документации, но менторство дало структуру и глубину, которую сам бы собирал годами. Зарплата выросла в 2 раза.",
    before: "PHP-разработчик",
    after: "Go Backend Engineer",
    timeline: "6 месяцев",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative bg-card rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-primary/20 mb-4" />

      {/* Quote */}
      <blockquote className="text-foreground leading-relaxed mb-6">
        {testimonial.quote}
      </blockquote>

      {/* Transition badge */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">
          {testimonial.before}
        </span>
        <span className="text-primary font-medium">&rarr;</span>
        <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">
          {testimonial.after}
        </span>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          <span className="font-serif text-lg font-bold text-muted-foreground">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} &middot; {testimonial.timeline}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Истории успеха
          </span>
          <h2 className="font-serif text-headline text-foreground mb-4 text-balance">
            Они уже{" "}
            <span className="text-primary">сменили профессию</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Реальные истории студентов, которые прошли программу и нашли работу
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 py-8 px-8 lg:px-12 bg-muted/50 rounded-xl flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          <div className="text-center">
            <span className="font-serif text-4xl font-bold text-foreground drop-shadow-sm">50+</span>
            <p className="text-sm text-muted-foreground mt-1">выпускников</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <span className="font-serif text-4xl font-bold text-foreground drop-shadow-sm">87%</span>
            <p className="text-sm text-muted-foreground mt-1">нашли работу</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <span className="font-serif text-4xl font-bold text-primary">6-9</span>
            <p className="text-sm text-muted-foreground mt-1">месяцев продуктивной работы</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
