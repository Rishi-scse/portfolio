import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Code2, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vermaankush427@gmail.com",
      href: "mailto:vermaankush427@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8789514968",
      href: "tel:+918789514968",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, UP",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rishi-scse",
      username: "Rishi-scse"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rishi-raj-verma-090564324",
      username: "rishi-raj-verma"
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/Rishi-rajverma2002",
      username: "Rishi-rajverma2002"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((contact, idx) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.4 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{contact.label}</p>
                        <p className="text-white text-lg group-hover:text-cyan-400 transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                      <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg`}>
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{contact.label}</p>
                        <p className="text-white text-lg">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="pt-6">
                <h4 className="text-xl font-bold text-white mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6, duration: 0.4 }}
                      className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 group"
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm currently seeking opportunities for Android development roles and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-2">📱 Mobile Development</h4>
                  <p className="text-slate-400">Android apps with Kotlin, Jetpack Compose, and modern architecture patterns</p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-2">🤖 AI Integration</h4>
                  <p className="text-slate-400">AI-powered applications with machine learning and NLP capabilities</p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-2">🔧 Full Stack</h4>
                  <p className="text-slate-400">Complete solutions with Node.js backends and modern databases</p>
                </div>
              </div>

              <a
                href="mailto:vermaankush427@gmail.com"
                className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
