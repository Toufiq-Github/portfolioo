import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiGit, 
  SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, SiCplusplus, 
  SiOpenjdk, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiHtml5, SiTailwindcss, SiNextdotjs, SiJavascript as SiJsIcon,
  SiOpencv, SiKeras, SiNumpy
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
  "OpenCV": SiOpencv,
  "Keras": SiKeras,
  "NumPy": SiNumpy,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Pandas": SiPandas,
  "Scikit-Learn": SiScikitlearn,
  "HTML5": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "JS": SiJsIcon,
};

const webSkills = ["React", "Node.js", "ExpressJS", "JavaScript", "TypeScript", "MongoDB", "MySQL", "Git"];
const dataSkills = ["Python", "TensorFlow", "PyTorch", "OpenCV", "Keras", "NumPy", "Pandas"];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "data">("web");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.4) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 bg-card/30 overflow-hidden relative">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="mb-16">
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
            {/* Data Science Palette */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "data" ? 30 : 10,
                y: activeTab === "data" ? 0 : 80,
                x: activeTab === "data" ? 0 : 20,
                scale: activeTab === "data" ? 1 : 0.9,
                opacity: activeTab === "data" ? 1 : 0.6,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseEnter={() => setActiveTab("data")}
              className="absolute w-full max-w-md p-8 rounded-[2rem] bg-card border border-border shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">Data Science</h3>
                {activeTab !== "data" && <span className="text-xs font-bold text-primary animate-pulse">View Palette</span>}
              </div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {dataSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-bold text-sm">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Web Palette */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "web" ? 30 : 10,
                y: activeTab === "web" ? 0 : 80,
                x: activeTab === "web" ? 0 : 20,
                scale: activeTab === "web" ? 1 : 0.9,
                opacity: activeTab === "web" ? 1 : 0.6,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseEnter={() => setActiveTab("web")}
              className="absolute w-full max-w-md p-8 rounded-[2rem] bg-card border border-border shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">Web Development</h3>
                {activeTab !== "web" && <span className="text-xs font-bold text-primary animate-pulse">View Palette</span>}
              </div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {webSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-bold text-sm">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Circular Orbiting Icons */}
          <div className="relative h-[600px] w-full flex items-center justify-end">
            {/* Outer circle - Web clockwise */}
            <motion.div 
              className="absolute w-[500px] h-[500px] flex items-center justify-center"
              style={{ rotate: rotation }}
            >
              <div className="absolute inset-0 border border-primary/20 rounded-full" />
              {webSkills.map((skill, index) => {
                const Icon = iconMap[skill];
                const angle = (index / webSkills.length) * 2 * Math.PI;
                const radius = 250;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div key={skill} className="absolute p-4 bg-card border border-border rounded-full shadow-lg" style={{ x, y, rotate: -rotation }}>
                    {Icon && <Icon className="text-2xl text-foreground" />}
                  </div>
                );
              })}
            </motion.div>

            {/* Inner circle - Data anti-clockwise */}
            <motion.div 
              className="absolute w-[350px] h-[350px] flex items-center justify-center"
              style={{ rotate: -rotation * 1.5 }}
            >
              <div className="absolute inset-0 border border-primary/10 rounded-full" />
              {dataSkills.map((skill, index) => {
                const Icon = iconMap[skill];
                const angle = (index / dataSkills.length) * 2 * Math.PI;
                const radius = 175;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div key={skill} className="absolute p-3 bg-card border border-border rounded-full shadow-lg" style={{ x, y, rotate: rotation * 1.5 }}>
                    {Icon && <Icon className="text-xl text-primary" />}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
