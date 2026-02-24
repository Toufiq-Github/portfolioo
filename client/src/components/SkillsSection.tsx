import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiGit, 
  SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, SiCplusplus, 
  SiOpenjdk, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn 
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "Git": SiGit,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Linux": SiLinux,
  "Oracle": SiOracle,
  "ExpressJS": SiExpress,
  "C++": SiCplusplus,
  "Java": SiOpenjdk,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Pandas": SiPandas,
  "Scikit-Learn": SiScikitlearn,
};

const webSkills = ["React", "Node.js", "ExpressJS", "JavaScript", "TypeScript", "MongoDB", "MySQL", "Git"];
const dataSkills = ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn", "C++", "MySQL", "Linux"];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "data">("web");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const currentSkills = activeTab === "web" ? webSkills : dataSkills;

  return (
    <section id="skills" className="py-24 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Palettes */}
          <div className="flex flex-col gap-6 relative min-h-[400px]">
            {/* Web Development Palette */}
            <motion.div
              layout
              onMouseEnter={() => setActiveTab("web")}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative z-20 ${
                activeTab === "web" 
                  ? "bg-card border-primary shadow-2xl shadow-primary/20 scale-100" 
                  : "bg-card/40 border-border/50 scale-95 translate-y-12 opacity-60 grayscale"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${activeTab === "web" ? "text-primary" : "text-muted-foreground"}`}>
                Web Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {webSkills.map((skill) => {
                  const Icon = iconMap[skill];
                  return (
                    <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border/50">
                      {Icon && <Icon className="text-primary" />}
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Data Science Palette */}
            <motion.div
              layout
              onMouseEnter={() => setActiveTab("data")}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer absolute top-0 left-0 w-full z-10 ${
                activeTab === "data" 
                  ? "bg-card border-primary shadow-2xl shadow-primary/20 scale-100 z-30" 
                  : "bg-card/40 border-border/50 scale-95 translate-y-24 opacity-60 grayscale"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${activeTab === "data" ? "text-primary" : "text-muted-foreground"}`}>
                Data Science & ML/DL
              </h3>
              <div className="flex flex-wrap gap-3">
                {dataSkills.map((skill) => {
                  const Icon = iconMap[skill];
                  return (
                    <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border/50">
                      {Icon && <Icon className="text-primary" />}
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Circular Orbit */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                className="relative w-full h-full"
                style={{ rotate: rotation }}
              >
                {currentSkills.map((skill, index) => {
                  const Icon = iconMap[skill];
                  const angle = (index / currentSkills.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * 150;
                  const y = Math.sin(angle) * 150;

                  return (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-card border border-primary/30 rounded-2xl shadow-xl flex items-center justify-center group"
                      style={{ 
                        x, 
                        y,
                        rotate: -rotation 
                      }}
                    >
                      {Icon && <Icon className="text-3xl text-primary group-hover:scale-125 transition-transform" />}
                      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-bold text-primary">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
            <div className="absolute w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="z-10 text-xl font-bold text-gradient uppercase tracking-widest">
              {activeTab === "web" ? "Web" : "Data"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
