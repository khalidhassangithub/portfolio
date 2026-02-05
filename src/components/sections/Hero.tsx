
"use client";

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <Reveal delay={0.2}>
            <h2 className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 tracking-[0.2em] opacity-80">
              Data Science Engineer & Android App Developer
            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tight mb-8 leading-[1.05]">
              Khalid Hassan <br />
              <span className="text-accent text-gradient">Suliman</span>
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed max-w-2xl">
              Architecting intelligent, data-driven systems and <span className="text-primary font-medium border-b-2 border-accent/30 pb-1">high-performance Android experiences</span> with precision and creative excellence.
            </p>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full px-10 h-14 text-md font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105" asChild>
                <a href="#projects">
                  Explore Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-md font-bold border-2 hover:bg-secondary/50 transition-all hover:scale-105" asChild>
                <a href="/resume.pdf">
                  Get Resume <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent rounded-full blur-[120px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[100px] pointer-events-none -z-0"
      />
    </section>
  );
}
