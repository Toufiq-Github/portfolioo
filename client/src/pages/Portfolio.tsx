import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { useProjects, useTimeline } from "@/hooks/use-portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import ecommercePhoto from "@assets/Ecommerce_1772049675240.png";
import retinaPhoto from "@assets/retina_1772049675238.png";
import promptRefinerPhoto from "@assets/PromptRefiner.png";
import dictionaryThumb from "@assets/dic_1772288792898.png";
import hangmanThumb from "@assets/360_F_511071154_7bfMnKC9wucqHKyDQjYEjJs7qKcfZh7W_1772135739870.jpg";

const assetMap: Record<string, string> = {
  "Ecommerce.png": ecommercePhoto,
  "retina.png": retinaPhoto,
  "PromptRefiner.png": promptRefinerPhoto,
};

export default function Portfolio() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: timeline, isLoading: timelineLoading } = useTimeline();
  const skillsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: skillsScrollProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end start"]
  });
  const skillsY = useTransform(skillsScrollProgress, [0, 1], ["0%", "50%"]);

  if (projectsLoading || timelineLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-black text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main className="relative">
        {/* Dark Section Wrapper for Hero + About */}
        <div className="bg-black relative z-10">
          <Hero />

          {/* About Section */}
          <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <div className="mx-auto mb-12 max-w-4xl text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary shadow-sm shadow-primary/10">
                    About Me
                  </span>
                  <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    I’m a CSE graduate with experience in full-stack development, AI, machine learning, deep learning, and data science.
                  </h2>
                  <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                    I’m <span className="text-white font-semibold">Shafaeat Hasan Toufiq</span>, a Computer Science & Engineering graduate from <span className="text-primary font-medium">East West University</span>, Dhaka. I specialize in full-stack development, data science, and machine learning, and I enjoy turning complex technical challenges into polished, user-centered solutions.
                  </p>
                </div>

                <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr] items-start">
                  <div className="space-y-6">
                    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                      <h3 className="text-3xl font-semibold text-white mb-6">Professional Overview</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        I’m an ambitious developer with strong fundamentals in software engineering, systems design, and modern web architecture. I build scalable applications using clean code, thoughtful structure, and practical technologies that align well with product goals.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">Development</p>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          Passionate about building scalable web applications with clean architecture and performance-first design.
                        </p>
                      </div>
                      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">Research & Learning</p>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          Continuously exploring machine learning, computer vision, and explainable AI to connect research with real-world projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">Academic Journey</p>
                      <h3 className="text-2xl font-semibold text-white mb-3">East West University</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        Completed an undergraduate degree in Computer Science & Engineering, gaining strong theoretical and practical skills across software engineering, data structures, algorithms, databases, and system design.
                      </p>
                    </div>

                    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">Core Strengths</p>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        I excel in Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Computer Networks, and System Design. I’m motivated by innovation and solving meaningful problems.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Skills Section - Parallax Background */}
        <div ref={skillsRef} className="relative h-screen z-0 overflow-hidden bg-white">
          <motion.div style={{ y: skillsY }} className="w-full h-full flex items-center justify-center">
            <SkillsSection />
          </motion.div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="relative z-20 pt-24 pb-24 bg-black rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium mb-20 text-center text-white"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>

            <div className="space-y-32">
              {projects?.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={{...project, imageUrl: assetMap[project.imageUrl || ''] || project.imageUrl}} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative z-20 py-24 bg-black">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-medium mb-16 text-white text-center">
                Work <span className="text-primary">Experience</span>
              </h2>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-4 py-1.5 bg-primary/10 rounded-full text-primary border border-primary/20 font-medium text-sm">2023 — Present</span>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-primary transition-colors">Researcher</h3>
                    <p className="text-lg text-primary/80 font-medium">East West University</p>
                  </div>
                  
                  <div className="space-y-8">
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      Integrated Explainable AI (XAI) techniques to provide visual interpretability for model predictions, ensuring clinical and agricultural reliability.
                    </p>
                    
                    <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <p className="text-sm text-muted-foreground italic font-medium">Published in "Data in Brief", ScienceDirect</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                      <a href="https://www.sciencedirect.com/science/article/pii/S2352340925008637?via%3Dihub" target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="lg"
                          className="bg-primary hover:bg-white text-black px-10 rounded-full h-14 text-lg font-bold transition-all shadow-xl shadow-primary/20 flex items-center gap-3"
                        >
                          View Paper
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </Button>
                      </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline (Education) Section */}
        <section id="timeline" className="relative z-20 py-24 bg-black">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium mb-20 text-center text-white"
            >
              My <span className="text-primary">Education</span>
            </motion.h2>

            <Timeline
              items={
                (timeline?.filter(t => t.type === 'education') || []).map(t => ({
                  ...(t as any),
                  description: (t as any).description ?? null,
                }))
              }
            />
          </div>
        </section>

        {/* YouTube Section */}
        <section id="youtube" className="relative z-20 py-24 bg-black">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium mb-20 text-center text-white"
            >
              YouTube <span className="text-primary">Content</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group max-w-sm mx-auto w-full"
              >
                <a href="https://www.youtube.com/watch?v=vb7j0lC1Z6s&t=7s" target="_blank" rel="noopener noreferrer" className="aspect-video relative cursor-pointer block">
                  <img src={dictionaryThumb} alt="Word Dictionary" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-6xl text-primary" />
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-white">Word Dictionary Project in C++</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Implementation of a dictionary using Binary Search Tree (BST) data structure in C++.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group max-w-sm mx-auto w-full"
              >
                <a href="https://www.youtube.com/watch?v=NDYY6tix2-Q&t=1s" target="_blank" rel="noopener noreferrer" className="aspect-video relative cursor-pointer block">
                  <img src={hangmanThumb} alt="Hangman Game" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-6xl text-primary" />
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-white">Hangman Game Project using C</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Implementation of the classic Hangman word guessing game in C programming language.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl max-w-sm mx-auto w-full"
              >
                <FaYoutube className="text-6xl text-primary mb-6" />
                <h3 className="text-xl font-medium mb-3 text-white">Visit My Channel</h3>
                <p className="text-muted-foreground mb-8 text-sm">Check out more programming tutorials and projects on my YouTube channel</p>
                <a href="https://www.youtube.com/@CodeRunnerr" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black rounded-full px-10 h-12 text-base font-bold shadow-lg shadow-primary/20"
                  >
                    View Channel
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="relative z-20 py-24 bg-black">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Contact Info */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-medium mb-6">
                    Let's work <br />
                    <span className="text-primary">together.</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-md">
                    I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, let's chat.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg shadow-primary/5">
                        <FaEnvelope className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-lg">Email</h4>
                        <a href="mailto:safaeathasantoufiq@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          safaeathasantoufiq@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg shadow-primary/5">
                        <FaMapMarkerAlt className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-lg">Location</h4>
                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Get in Touch block (Ash Glassy) */}
                <div className="bg-ash/20 border border-ash/30 p-10 rounded-3xl shadow-2xl relative overflow-hidden group backdrop-blur-xl hover:border-primary/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  
                  <h2 className="text-3xl font-medium mb-6">
                    Get in <span className="text-primary">Touch</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    Feel free to reach out for collaborations or just a friendly hello!
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-6">Connect With Me</h3>
                      <div className="flex gap-4">
                        <a href="https://github.com/Toufiq-Github" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/50 border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shafaeat-hasan-toufiq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/50 border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/safaeat.hasan.3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/50 border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        "Eager to embrace new challenges and contribute to innovative projects."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-20 py-12 border-t border-gray-100 bg-white transition-all hover:bg-gray-50/80">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p className="text-lg md:text-xl font-medium">&copy; 2024 Shafaeat Hasan Toufiq. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
