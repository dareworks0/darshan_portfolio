
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Agribot: Smart Agriculture Platform',
      description: 'Built a PWA for farmers with integrated DHT11 and soil moisture sensors for real-time data collection. Features ML-based crop and irrigation recommendations with chatbot functionality.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      tech: ['Python', 'IoT', 'Machine Learning', 'PWA'],
      github: '#',
      demo: 'https://drive.google.com/file/d/1joH2e6TDZ1FSDQyUJ__RhFqd7gyXW2VI/view?usp=sharing'
    },
    {
      title: 'ResearchHub: Comprehensive Research Platform',
      description: 'Full-stack platform for AI-powered paper discovery. Built with TypeScript/React frontend, Express.js backend, and MongoDB for seamless research paper management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      tech: ['TypeScript', 'React', 'Express.js', 'MongoDB'],
      github: '#',
      demo: 'https://drive.google.com/file/d/1M4UfEnWt_8gN8pWypt6HYT04pkhrOgZI/view?usp=sharing'
    },
    {
      title: 'VISION AI: Image & Video Upscaling',
      description: 'AI-powered quality enhancement for satellite, CCTV, and medical imaging using ESRGAN and GFPGAN for super-resolution with Python NLP for intelligent recommendations.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      tech: ['Python', 'AI', 'Computer Vision', 'NLP'],
      github: '#',
      demo: 'https://drive.google.com/file/d/1VB9Hv3pLfciLWtgA4S8Vg1A673Kp86l-/view?usp=sharing'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16"> 
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flip-card h-96">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front glass-effect border-primary/20 p-6 flex flex-col justify-center items-center">
                  <div 
                    className="w-full h-32 bg-cover bg-center rounded-lg mb-4"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <h3 className="text-xl font-semibold text-center mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Hover to learn more
                  </p>
                </div>

                {/* Back of card */}
                <div className="flip-card-back glass-effect border-primary/20 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
