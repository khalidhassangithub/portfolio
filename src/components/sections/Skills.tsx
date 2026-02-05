"use client";

import React from 'react';
import { Smartphone, BarChart3, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const skillCategories = [
  {
    title: 'Data Science & Machine Learning',
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    skills: ['Python', 'R', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SQL', 'Hadoop', 'Apache Spark'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Android Development',
    icon: <Smartphone className="h-6 w-6 text-accent" />,
    skills: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'REST APIs', 'MVVM Architecture', 'Room Database', 'Jetpack Compose'],
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Visualization & Tools',
    icon: <Layers className="h-6 w-6 text-accent" />,
    skills: ['Streamlit', 'Power BI', 'Tableau', 'Git & GitHub', 'Docker', 'Postman', 'Linux'],
    color: 'from-orange-500/20 to-amber-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-primary mb-6 tracking-tight">Technical <span className="text-accent text-gradient">Core</span></h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
              A meticulously curated stack of technologies I leverage to architect next-generation solutions.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative glass-card p-10 rounded-[2.5rem] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)] group overflow-hidden`}
            >
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-8 flex items-center gap-5">
                  <div className="p-5 bg-primary/5 rounded-[1.5rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-black text-primary leading-tight tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary))', color: 'white', borderColor: 'transparent' }}
                      className="px-5 py-2 bg-background/50 dark:bg-white/5 text-primary/70 text-[10px] font-black uppercase tracking-[0.15em] rounded-2xl border border-primary/10 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_70%)] opacity-50 -z-10 pointer-events-none" />
    </section>
  );
}
