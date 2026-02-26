import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Project Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full"
      >
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          <img 
            src={project.imageUrl || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`} 
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-white/5 text-muted-foreground border-white/10 px-4 py-1 text-xs uppercase tracking-wider font-bold">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
          {project.githubUrl && (
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2"
              onClick={() => window.open(project.githubUrl || '', '_blank')}
            >
              <Github className="w-5 h-5" />
              Code
            </Button>
          )}
          {project.liveUrl && !project.techStack.some(t => t.toLowerCase().includes('learning') || t.toLowerCase().includes('data science') || t.toLowerCase().includes('ml')) && (
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black rounded-full px-8 flex items-center gap-2 font-bold shadow-lg shadow-primary/25"
              onClick={() => window.open(project.liveUrl || '', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
