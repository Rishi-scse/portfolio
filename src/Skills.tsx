import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Kotlin", "Java", "C", "SQL (MySQL, Oracle)", "JavaScript"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Technologies",
    icon: Palette,
    skills: ["Jetpack Compose", "Node.js", "Retrofit", "Room DB", "MVVM", "Flutter", "MongoDB", "Firebase"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Tools & Frameworks",
    icon: Database,
    skills: ["Android Studio", "Git/GitHub", "VS Code", "REST API", "Clean Architecture", "Material Design"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Core Subjects",
    icon: Wrench,
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "AI & NLP", "Software Engineering"],
    color: "from-purple-500 to-pink-500"
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-slate-950" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.05 + 0.4, duration: 0.3 }}
                      className="px-4 py-2 bg-slate-800/80 text-slate-300 rounded-lg text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white hover:border-cyan-500/50 border border-slate-700 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
