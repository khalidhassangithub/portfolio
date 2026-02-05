"use client";

import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "khalidhassasuliman@gmail.com",
      href: "mailto:khalidhassasuliman@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/khalidhassangithub",
      href: "https://github.com/khalidhassangithub"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/khalidhassansuliman",
      href: "https://www.linkedin.com/in/khalid-hassan-suliman-028671231"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                  Let&apos;s Build Something <span className="text-accent text-gradient">Extraordinary</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-muted-foreground text-xl font-light leading-relaxed">
                  Whether you have a question or want to discuss a new project, my inbox is always open for innovation.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:rotate-6">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">{info.label}</span>
                    <span className="text-lg font-bold text-primary group-hover:text-primary/70 transition-colors duration-300">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-24 w-24 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 h-12 w-12 bg-accent rounded-full animate-pulse" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Your Name</label>
                  <Input placeholder="John Doe" className="h-14 bg-white/50 border-white/40 rounded-2xl focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-14 bg-white/50 border-white/40 rounded-2xl focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Subject</label>
                <Input placeholder="Project Collaboration" className="h-14 bg-white/50 border-white/40 rounded-2xl focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Message</label>
                <Textarea placeholder="Tell me about your vision..." className="min-h-[150px] bg-white/50 border-white/40 rounded-2xl focus:ring-accent resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                Send Message <Send className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(var(--accent-rgb),0.05)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  );
}
