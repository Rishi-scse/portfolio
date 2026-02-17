import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Rishi Raj Verma
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-slate-300 mb-3"
          >
            Android Developer & Software Engineer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-400 mb-8"
          >
            BTech CSE @ Galgotias University | Building innovative mobile solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <a
              href="mailto:vermaankush427@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            
            <a
              href="https://github.com/Rishi-scse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex justify-center gap-6 text-slate-400"
          >
            <a href="https://linkedin.com/in/rishi-raj-verma-090564324" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="tel:+918789514968" className="hover:text-cyan-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/Rishi-rajverma2002" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Code2 className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full p-1"
        >
          <motion.div className="w-1 h-2 bg-cyan-400 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
