import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import type { TimelineItem } from "@shared/schema";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-0">
      {/* Central Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

      <div className="space-y-16">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Dot on line */}
              <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

              {/* Content Card (Ash Glassy) */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-ash/20 border border-ash/30 p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 shadow-2xl backdrop-blur-xl group">
                  <div className={`flex items-center gap-2 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className={`flex items-center gap-2 text-white/80 mb-4 font-medium ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    {item.type === 'education' ? <GraduationCap className="w-5 h-5 text-primary" /> : <Briefcase className="w-5 h-5 text-primary" />}
                    <span>{item.organization}</span>
                  </div>
                  
                  {item.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
