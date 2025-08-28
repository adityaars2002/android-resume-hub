import { ExternalLink, Github, Shield, DollarSign, Utensils, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Women's Safety App",
      description: "Developed an SOS system that detects sudden motion changes to trigger alerts with real-time location sharing and optimized motion sensor processing for accurate distress detection.",
      tech: ['Java', 'Android Studio', 'Firebase', 'Motion Sensors'],
      icon: <Shield className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
      features: [
        'SOS system with motion detection',
        'Real-time location sharing',
        'Optimized motion sensor processing',
      ],
      github: 'https://github.com',
    },
    {
      title: 'Paisa Controller',
      description: 'Personal Finance Manager app with expense tracking, budgeting capabilities, and Firebase Realtime Database integration for seamless user data management.',
      tech: ['Java', 'Android Studio', 'Firebase', 'Material Design'],
      icon: <DollarSign className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Expense tracking and budgeting',
        'Firebase Realtime Database',
        'User-friendly dashboard with analytics',
      ],
      github: 'https://github.com',
    },
    {
      title: 'Food Ordering Website',
      description: 'Responsive web-based food ordering platform with dynamic menu filtering, order management, and mobile-friendly UI/UX using CSS Flexbox and Grid.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: <Utensils className="h-8 w-8" />,
      color: 'from-orange-500 to-yellow-500',
      features: [
        'Dynamic menu filtering',
        'Order management system',
        'Mobile-friendly responsive design',
      ],
      github: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:shadow-elevated transition-all group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;