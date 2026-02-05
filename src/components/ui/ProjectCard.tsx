
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Loader2, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { improveProjectDescriptions } from '@/ai/flows/improve-project-descriptions';
import { useToast } from '@/hooks/use-toast';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  outcomes: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, problem, solution, tech, outcomes, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  const [currentDescription, setCurrentDescription] = useState(description);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isImproving, setIsImproving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleImprove = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImproving(true);
    try {
      const result = await improveProjectDescriptions({ projectDescription: currentDescription });
      setCurrentDescription(result.improvedDescription);
      setKeywords(result.suggestedKeywords);
      toast({
        title: "Portfolio Intelligence",
        description: "Project narrative enhanced with professional AI logic.",
      });
    } catch (error) {
      toast({
        title: "AI Service Interrupted",
        description: "Unable to polish description at this time.",
        variant: "destructive"
      });
    } finally {
      setIsImproving(false);
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-card rounded-[3rem] overflow-hidden flex flex-col h-full transition-all duration-700 hover:shadow-[0_30px_60px_rgba(var(--primary-rgb),0.12)] group"
    >
      {/* Cinematic Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Tech Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
          {tech.slice(0, 3).map((t) => (
            <span key={t} className="px-4 py-1.5 glass-card text-[10px] font-black uppercase tracking-[0.15em] text-primary border-white/20 rounded-2xl shadow-lg">
              {t}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center"
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full w-10 h-10 glass-card border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              if (githubUrl) window.open(githubUrl, '_blank');
            }}
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            className="rounded-full w-12 h-12 shadow-xl shadow-primary/20 bg-primary text-white hover:bg-accent hover:scale-110 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              if (liveUrl) window.open(liveUrl, '_blank');
            }}
          >
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <div className="p-8 space-y-6 flex-grow flex flex-col relative">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-primary tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass border-white/40 rounded-xl text-accent hover:bg-accent/10 transition-colors"
            onClick={handleImprove}
            disabled={isImproving}
          >
            {isImproving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          </motion.button>
        </div>

        <p className="text-muted-foreground leading-relaxed font-light text-[15px]">
          {currentDescription}
        </p>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/40 mt-auto">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-accent opacity-70">The Problem</span>
            <p className="text-xs text-muted-foreground line-clamp-2 italic">{problem}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Impact</span>
            <p className="text-xs text-primary/80 font-medium line-clamp-2">{outcomes}</p>
          </div>
        </div>

        <AnimatePresence>
          {keywords.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="pt-4"
            >
              <div className="flex flex-wrap gap-2">
                {keywords.map(kw => (
                  <span key={kw} className="text-[9px] font-bold text-accent px-2 py-0.5 rounded-full border border-accent/20 bg-accent/5">
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
