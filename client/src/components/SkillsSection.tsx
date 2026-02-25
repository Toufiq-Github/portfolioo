import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiGit, 
  SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, 
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
    <section id="skills" className="py-32 bg-card/30 overflow-hidden relative">
      <div className="container mx-auto px-12 lg:px-32">
        <div className="mb-20">
          <span className="flex items-center gap-2 text-primary font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left Side: Overlapping Palettes */}
          <div className="relative min-h-[500px] flex items-center justify-start">
            {/* Data Science Palette (Background) */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "data" ? 30 : 10,
                y: activeTab === "data" ? 0 : 80,
                x: activeTab === "data" ? 0 : 40,
                scale: activeTab === "data" ? 1 : 0.95,
                opacity: activeTab === "data" ? 1 : 0.4,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={() => setActiveTab("data")}
              className="absolute w-full max-w-md p-10 rounded-[2.5rem] bg-card border border-white/10 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-medium text-white">Backend Developer</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {dataSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-lg text-white/90">{skill}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-7 font-medium">Expert</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Web Palette (Frontend) */}
            <motion.div
              initial={false}
              animate={{
                zIndex: activeTab === "web" ? 30 : 10,
                y: activeTab === "web" ? 0 : 80,
                x: activeTab === "web" ? 0 : 40,
                scale: activeTab === "web" ? 1 : 0.95,
                opacity: activeTab === "web" ? 1 : 0.4,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={() => setActiveTab("web")}
              className="absolute w-full max-w-md p-10 rounded-[2.5rem] bg-card border border-white/10 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-medium text-white">Frontend Developer</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {webSkills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-lg text-white/90">{skill}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-7 font-medium">Expert</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Circular Orbiting Icons */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10" />
             
             <div className="relative w-full h-full flex items-center justify-center">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeTab}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 0.6 }}
                   className="relative w-full h-full flex items-center justify-center"
                   style={{ rotate: rotation }}
                 >
                   {(activeTab === "web" ? webSkills : dataSkills).map((skill, index, arr) => {
                     const Icon = iconMap[skill];
                     const angle = (index / arr.length) * 2 * Math.PI;
                     const radius = 220;
                     const x = Math.cos(angle) * radius;
                     const y = Math.sin(angle) * radius;
                     return (
                       <motion.div 
                         key={skill} 
                         className="absolute p-5 bg-card border border-white/10 rounded-full shadow-2xl hover:border-primary transition-colors cursor-pointer group"
                         style={{ x, y, rotate: -rotation }}
                         whileHover={{ scale: 1.2 }}
                       >
                         {Icon && <Icon className="text-4xl text-primary" />}
                         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded text-xs text-white font-bold whitespace-nowrap">
                           {skill}
                         </div>
                       </motion.div>
                     );
                   })}
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
