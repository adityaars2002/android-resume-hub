import { Code2, Smartphone, Database, GitBranch, Cpu, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['Java', 'Kotlin', 'C', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Android Development',
      icon: <Smartphone className="h-6 w-6" />,
      skills: ['Android SDK', 'Android Studio', 'Firebase Auth', 'Real-time Database'],
      color: 'from-primary to-cyan-500',
    },
    {
      title: 'Frameworks & Tools',
      icon: <Layout className="h-6 w-6" />,
      skills: ['Android Studio', 'Git', 'GitHub', 'Gradle', 'XML'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Software Development',
      icon: <Cpu className="h-6 w-6" />,
      skills: ['OOP', 'Data Structures', 'Algorithms', 'DSA'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-glow transition-all group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-muted/50 text-foreground border border-border/50 
                             hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Mobile-first approach, responsive design, real-time features
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Algorithmic thinking, debugging, optimization
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Team leadership, community workshops, tech mentoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;