"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

export function About() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square bg-muted">
              <Image
                src="/profile.jpeg"
                alt="Khalid Hassan Suliman"
                width={500}
                height={500}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                data-ai-hint="professional man"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Premium Animated Border */}
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-[2rem] -z-0 group-hover:border-accent/40 transition-colors duration-500 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-1 border border-accent/10 rounded-[1.5rem] -z-0" />

            <div className="absolute -bottom-6 -left-6 glass-card p-8 rounded-3xl hidden md:block animate-in fade-in slide-in-from-left-4 duration-1000 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)]">
              <span className="text-primary font-black text-3xl">5+</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-accent font-bold mt-1">Project Areas</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl font-bold text-primary tracking-tight">The Visionary <span className="text-accent">Architect</span></h2>
            </Reveal>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <Reveal delay={0.3}>
                <p>
                  I am a <span className="text-primary font-medium">Data Science Engineer</span> and <span className="text-primary font-medium">Android Developer</span> dedicated to bridging the gap between raw data and impactful user experiences. My work is fueled by a pursuit of technical excellence and a passion for intelligent automation.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p>
                  With a deep understanding of <span className="text-accent font-medium">Machine Learning</span> and <span className="text-accent font-medium">Mobile Ecosystems</span>, I build applications that are not just tools, but intelligent companions. I specialize in turning complex datasets into scalable, production-ready solutions.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div className="pt-8 border-t border-border/50 grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-primary font-bold text-lg mb-1">Architecture</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold opacity-70">MVVM • Clean Code</span>
                </div>
                <div>
                  <span className="block text-primary font-bold text-lg mb-1">Intelligence</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold opacity-70">Predictive Modeling</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
