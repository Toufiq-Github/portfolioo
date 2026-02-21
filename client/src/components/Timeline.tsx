import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import type { TimelineItem } from "@shared/schema";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  // Sort by order or date if available, for now assume backend returns correct order
  
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent ml-4 md:ml-0" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start md:items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 ml-12 md:ml-0`}
            >
              {/* Dot on line */}
              <div className="absolute left-[-2.05rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(108,99,255,0.5)]" />

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-colors shadow-lg">
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-sm font-mono text-primary flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    {item.type === 'education' ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                    <span className="font-medium">{item.organization}</span>
                  </div>
                  
                  {item.description && (
                    <p className="text-muted-foreground/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
