
"use client";

import React from 'react';
import { Award, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    year: '2023',
    icon: <Award className="h-5 w-5" />
  },
  {
    title: 'Google Android Developer Professional Certificate',
    issuer: 'Google (Coursera)',
    year: '2022',
    icon: <CheckCircle2 className="h-5 w-5" />
  },
  {
    title: 'Data Science with Python',
    issuer: 'IBM',
    year: '2023',
    icon: <Award className="h-5 w-5" />
  },
  {
    title: 'Big Data Specialization',
    issuer: 'University of California, San Diego',
    year: '2022',
    icon: <GraduationCap className="h-5 w-5" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-4xl font-bold text-primary mb-12 tracking-tight flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                  <Award className="h-8 w-8" />
                </div>
                Professional <span className="text-accent text-gradient">Credentials</span>
              </h2>
            </Reveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="glass-card p-6 rounded-[2rem] border-primary/5 hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {cert.icon}
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-lg font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">{cert.issuer}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card p-10 rounded-[3rem] border-none bg-primary shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 blur-[80px] rounded-full group-hover:opacity-40 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="p-4 bg-white/10 w-fit rounded-2xl mb-8">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight tracking-tight">Academic & Professional Excellence</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-12">
                I continuously evolve my skill set with high-standard industry certifications, ensuring every technical solution I architect adheres to modern best practices in <span className="text-white font-medium border-b border-accent/50 pb-0.5">Data Intelligence</span>.
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center justify-center gap-3 bg-white text-primary py-5 px-8 rounded-2xl font-black uppercase tracking-[0.1em] text-sm shadow-xl hover:shadow-2xl transition-all"
            >
              Full Academic Transcript
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Orb */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
