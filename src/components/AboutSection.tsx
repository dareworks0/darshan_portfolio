
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Who I Am Card */}
          <Card className="glass-effect border-primary/20 hover-scale">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3" size={28} />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a tech enthusiast constantly exploring new ideas and opportunities within 
                  the rapidly evolving tech landscape. With a deep passion for Machine Learning (ML), 
                  I'm constantly diving into the complexities of algorithms, neural networks, and 
                  data-driven insights.
                </p>
                <p>
                  Additionally, I'm intrigued by the world of cryptography, particularly 
                  cryptographic attacks and security. I believe that understanding vulnerabilities 
                  is crucial in developing robust systems that can withstand future risks.
                </p>
                <p>
                  As a teenager, I'm excited by the endless possibilities ahead and the chance to 
                  contribute to the next wave of technological advancements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="glass-effect border-primary/20 hover-scale">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-3" size={28} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {/* BE Computer Science */}
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">BE in Computer Science</h4>
                    <p className="text-sm text-primary font-medium">Undergrad • Expected May 2026</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Currently pursuing bachelor's degree in Computer Science
                    </p>
                  </div>
                </div>

                {/* Higher Secondary School */}
                <div className="border-l-2 border-primary/60 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/60 rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Higher Secondary School (Science)</h4>
                    <p className="text-sm text-muted-foreground">HSS • 2022</p>
                    <p className="text-lg font-semibold text-green-400 mt-1">77.50%</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Focused on Physics, Chemistry, Mathematics, and Computer Science
                    </p>
                  </div>
                </div>

                {/* State Secondary School */}
                <div className="border-l-2 border-primary/40 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/40 rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">State Secondary School</h4>
                    <p className="text-sm text-muted-foreground">SSS • 2020</p>
                    <p className="text-lg font-semibold text-green-400 mt-1">94.80%</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Strong foundation in science and mathematics
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
