import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next Android project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about Android development!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:adityaraj@gmail.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">adityaraj@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
                  </div>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my repositories</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full gradient-primary text-primary-foreground hover:shadow-glow">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;