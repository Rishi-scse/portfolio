import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Who I Am</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm a passionate Computer Science Engineering student specializing in Android development 
                    and AI-driven applications. With expertise in Kotlin, Java, and modern development frameworks, 
                    I create innovative mobile solutions that solve real-world problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Currently working as an Android Application Development Intern at CodeSoft, where I develop 
                    scalable mobile applications using Clean Architecture, Material Design, and modern Android 
                    development practices.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <p className="text-slate-300 text-lg">Bachelor of Technology in CSE</p>
                <p className="text-slate-400">Galgotias University (70% Aggregate)</p>
                <p className="text-slate-500 text-sm">Sept 2022 - June 2026</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                </div>
                <p className="text-slate-300 text-lg">Greater Noida, Uttar Pradesh</p>
                <p className="text-slate-400">Available for remote opportunities</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-3">Research Publication</h4>
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400">Primary Author:</span> "Code Legalist: An AI-Based 
                  Legal Advisor System" - Accepted for publication at an upcoming technical conference at Galgotias 
                  University (Feb 2026)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
