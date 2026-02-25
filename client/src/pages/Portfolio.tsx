import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { useProjects, useSkills, useTimeline } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutPhoto from "@assets/DP_(2)_1771706625848.png";

import hangmanThumb from "@assets/360_F_511071154_7bfMnKC9wucqHKyDQjYEjJs7qKcfZh7W_1772022158123.jpg";
import dictionaryThumb from "@assets/lFzRzskAQwatNsmhjwZGAA_1772022213709.jpg";

export default function Portfolio() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: timeline, isLoading: timelineLoading } = useTimeline();

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
      
      <main>
        {/* Dark Section Wrapper for Hero + About */}
        <div className="bg-black">
          <Hero />

          {/* About Section */}
          <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-12 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white">
                  About <span className="text-primary">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Hello! I'm <span className="text-white font-bold">Shafaeat Hasan Toufiq</span>. I graduated from <span className="text-primary">East West University</span> with a degree in Computer Science & Engineering.
                    </p>
                    <p>
                      I specialize in building robust software solutions and exploring the depths of <span className="text-white">Machine Learning</span>. My focus is on merging technical complexity with intuitive design.
                    </p>
                    <p>
                      When I'm not coding, I'm sharing knowledge through my <span className="text-primary font-bold">YouTube channel</span>, helping others navigate the world of technology through practical project building.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3" />
                      <img 
                        src={aboutPhoto} 
                        alt="Shafaeat Hasan Toufiq" 
                        className="relative rounded-2xl shadow-2xl border border-white/5 w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-black">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center text-white"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-black">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white">
                My <span className="text-primary">Experience</span>
              </h2>
              <div className="max-w-3xl mx-auto bg-white/5 p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white mb-2">Researcher</h3>
                <p className="text-xl text-primary font-medium mb-6">East West University</p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  My paper on <span className="text-white font-bold">Cotton Leaf Image Classification</span> using a Hybrid Deep Learning Model with Explainable AI (XAI) has been published in <span className="italic">Data in Brief</span>.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-10 rounded-full h-14 text-lg font-bold transition-all hover:scale-105"
                  onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S2352340925008637', '_blank')}
                >
                  View Published Paper
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 bg-black">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-20 text-center text-white"
            >
              My <span className="text-primary">Education</span>
            </motion.h2>

            <Timeline items={timeline?.filter(t => t.type === 'education') || []} />
          </div>
        </section>

        {/* YouTube Section */}
        <section id="youtube" className="py-24 bg-black">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-20 text-center text-white"
            >
              YouTube <span className="text-primary">Content</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group"
              >
                <div className="aspect-video relative cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=vb7j0lC1Z6s&t=6s', '_blank')}>
                  <img src={dictionaryThumb} alt="Word Dictionary" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-7xl text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Word Dictionary Project in C++</h3>
                  <p className="text-muted-foreground leading-relaxed">Implementation of a dictionary using Binary Search Tree (BST) data structure in C++.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group"
              >
                <div className="aspect-video relative cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=NDYY6tix2-Q', '_blank')}>
                  <img src={hangmanThumb} alt="Hangman Game" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaYoutube className="text-7xl text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Hangman Game Project using C</h3>
                  <p className="text-muted-foreground leading-relaxed">Implementation of the classic Hangman word guessing game in C programming language.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl"
              >
                <FaYoutube className="text-8xl text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-4 text-white">Visit My Channel</h3>
                <p className="text-muted-foreground mb-10 text-lg">Check out more programming tutorials and projects on my YouTube channel</p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-14 text-lg font-bold"
                  onClick={() => window.open('https://www.youtube.com/@CodeRunnerr', '_blank')}
                >
                  View Channel
                </Button>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Side: Previous Style Info */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Let's work <br />
                    <span className="text-gradient">together.</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-md">
                    I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, let's chat.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
                        <FaEnvelope className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Email</h4>
                        <a href="mailto:safaeathasantoufiq@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          safaeathasantoufiq@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
                        <FaMapMarkerAlt className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Location</h4>
                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Current Style and Text */}
                <div className="bg-card border border-border/50 p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  
                  <h2 className="text-3xl font-bold mb-6">
                    Get in <span className="text-gradient">Touch</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    Feel free to reach out for collaborations or just a friendly hello!
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                      <div className="flex gap-4">
                        <a href="https://github.com/Toufiq-Github" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shafaeat-hasan-toufiq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/safaeat.hasan.3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md">
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-border/50">
                      <p className="text-sm text-muted-foreground italic">
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
        <footer className="py-8 border-t border-border bg-card/50">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; 2024 Shafaeat Hasan Toufiq. All rights reserved.</p>
            <p className="text-sm mt-2">Designed & Built with ❤️</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
