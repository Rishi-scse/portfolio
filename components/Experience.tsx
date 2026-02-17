import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Award, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: "internship",
    icon: Briefcase,
    title: "Android Application Development Intern",
    organization: "CodeSoft",
    location: "Remote, India",
    duration: "Nov 2025 - Dec 2025",
    description: "Developed scalable mobile applications using Kotlin/Java, implementing Clean Architecture, Material Design, and REST API integration. Managed the end-to-end development lifecycle, from UI design to APK generation and testing, ensuring high-quality code delivery.",
    highlights: [
      "Implemented Clean Architecture and MVVM pattern",
      "Integrated REST APIs with 40-42% efficiency improvement",
      "End-to-end app development and deployment"
    ],
    color: "from-cyan-500 to-blue-500"
  }
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology in Computer Science and Engineering",
    organization: "Galgotias University",
    location: "Greater Noida, UP",
    duration: "Sept 2022 - June 2026",
    description: "Aggregate: 70% | Coursework: Data Structures & Algorithms, DBMS, OS, Software Engineering, AI & NLP",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: GraduationCap,
    title: "Higher Secondary School (Class XII)",
    organization: "PPM School",
    location: "Jehanabad, Bihar",
    duration: "Mar 2019 - July 2021",
    description: "Percentage: 72%",
    color: "from-indigo-500 to-purple-500"
  }
];

const certifications = [
  {
    icon: Award,
    title: "Introduction to Packet Tracer",
    issuer: "CISCO Networking Academy",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Award,
    title: "Oracle Database Programming with SQL",
    issuer: "ORACLE Academy",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Award,
    title: "NPTEL Software Engineering",
    issuer: "Skill India",
    color: "from-indigo-500 to-purple-500"
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-slate-950" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
            
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-r ${exp.color} p-4 rounded-xl`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-cyan-400 mb-2">{exp.organization}</p>
                    <div className="flex items-center gap-4 text-slate-400 mb-4">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: idx * 0.2 + 0.2, duration: 0.6 }}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${edu.color} p-3 rounded-lg`}>
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                      <p className="text-lg text-cyan-400 mb-2">{edu.organization}</p>
                      <div className="flex items-center gap-4 text-slate-400 text-sm mb-2">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.duration}</span>
                      </div>
                      <p className="text-slate-300">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-400">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
