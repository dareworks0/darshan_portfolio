
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Github, Linkedin, Mail, Code, Briefcase, GraduationCap, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import MouseFollower from '@/components/MouseFollower';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <MouseFollower mousePosition={mousePosition} />
      <Navigation />
      
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Multiple gradient orbs with different animations */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-blue-500/20 rounded-full blur-3xl animate-drift"
          style={{
            right: `${(window.innerWidth - mousePosition.x) * 0.01}px`,
            bottom: `${(window.innerHeight - mousePosition.y) * 0.01}px`,
            transform: 'translate(50%, 50%)',
          }}
        />
        
        {/* Additional morphing orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-2xl animate-morph" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-500/20 via-purple-500/15 to-blue-500/10 blur-2xl animate-spiral" />
        
        {/* Floating geometric shapes with enhanced animations */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rotate-12 animate-drift" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-500/30 rotate-45 animate-spiral" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-blue-500/30 rotate-12 animate-float" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-500/40 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-morph" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/6 right-1/6 w-6 h-6 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 animate-drift" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-1/6 left-1/3 w-4 h-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full animate-spiral" style={{ animationDelay: '7s' }} />
        
        {/* Additional animated elements */}
        <div className="absolute top-1/3 right-1/2 w-12 h-12 border border-primary/20 rotate-45 animate-float" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-1/2 left-1/2 w-16 h-16 border border-purple-500/15 rounded-full animate-pulse-slow" style={{ animationDelay: '9s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
        
        {/* Moving light rays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-drift opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/3 to-transparent animate-spiral opacity-40" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
