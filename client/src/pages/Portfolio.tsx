import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { Timeline } from "@/components/Timeline";
import { useProjects, useSkills, useTimeline } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
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
          <div className="container mx-auto px-6">
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
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student based in Dhaka, Bangladesh. My journey in tech started with a curiosity about how things work on the web, which evolved into a career building robust applications.
                  </p>
                  <p>
                    I specialize in the React ecosystem and modern machine learning technologies. When I'm not coding, I'm creating educational content on YouTube or contributing to research projects.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                      <h4 className="text-2xl font-bold text-primary">5+</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</span>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                      <h4 className="text-2xl font-bold text-primary">20+</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                      <h4 className="text-2xl font-bold text-primary">100+</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Commits</span>
                    </div>
                  </div>
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
          <div className="container mx-auto px-6">
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
          <div className="container mx-auto px-6">
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

        {/* Timeline Section */}
        <section id="timeline" className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              My <span className="text-gradient">Journey</span>
            </motion.h2>

            <Timeline items={timeline || []} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Let's work <br />
                  <span className="text-gradient">together.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, let's chat.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-muted-foreground">hello@shohag.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border bg-card/50">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; 2024 Shohag Kumar. All rights reserved.</p>
            <p className="text-sm mt-2">Designed & Built with ❤️</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
