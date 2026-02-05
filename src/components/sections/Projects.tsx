
"use client";

import React from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const projects = [
  {
    title: 'Real-Time Public Transport Tracking',
    description: 'An intelligent system designed to provide live updates and route optimizations for public commuters using Python and Streamlit.',
    problem: 'Commuters in urban areas lack accurate real-time information regarding bus locations and expected arrival times.',
    solution: 'Developed an AI-driven dashboard that processes live GPS data to predict arrival times and suggest alternative routes.',
    tech: ['Python', 'Streamlit', 'AI/ML', 'Pandas', 'Folium'],
    outcomes: 'Reduced average commuter wait time by 15% in pilot testing areas through optimized routing.',
    imageKey: 'project-transport',
    githubUrl: 'https://github.com/khalidhassangithub',
    liveUrl: 'https://github.com/khalidhassangithub'
  },
  {
    title: 'Research/Dissertation Manager App',
    description: 'A comprehensive Android application for academic researchers to manage papers, deadlines, and collaborative research data.',
    problem: 'Academic research processes are often fragmented across multiple tools, leading to inefficiencies and lost data.',
    solution: 'Built a unified mobile platform using MVVM architecture and Firebase to centralize research document management.',
    tech: ['Kotlin', 'Firebase Auth', 'Firestore', 'MVVM', 'Coroutines'],
    outcomes: 'Streamlined communication between 50+ students and supervisors during a university-wide pilot.',
    imageKey: 'project-android-management',
    githubUrl: 'https://github.com/khalidhassangithub',
    liveUrl: 'https://github.com/khalidhassangithub'
  },
  {
    title: 'Forecasting Data Science Project',
    description: 'A time-series analysis and forecasting tool for retail sales prediction using machine learning models.',
    problem: 'Retailers struggle with inventory management due to unpredictable seasonal fluctuations in consumer demand.',
    solution: 'Implemented Prophet and LSTM models to forecast sales trends based on 5 years of historical transactional data.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Prophet', 'SQL'],
    outcomes: 'Achieved 92% forecasting accuracy, helping stakeholders reduce inventory waste by an estimated 10%.',
    imageKey: 'project-data-science',
    githubUrl: 'https://github.com/khalidhassangithub',
    liveUrl: 'https://github.com/khalidhassangithub'
  },
  {
    title: 'ML-Based Firebase Android App',
    description: 'A smart inventory tracking app for small businesses featuring on-device machine learning for barcode and object detection.',
    problem: 'Small businesses often use manual inventory methods which are prone to human error and are time-consuming.',
    solution: 'Integrated ML Kit with Firebase Storage to allow automatic item categorization via mobile camera.',
    tech: ['Kotlin', 'ML Kit', 'Firebase Storage', 'Room', 'Jetpack Compose'],
    outcomes: 'Reduced manual entry time by 40% while improving data accuracy through automated detection.',
    imageKey: 'project-ml-app',
    githubUrl: 'https://github.com/khalidhassangithub',
    liveUrl: 'https://github.com/khalidhassangithub'
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Selected <span className="text-accent text-gradient">Masterpieces</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light leading-relaxed">
              A showcase of innovation where engineering meets creative problem-solving.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project) => {
            const img = PlaceHolderImages.find(i => i.id === project.imageKey);
            return (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard
                  {...project}
                  imageUrl={img?.imageUrl || 'https://picsum.photos/seed/project/800/600'}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
