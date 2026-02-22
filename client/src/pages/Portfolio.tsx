import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { Timeline } from "@/components/Timeline";
import { useProjects, useSkills, useTimeline } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutPhoto from "@assets/DP_(2)_1771706625848.png";

export default function Portfolio() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: timeline, isLoading: timelineLoading } = useTimeline();

  if (projectsLoading || skillsLoading || timelineLoading) {
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
          <div className="container mx-auto px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
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
                    className="relative rounded-2xl shadow-2xl border border-white/10 w-full" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-card/30">
          <div className="container mx-auto px-12 lg:px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              Technical <span className="text-gradient">Skills</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills?.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section>

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
                <p className="text-muted-foreground mb-8">
                  I am a researcher focused on deep learning and healthcare applications. 
                  My paper on retinal disease detection has been published in Data in Brief.
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
                  <img src="https://img.youtube.com/vi/vb7j0lC1Z6s/maxresdefault.jpg" alt="Word Dictionary" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
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
                  <img src="https://img.youtube.com/vi/NDYY6tix2-Q/maxresdefault.jpg" alt="Hangman Game" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
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
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-muted-foreground text-xl mb-12">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-xl">
                  <FaEnvelope className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-white">Email</h4>
                  <a href="mailto:safaeathasantoufiq@gmail.com" className="text-primary hover:underline text-lg">
                    safaeathasantoufiq@gmail.com
                  </a>
                </div>
                <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-xl">
                  <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-white">Location</h4>
                  <p className="text-muted-foreground text-lg text-white">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
                <div className="flex justify-center gap-6">
                  <a href="https://github.com/Toufiq-Github" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card border border-border/50 rounded-full flex items-center justify-center text-3xl text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-lg">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/shafaeat-hasan-toufiq/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card border border-border/50 rounded-full flex items-center justify-center text-3xl text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-lg">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/@CodeRunnerr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card border border-border/50 rounded-full flex items-center justify-center text-3xl text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-lg">
                    <FaYoutube />
                  </a>
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
