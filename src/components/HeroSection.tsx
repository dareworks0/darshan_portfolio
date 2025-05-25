
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="/lovable-uploads/4deab3b5-0bcc-41a9-8060-887af173df87.png"
                alt="Darshan Kakad"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-poppins">
            Darshan Kakad
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Exploring AI, IoT & Cryptography to Shape the Future
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tech enthusiast and aspiring computer science engineer passionate about 
            machine learning, artificial intelligence, and innovative solutions.
          </p>

          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://github.com/dareworks0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-4 rounded-full glass-effect hover-scale shadow-lg hover:shadow-xl"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/dareworks0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-4 rounded-full glass-effect hover-scale shadow-lg hover:shadow-xl"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
