import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Legal AI Advisor",
    date: "Oct 2025",
    description: "An AI-driven legal assistance app that provides instant legal guidance using Gemini API and Node.js backend. Features MongoDB for secure document storage and a responsive UI built with Modern Android development practices.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini API", "Node.js", "MongoDB"],
    color: "from-cyan-500 to-blue-500",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
  title: "Advanced Alarm App",
  date: "Dec 2025",
  description: "A high-reliability alarm system using AlarmManager and Broadcast Receivers for persistent background tasks. Utilizes Room Database for local data persistence and features custom snooze logic to improve user experience.",
  tech: ["Kotlin", "Room Database", "Broadcast Receivers", "AlarmManager"],
  color: "from-blue-500 to-indigo-500",
  links: {
    github: "https://github.com/Rishi-scse/Advanced-Alarm-App"
  }
},
{
  title: "Daily Quote App",
  date: "Sep 2025",
  description: "A minimalist motivational app using Retrofit to fetch data from REST APIs and MVVM architecture for clean code structure. Features a one-tap share functionality allowing users to export quotes to social media platforms.",
  tech: ["Kotlin", "Retrofit", "MVVM", "REST API"],
  color: "from-indigo-500 to-purple-500",
  links: {
    github: "https://github.com/Rishi-scse/Daily-Quote-App"
  }
}

];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
                className="bg-slate-950/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                          aria-label="GitHub repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-md text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
