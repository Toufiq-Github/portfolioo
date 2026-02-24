import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiGit, 
  SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, SiCplusplus, 
  SiOpenjdk, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiHtml5, SiTailwindcss, SiNextdotjs, SiJavascript as SiJsIcon
} from "react-icons/si";
import { CheckCircle2 } from "lucide-react";

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
  "HTML5": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "JS": SiJsIcon,
};

const frontendSkills = [
  { name: "HTML5", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Learning", level: "ongoing" },
  { name: "Next.js", level: "Expert" },
  { name: "ReactJS", level: "Expert" },
];

const backendSkills = [
  { name: "Node.JS", level: "Expert" },
  { name: "Express.JS", level: "Expert" },
];

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
    <section id="skills" className="py-24 bg-card/30 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-12">
          <span className="flex items-center gap-2 text-primary font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Overlapping Palettes */}
          <div className="relative min-h-[500px] flex items-center justify-start">
            {/* Backend / Data Science Palette (The one that moves behind) */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "data" ? 30 : 10,
                x: activeTab === "data" ? 0 : 40,
                y: activeTab === "data" ? 0 : -40,
                scale: activeTab === "data" ? 1 : 0.95,
                opacity: activeTab === "data" ? 1 : 0.5,
              }}
              onMouseEnter={() => setActiveTab("data")}
              className="absolute w-full max-w-md p-8 rounded-[2rem] bg-card border border-border/50 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground/80">Data Science & ML</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {dataSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-bold text-base">{skill}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-6 capitalize">Expert</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frontend / Web Palette (The one in front initially) */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "web" ? 30 : 10,
                x: activeTab === "web" ? 0 : -40,
                y: activeTab === "web" ? 0 : 40,
                scale: activeTab === "web" ? 1 : 0.95,
                opacity: activeTab === "web" ? 1 : 0.5,
              }}
              onMouseEnter={() => setActiveTab("web")}
              className="absolute w-full max-w-md p-8 rounded-[2rem] bg-card border border-border/50 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground/80">Web Development</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {webSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-bold text-base">{skill}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-6 capitalize">Expert</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Circular Orbiting Icons */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Background decorative circles */}
            <div className="absolute w-[300px] h-[300px] border border-primary/10 rounded-full" />
            <div className="absolute w-[400px] h-[400px] border border-primary/5 rounded-full" />
            
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ rotate: rotation }}
            >
              {currentSkills.map((skill, index) => {
                const Icon = iconMap[skill];
                const angle = (index / currentSkills.length) * 2 * Math.PI;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={skill}
                    className="absolute p-4 bg-card border border-border/50 rounded-full shadow-lg flex items-center justify-center group hover:border-primary transition-colors"
                    style={{ 
                      x, 
                      y,
                      rotate: -rotation 
                    }}
                  >
                    {Icon ? (
                      <Icon className="text-2xl text-foreground group-hover:text-primary transition-colors" />
                    ) : (
                      <span className="text-xs font-bold">{skill[0]}</span>
                    )}
                    {/* Tooltip */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-primary text-white text-[10px] py-1 px-2 rounded whitespace-nowrap transition-opacity font-bold">
                      {skill}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Central Badge */}
            <div className="absolute w-28 h-28 bg-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                {activeTab === "web" ? "Web" : "Data"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
