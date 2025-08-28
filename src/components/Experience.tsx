import { Trophy, Users, Lightbulb, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Hackathon Finalist',
      organization: 'Kod-E-Thon',
      period: 'March 2025',
      description: '4th Place Winner',
      highlights: [
        'Developed an innovative application under time constraints',
        'Designed and implemented mobile architectures for real-time processing',
        'Competed among 100+ teams at national level',
      ],
      icon: <Trophy className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Core Volunteer',
      organization: 'CSR Club, NSEC',
      period: '2024 - Present',
      description: 'Community Service & Tech Education',
      highlights: [
        'Led and contributed to social impact projects',
        'Merged technology with humanitarian efforts',
        'Organized community-driven tech workshops for underprivileged students',
      ],
      icon: <Users className="h-6 w-6" />,
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const achievements = [
    {
      title: '4th Place',
      subtitle: 'National-Level Hackathon',
      detail: 'Kod-E-Thon',
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: 'Mobile Apps',
      subtitle: 'Firebase Integration',
      detail: 'Multiple Projects',
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ];

  const certifications = [
    {
      title: 'Java Programming',
      issuer: 'Udemy',
      date: 'April 2024',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Certificate of Participation',
      issuer: 'Kod-E-Thon',
      date: 'March 2025',
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey and milestones
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.organization}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">▸</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Achievements */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {achievement.icon}
                  </div>
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                    <p className="text-xs text-primary">{achievement.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {cert.icon}
                  </div>
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;