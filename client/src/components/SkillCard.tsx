import { motion } from "framer-motion";
import type { Skill } from "@shared/schema";
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiDocker, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiGit, SiMongodb, SiMysql, SiLinux, SiOracle, SiExpress, SiCplusplus, SiOpenjdk, SiTensorflow } from "react-icons/si";

// Map icon strings to components
const iconMap: Record<string, React.ElementType> = {
  "SiReact": SiReact,
  "SiNodedotjs": SiNodedotjs,
  "SiTypescript": SiTypescript,
  "SiPython": SiPython,
  "SiDocker": SiDocker,
  "SiPostgresql": SiPostgresql,
  "SiJavascript": SiJavascript,
  "SiHtml5": SiHtml5,
  "SiCss3": SiCss3,
  "SiGit": SiGit,
  "SiMongodb": SiMongodb,
  "SiMysql": SiMysql,
  "SiLinux": SiLinux,
  "SiOracle": SiOracle,
  "SiExpress": SiExpress,
  "SiCplusplus": SiCplusplus,
  "SiOpenjdk": SiOpenjdk,
  "SiTensorflow": SiTensorflow,
  "ExpressJS": SiExpress,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Oracle": SiOracle,
  "Linux": SiLinux,
  "C++": SiCplusplus,
  "Java": SiOpenjdk,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "TensorFlow": SiTensorflow,
  "Git": SiGit
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon ? iconMap[skill.icon] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {Icon ? (
        <Icon className="text-4xl mb-4 text-muted-foreground hover:text-primary transition-colors duration-300" />
      ) : (
        <div className="w-10 h-10 mb-4 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
          {skill.name[0]}
        </div>
      )}
      <h4 className="font-semibold text-foreground">{skill.name}</h4>
      {skill.proficiency && (
        <div className="w-full mt-3 h-1.5 bg-secondary/20 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: skill.proficiency }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      )}
    </motion.div>
  );
}
