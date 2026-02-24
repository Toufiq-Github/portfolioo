import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import profileHero from "@assets/Profile_Photo_Crop_1771706616948.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            👋 Hello, I'm
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Shafaeat Hasan Toufiq
          </h1>
          
          <div className="text-xl md:text-2xl font-mono text-muted-foreground mb-6 h-[60px] md:h-auto">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Data Science Major',
                2000,
                'Machine Learning Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build exceptional digital experiences that are fast, accessible, and visually stunning. Passionate about turning complex problems into simple, beautiful solutions.
          </p>

          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  View My Work
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" size="lg" className="border-border hover:bg-white/5 px-8 rounded-full h-12 text-base font-medium">
                  Contact Me
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a href="https://github.com/Toufiq-Github" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110 shadow-lg">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shafaeat-hasan-toufiq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110 shadow-lg">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@CodeRunnerr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110 shadow-lg">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 animate-pulse" />
            <div className="absolute inset-0 bg-card rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src={profileHero} 
                alt="Shafaeat Hasan Toufiq" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 transform"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
