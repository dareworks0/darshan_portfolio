
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Wifi, Shield, Database, Users } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'Java', icon: Code, level: 85 },
    { name: 'Artificial Intelligence', icon: Brain, level: 80 },
    { name: 'Machine Learning', icon: Brain, level: 85 },
    { name: 'IoT', icon: Wifi, level: 75 },
    { name: 'Data Science', icon: Database, level: 80 },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: Users },
    { name: 'Communication', icon: Users },
    { name: 'Problem Solving', icon: Brain },
    { name: 'Leadership', icon: Users },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skill.icon className="text-primary mr-3" size={24} />
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover-scale">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="text-primary mx-auto mb-3" size={32} />
                    <h4 className="font-medium">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Info */}
            <Card className="glass-effect border-primary/20 mt-6">
              <CardContent className="p-6 text-center">
                <Shield className="text-primary mx-auto mb-3" size={32} />
                <h4 className="font-medium mb-2">Cryptography & Security</h4>
                <p className="text-sm text-muted-foreground">
                  Specialized interest in cryptographic attacks and security vulnerabilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
