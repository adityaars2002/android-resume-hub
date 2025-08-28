import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-dark">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute h-96 w-96 -top-48 -left-48 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/20">
              Android Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
            Hi, I'm <span className="text-gradient">Aditya Raj</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Results-driven Software Engineer specializing in{' '}
            <span className="text-primary font-semibold">Java</span> and{' '}
            <span className="text-primary font-semibold">Android Development</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            4th place winner at Kod-E-Thon National Hackathon | 
            Passionate about building innovative mobile solutions that solve real-world problems
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground hover:shadow-glow transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:shadow-glow transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:shadow-glow transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:adityaraj@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:shadow-glow transition-all"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;