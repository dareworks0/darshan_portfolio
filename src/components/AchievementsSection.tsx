
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Award, Trophy, ExternalLink } from 'lucide-react';

const AchievementsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: "Winner @Hack to Crack 2.0",
      description: "Awarded as the most innovative solution at Hack to Crack 2.0 hosted at ViMEET. The event challenged to push my limits on AI/ML and IoT. In this hackathon we were also praised for development of user friendly UI.",
      image: "/lovable-uploads/6d509b09-2e41-4faa-b728-cfd8d008bee0.png",
      date: "2025",
      category: "Hackathon",
      certificateLink: "https://drive.google.com/file/d/1gFbbR84TjwbMpdqst0iNOIJSmZ7GwuiU/view?usp=sharing"
    },
    {
      title: "Top 10 @Hack2Future",
      description: "Secured a top 10 position in the Hack2Future 2024 hackathon at IIIT Dharwad, competing among 1,700+ participants. Developed Vision AI, an advanced AI-powered solution for efficient video and image analysis, leveraging machine learning to enhance visual data processing. The project showcased innovation in real-time object detection, scene recognition, and automated insights.",
      image: "/lovable-uploads/16b65dec-43d8-463b-b35d-f38cc9ca8bb8.png",
      date: "2024",
      category: "Hackathon",
      certificateLink: "https://drive.google.com/file/d/1AfhJL-yqW0J1nTSDHlVlHtQkXEXGXulh/view?usp=sharing"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            MY ACHIEVEMENTS
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Achievement Card - Made smaller */}
          <div className="relative overflow-hidden rounded-2xl">
            <Card className="glass-effect border-primary/20 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 h-[400px]">
                  {/* Image Section */}
                  <div className="relative h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-l-2xl"
                      style={{ backgroundImage: `url(${achievements[currentSlide].image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-l-2xl" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-primary/20 text-primary text-xs rounded-full backdrop-blur-sm border border-primary/30 font-medium">
                        {achievements[currentSlide].category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-center h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Trophy className="text-primary" size={18} />
                      </div>
                      <span className="text-xs text-primary font-semibold tracking-wide">
                        {achievements[currentSlide].date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">
                      {achievements[currentSlide].title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {achievements[currentSlide].description}
                    </p>

                    {/* Certificate Link */}
                    <a
                      href={achievements[currentSlide].certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-200 font-semibold group text-sm"
                    >
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect hover-scale text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect hover-scale text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125 shadow-lg'
                    : 'bg-primary/30 hover:bg-primary/60 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
