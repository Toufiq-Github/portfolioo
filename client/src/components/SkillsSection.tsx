import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiGit, 
  SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, 
  SiOpenjdk, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiHtml5, SiTailwindcss, SiNextdotjs, SiJavascript as SiJsIcon,
  SiOpencv, SiKeras, SiNumpy, SiPostgresql, SiFirebase, SiDocker, SiVite
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
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Docker": SiDocker,
  "Vite": SiVite,
};

const webSkills = ["React", "Node.js", "ExpressJS", "JavaScript", "TypeScript", "MongoDB", "MySQL", "Git", "HTML5", "Tailwind CSS", "Next.js", "PostgreSQL", "Firebase", "Vite"];
const dataSkills = ["Python", "TensorFlow", "PyTorch", "OpenCV", "Keras", "NumPy", "Pandas", "Scikit-Learn", "Docker"];

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
    <section id="skills" className="w-full h-full bg-white overflow-hidden relative flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10 py-6">
        <div className="mb-8">
          <span className="flex items-center gap-2 text-black font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mb-2 text-black text-center lg:text-left">
            Skills & <span className="text-gray-500">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
          {/* Left Side: Overlapping Palettes */}
          <div className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-start">
            <div className="w-full max-w-md relative mx-auto lg:mx-0">
              {/* Tab Header Controls */}
              <div className="flex gap-4 md:gap-6 mb-8 border-b border-gray-100 pb-4 justify-center lg:justify-start">
                <button 
                  onMouseEnter={() => setActiveTab("web")}
                  className={`px-5 py-2 rounded-full border transition-all relative font-medium text-sm md:text-base ${activeTab === "web" ? "bg-black text-white border-black shadow-lg" : "bg-white text-gray-400 border-gray-200 hover:border-gray-400"}`}
                >
                  Web Development
                </button>
                <button 
                  onMouseEnter={() => setActiveTab("data")}
                  className={`px-5 py-2 rounded-full border transition-all relative font-medium text-sm md:text-base ${activeTab === "data" ? "bg-black text-white border-black shadow-lg" : "bg-white text-gray-400 border-gray-200 hover:border-gray-400"}`}
                >
                  Data Science
                </button>
              </div>

              {/* Palette Content with Animation Presence */}
              <div className="relative h-[320px] md:h-[350px]">
                <AnimatePresence mode="popLayout">
                  {/* Web Palette Layering */}
                  <motion.div
                    key="web-palette"
                    initial={false}
                    animate={{
                      zIndex: activeTab === "web" ? 30 : 10,
                      y: activeTab === "web" ? 0 : 40,
                      x: activeTab === "web" ? 0 : 20,
                      scale: activeTab === "web" ? 1 : 0.95,
                      opacity: activeTab === "web" ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 p-6 md:p-8 rounded-[2rem] bg-gray-200/40 border border-gray-300/50 shadow-xl backdrop-blur-md cursor-pointer"
                  >
                    <div className="mb-6">
                      <h3 className={`text-xl font-medium ${activeTab === "web" ? "text-black" : "text-black/40"}`}>Web Development</h3>
                    </div>
                    {activeTab === "web" && (
                      <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4">
                        {webSkills.slice(0, 6).map((skill) => (
                          <div key={skill} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-black" />
                              <span className="font-medium text-sm md:text-base text-black">{skill}</span>
                            </div>
                            <span className="text-[10px] text-gray-500 ml-6 font-medium uppercase tracking-wider">Expert</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Data Palette Layering */}
                  <motion.div
                    key="data-palette"
                    initial={false}
                    animate={{
                      zIndex: activeTab === "data" ? 30 : 10,
                      y: activeTab === "data" ? 0 : 40,
                      x: activeTab === "data" ? 0 : 20,
                      scale: activeTab === "data" ? 1 : 0.95,
                      opacity: activeTab === "data" ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 p-6 md:p-8 rounded-[2rem] bg-gray-200/40 border border-gray-300/50 shadow-xl backdrop-blur-md cursor-pointer"
                  >
                    <div className="mb-6">
                      <h3 className={`text-xl font-medium ${activeTab === "data" ? "text-black" : "text-black/40"}`}>Data Science</h3>
                    </div>
                    {activeTab === "data" && (
                      <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4">
                        {dataSkills.slice(0, 6).map((skill) => (
                          <div key={skill} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-black" />
                              <span className="font-medium text-sm md:text-base text-black">{skill}</span>
                            </div>
                            <span className="text-[10px] text-gray-500 ml-6 font-medium uppercase tracking-wider">Expert</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Circular Orbiting Icons */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
             <div className="absolute inset-0 bg-gray-100/50 rounded-full blur-[80px] -z-10" />
             
             <div className="relative w-full h-full flex items-center justify-center scale-[0.6] md:scale-90 lg:scale-100">
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
                     const radius = 200;
                     const x = Math.cos(angle) * radius;
                     const y = Math.sin(angle) * radius;
                     return (
                       <motion.div 
                         key={skill} 
                         className="absolute p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:border-black transition-colors cursor-pointer group"
                         style={{ x, y, rotate: -rotation }}
                         whileHover={{ scale: 1.2 }}
                       >
                         {Icon && <Icon className="text-2xl md:text-3xl text-black" />}
                         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 border border-gray-100 px-3 py-1 rounded text-xs text-black font-bold whitespace-nowrap shadow-sm">
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
