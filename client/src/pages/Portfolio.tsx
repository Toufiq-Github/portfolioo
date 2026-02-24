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

export default function Portfolio() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: timeline, isLoading: timelineLoading } = useTimeline();

  if (projectsLoading || timelineLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hello! I'm <span className="text-primary font-semibold">Shafaeat Hasan Toufiq</span>. I have completed my Bachelor's degree in Computer Science & Engineering at East West University, Dhaka. I have a strong foundation in programming with a growing interest in machine learning and software development.
                  </p>
                  <p>
                    Over the years, I've built a solid grasp of core computer science concepts, excelling in areas such as Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Data Science, and Software Engineering. Beyond coding, I'm always eager to embrace new challenges and contribute to innovative projects.
                  </p>
                  <p>
                    Alongside my academic journey, I also create technical content on YouTube, where I share project tutorials and lessons that simplify complex topics for beginners and students, helping them gain practical skills and confidence in technology.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-3 opacity-20" />
                  <img 
                    src={aboutPhoto} 
                    alt="Shafaeat Hasan Toufiq" 
                    className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover max-h-[500px]" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              A selection of my recent work, from full-stack applications to complex frontend interfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-card/30">
          <div className="container mx-auto px-12 lg:px-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                My <span className="text-gradient">Experience</span>
              </h2>
              <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl border border-border/50 shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-2">Researcher</h3>
                <p className="text-lg text-muted-foreground mb-6">East West University</p>
                <p className="text-muted-foreground mb-8 text-center max-w-lg mx-auto">
                  My paper on <span className="text-primary font-semibold">Cotton Leaf Image Classification</span> using a Hybrid Deep Learning Model with Explainable AI (XAI) has been published in Data in Brief.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S2352340925008637', '_blank')}
                >
                  View Published Paper
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              My <span className="text-gradient">Education</span>
            </motion.h2>

            <Timeline items={timeline?.filter(t => t.type === 'education') || []} />
          </div>
        </section>

        {/* YouTube Section */}
        <section id="youtube" className="py-24 bg-card/30">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              YouTube <span className="text-gradient">Content</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=vb7j0lC1Z6s&t=6s', '_blank')}>
                  <img src="https://ibb.co.com/C41vCwk" alt="Word Dictionary" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaYoutube className="text-6xl text-red-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Word Dictionary Project in C++</h3>
                  <p className="text-muted-foreground text-sm">Implementation of a dictionary using Binary Search Tree (BST) data structure in C++.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=NDYY6tix2-Q', '_blank')}>
                  <img src="https://ibb.co.com/VWLV2kRj" alt="Hangman Game" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaYoutube className="text-6xl text-red-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hangman Game Project using C</h3>
                  <p className="text-muted-foreground text-sm">Implementation of the classic Hangman word guessing game in C programming language.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-card border border-border/50 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg"
              >
                <FaYoutube className="text-7xl text-red-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Visit My Channel</h3>
                <p className="text-muted-foreground mb-8">Check out more programming tutorials and projects on my YouTube channel</p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8"
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
