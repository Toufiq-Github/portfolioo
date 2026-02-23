import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10" />
        <img 
          src={project.imageUrl || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-lg">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-lg">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20 -mt-8">
        <div className="bg-card/95 backdrop-blur-md rounded-xl p-5 border border-white/5 shadow-xl flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary/80 hover:bg-primary/10 border-primary/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-border/50">
            {project.githubUrl && (
              <Button 
                variant="outline"
                className="w-full group/btn border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
