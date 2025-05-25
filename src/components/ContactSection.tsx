import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_vybull8', // Your service ID
        'template_qo5z72a', // Updated template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Darshan Kakad',
        },
        'bB38LjrGdJ8Cdc34x' // Your public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'darshankakad00@gmail.com',
      href: 'mailto:darshankakad00@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'dareworks0',
      href: 'https://github.com/dareworks0'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'dareworks0',
      href: 'https://linkedin.com/in/dareworks0'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-poppins">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on innovative projects and explore new opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary min-h-32"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                or simply having a conversation about technology and its possibilities. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover-scale">
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-primary/20 rounded-full">
                        <info.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-center text-muted-foreground">
                © 2025 Darshan Kakad. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
