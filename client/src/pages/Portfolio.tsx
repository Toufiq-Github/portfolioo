import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { useProjects, useTimeline } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutPhoto from "@assets/DP_(2)_1771706625848.png";

import ecommercePhoto from "@assets/Ecommerce_1772049675240.png";
import retinaPhoto from "@assets/retina_1772049675238.png";
import wordPhoto from "@assets/word_1772049657411.png";
import dictionaryThumb from "@assets/lFzRzskAQwatNsmhjwZGAA_1772135728097.jpg";
import hangmanThumb from "@assets/360_F_511071154_7bfMnKC9wucqHKyDQjYEjJs7qKcfZh7W_1772135739870.jpg";

const assetMap: Record<string, string> = {
  "Ecommerce.png": ecommercePhoto,
  "retina.png": retinaPhoto,
  "word.png": wordPhoto,
};

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
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="text-4xl md:text-6xl font-medium mb-16 text-center text-white">
                  About <span className="text-primary">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="flex flex-col gap-8">
                    <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-primary transition-all duration-500">
                      <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                        I’m <span className="text-primary">Shafaeat Hasan Toufiq</span>. I have completed my undergraduate degree in Computer Science and Engineering at <span className="text-primary">East West University</span>, Dhaka.
                      </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-primary transition-all duration-500">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Over the years, I’ve built a solid grasp of core computer science concepts, excelling in areas such as Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Computer Networks, System Design, Data Science, and Software Engineering. Beyond coding, I’m always eager to embrace new challenges and contribute to innovative projects.
                        <br /><br />
                        Alongside my academic journey, I also create technical content on YouTube, where I share project tutorials and lessons that simplify complex topics for beginners and students, helping them gain practical skills and confidence in technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
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

        {/* New Milestone Section (After About) */}
        <section className="py-24 bg-white overflow-hidden relative border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
            <div className="mb-20 text-center">
              <span className="flex items-center justify-center gap-2 text-black font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                Key Focus
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mb-4 text-black">
                Personal <span className="text-gray-500">Milestones</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-10 rounded-[2.5rem] bg-gray-200/40 border border-gray-300/50 shadow-xl backdrop-blur-md transition-all hover:bg-gray-200/60"
               >
                 <h3 className="text-3xl font-medium text-black mb-6">Development</h3>
                 <p className="text-black/80 text-lg leading-relaxed">
                   Passionate about building scalable web applications and exploring modern frameworks. My goal is to create impactful software that solves real-world problems through clean code and efficient architecture.
                 </p>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-10 rounded-[2.5rem] bg-gray-200/40 border border-gray-300/50 shadow-xl backdrop-blur-md transition-all hover:bg-gray-200/60"
               >
                 <h3 className="text-3xl font-medium text-black mb-6">Research</h3>
                 <p className="text-black/80 text-lg leading-relaxed">
                   Deeply interested in Machine Learning and Computer Vision. I strive to combine theoretical knowledge with practical implementations to push the boundaries of artificial intelligence.
                 </p>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-black">
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
        <section id="experience" className="py-24 bg-black">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-medium mb-16 text-white">
                Work <span className="text-primary">Experience</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl text-left hover:border-primary transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-6 py-2 bg-primary/10 rounded-full text-primary border border-primary/20 font-medium text-sm">2023 - Present</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <h3 className="text-3xl font-medium text-white">Researcher</h3>
                    <p className="text-xl text-primary font-medium">East West University</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Conducted extensive research on <span className="text-white font-bold underline decoration-primary/50 underline-offset-4">Cotton Leaf Image Classification</span>, developing a Hybrid Deep Learning Model that achieved state-of-the-art performance.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Integrated <span className="text-white font-medium">Explainable AI (XAI)</span> techniques to provide visual interpretability for model predictions, ensuring clinical and agricultural reliability.
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-muted-foreground italic mb-6">Published in "Data in Brief", ScienceDirect</p>
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-black px-10 rounded-full h-14 text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-primary/10"
                        onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S2352340925008637', '_blank')}
                      >
                        View Published Paper
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline (Education) Section */}
        <section id="timeline" className="py-24 bg-black">
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
        <section id="youtube" className="py-24 bg-black">
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
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-12 text-base font-bold shadow-lg shadow-primary/20"
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
        <footer className="py-12 border-t border-gray-800 bg-gray-900 transition-all hover:bg-gray-800/80">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p className="text-lg md:text-xl font-medium">&copy; 2024 Shafaeat Hasan Toufiq. All rights reserved.</p>
            <p className="text-sm mt-3 opacity-60 hover:opacity-100 transition-opacity">Designed & Built with ❤️</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
