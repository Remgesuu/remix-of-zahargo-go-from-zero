import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const levels = [
  {
    level: "Junior",
    salary: "100k",
    timeline: "После обучения",
    percentage: 33,
  },
  {
    level: "Middle",
    salary: "300k",
    timeline: "1-2 года опыта",
    percentage: 75,
  },
  {
    level: "Senior",
    salary: "400k+",
    timeline: "3+ года опыта",
    percentage: 100,
  },
];

export function SalaryGrowth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-headline text-foreground mb-4 text-balance">
            Заработок{" "}
            <span className="text-primary">растёт</span>{" "}
            вместе с опытом
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Средние зарплаты Go-разработчиков в России по данным hh.ru
          </p>
        </motion.div>

        {/* Salary Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-card border border-border rounded-lg p-8 text-center group hover:border-primary/30 transition-colors duration-500"
            >
              {/* Level */}
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {item.level}
              </span>

              {/* Salary */}
              <div className="my-6">
                <span className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
                  {item.salary}
                </span>
                <span className="text-2xl text-primary font-medium ml-1">₽</span>
              </div>

              {/* Timeline */}
              <p className="text-sm text-muted-foreground mb-8">
                {item.timeline}
              </p>

              {/* Progress Bar */}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
