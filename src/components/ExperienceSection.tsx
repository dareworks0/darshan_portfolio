import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Intern at VESIT */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">ML Intern</h3>
                    <p className="text-primary font-medium">Vivekanand Education Society's Institute of Technology (VESIT)</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Dec 2024 - Jan 2025
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Studied Metal Organic Frameworks in CO₂ storage. Built predictive model for efficient 
                  storage using machine learning techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Development Intern - NGO */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Business Development Intern</h3>
                    <p className="text-primary font-medium">Janakalyan Multipurpose Education Society (NGO)</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    May 2025 - June 2025
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Supported community development by driving outreach and partnerships. Planning and managing the execution of various initiatives to enhance the NGO's impact.
                </p>
              </CardContent>
            </Card>
          </div>


          {/* Sr. Public Relations Officer */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Sr. Public Relations Officer</h3>
                    <p className="text-primary font-medium">Computer Society of India (CSI) - VESIT Chapter</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Aug 2024 - Present
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Leading communication initiatives and representing organization interests with external stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Administrator - VESLang Circle */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Administrator</h3>
                    <p className="text-primary font-medium">VESLang Circle</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    June 2025 - Present
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Coordinating operations and overseeing language-focused event execution.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sr. Member - VESLang Circle */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Sr. Member</h3>
                    <p className="text-primary font-medium">VESLang Circle</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    July 2024 - May 2025
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Active contributor to programming language discussions and development initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Manager - International Opportunities - VESIT */}
          <div className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="glass-effect border-primary/20 hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Manager - International Opportunities</h3>
                    <p className="text-primary font-medium">VESIT</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Oct 2024 - Present
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Facilitating global outreach and student opportunity partnerships.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
