import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate Android Developer with a drive for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a results-driven Software Engineer and Android Developer with a strong foundation 
                in Java and Android Development. Currently pursuing my B.Tech in Electronics & 
                Communication Engineering at Netaji Subhash Engineering College, Kolkata.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for building applications that solve real-world problems, I continuously 
                enhance my technical expertise. My journey includes securing 4th place at the prestigious 
                Kod-E-Thon National Hackathon, where I developed innovative solutions under time constraints.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-muted-foreground">B.Tech in ECE</p>
                  <p className="text-sm text-muted-foreground">Netaji Subhash Engineering College</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Timeline</h4>
                  <p className="text-muted-foreground">2023 - 2027</p>
                  <p className="text-sm text-muted-foreground">Expected Graduation</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Kolkata, India</p>
                  <p className="text-sm text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Focus</h4>
                  <p className="text-muted-foreground">Android Development</p>
                  <p className="text-sm text-muted-foreground">Java, Kotlin, Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;