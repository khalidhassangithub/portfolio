
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-xl font-black tracking-tighter text-primary">KHALID <span className="text-accent">HASSAN</span></span>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs font-light">
            Architecting the future through data intelligence and mobile excellence.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-muted-foreground text-[13px] font-medium tracking-wide uppercase">
            &copy; {currentYear} Khalid Hassan Suliman
          </p>
          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-[0.2em]">
              Next.js • Tailwind • Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
