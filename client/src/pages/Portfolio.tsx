import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { useProjects, useTimeline } from "@/hooks/use-portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutPhoto from "@assets/DP_(2)_1771706625848.png";

import ecommercePhoto from "@assets/Ecommerce_1772049675240.png";
import retinaPhoto from "@assets/retina_1772049675238.png";
import wordPhoto from "@assets/word_1772049657411.png";
import dictionaryThumb from "@assets/dic_1772288792898.png";
import hangmanThumb from "@assets/360_F_511071154_7bfMnKC9wucqHKyDQjYEjJs7qKcfZh7W_1772135739870.jpg";

const assetMap: Record<string, string> = {
  "Ecommerce.png": ecommercePhoto,
  "retina.png": retinaPhoto,
  "word.png": wordPhoto,
};

export default function Portfolio() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: timeline, isLoading: timelineLoading } = useTimeline();
  const [hoveredAbout, setHoveredAbout] = useState<string | null>(null);

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
          <section id="about" className="py-12 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="text-3xl md:text-5xl font-medium mb-12 text-center text-white">
                  About <span className="text-primary">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="flex flex-col gap-6 pt-0 md:pt-4">
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-primary transition-all duration-500">
                      <p className="text-base md:text-lg text-white leading-relaxed font-medium">
                        I’m <span className="text-primary">Shafaeat Hasan Toufiq</span>. I have completed my undergraduate degree in Computer Science and Engineering at <span className="text-primary">East West University</span>, Dhaka.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-primary transition-all duration-500">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Over the years, I’ve built a solid grasp of core computer science concepts, excelling in areas such as Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Computer Networks, System Design, Data Science, and Software Engineering. Beyond coding, I’m always eager to embrace new challenges and contribute to innovative projects.
                        <br /><br />
                        Alongside my academic journey, I also create technical content on YouTube, where I share project tutorials and lessons that simplify complex topics for beginners and students, helping them gain practical skills and confidence in technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-8">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3" />
                      <div className="relative rounded-2xl shadow-2xl border border-white/5 w-full h-full overflow-hidden">
                        <img 
                          src={aboutPhoto} 
                          alt="Shafaeat Hasan Toufiq" 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-full max-w-[400px] flex flex-col gap-4 relative"
                    >
                      <div className="flex gap-4 w-full">
                        <button 
                          onMouseEnter={() => setHoveredAbout('development')}
                          onMouseLeave={() => setHoveredAbout(null)}
                          className="flex-1 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-primary hover:text-black transition-all shadow-lg active:scale-95 text-sm md:text-base"
                        >
                          Development
                        </button>
                        <button 
                          onMouseEnter={() => setHoveredAbout('research')}
                          onMouseLeave={() => setHoveredAbout(null)}
                          className="flex-1 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-primary hover:text-black transition-all shadow-lg active:scale-95 text-sm md:text-base"
                        >
                          Research
                        </button>
                      </div>

                      <div className="min-h-[100px] w-full">
                        <AnimatePresence mode="wait">
                          {hoveredAbout === 'development' && (
                            <motion.div
                              key="dev-text"
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="p-4 rounded-[1.5rem] bg-white/10 border border-primary/30 text-white text-xs md:text-sm text-center shadow-2xl backdrop-blur-md"
                            >
                              Passionate about building scalable web applications and exploring modern frameworks. My goal is to create impactful software that solves real-world problems through clean code and efficient architecture.
                            </motion.div>
                          )}
                          {hoveredAbout === 'research' && (
                            <motion.div
                              key="research-text"
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="p-4 rounded-[1.5rem] bg-white/10 border border-primary/30 text-white text-xs md:text-sm text-center shadow-2xl backdrop-blur-md"
                            >
                              Deeply interested in Machine Learning and Computer Vision. I strive to combine theoretical knowledge with practical implementations to push the boundaries of artificial intelligence.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Skills Section - Sticky */}
        <div className="sticky top-0 h-screen z-0 overflow-hidden flex items-center justify-center bg-white">
          <SkillsSection />
        </div>

        {/* Projects Section - Overlays Skills */}
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
              <h2 className="text-3xl md:text-5xl font-medium mb-16 text-white text-center md:text-left">
                Work <span className="text-primary">Experience</span>
              </h2>
              
              <div className="space-y-0 border-l border-white/10 ml-4 md:ml-0">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 group"
                >
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/10 group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-primary transition-colors">Researcher</h3>
                    <span className="text-sm font-medium text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">2023 — Present</span>
                  </div>
                  
                  <p className="text-lg text-white/80 mb-2 font-medium">East West University</p>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      Integrated Explainable AI (XAI) techniques to provide visual interpretability for model predictions, ensuring clinical and agricultural reliability.
                    </p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Published in "Data in Brief", ScienceDirect</p>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-black px-6 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
                        onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S2352340925008637', '_blank')}
                      >
                        View Paper
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </Button>
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

            <Timeline items={timeline?.filter(t => t.type === 'education') || []} />
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
                <div className="aspect-video relative cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=vb7j0lC1Z6s&t=6s', '_blank')}>
                  <img src={dictionaryThumb} alt="Word Dictionary" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-6xl text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-white">Word Dictionary Project in C++</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Implementation of a dictionary using Binary Search Tree (BST) data structure in C++.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group max-w-sm mx-auto w-full"
              >
                <div className="aspect-video relative cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=NDYY6tix2-Q', '_blank')}>
                  <img src={hangmanThumb} alt="Hangman Game" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-6xl text-primary" />
                  </div>
                </div>
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
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black rounded-full px-10 h-12 text-base font-bold shadow-lg shadow-primary/20"
                  onClick={() => window.open('https://www.youtube.com/@CodeRunnerr', '_blank')}
                >
                  View Channel
                </Button>
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
