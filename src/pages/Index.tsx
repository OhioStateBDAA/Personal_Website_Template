
import { useEffect } from 'react';
import Header from '@/components/Header';
import RoleCard from '@/components/RoleCard';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import LinkCard from '@/components/LinkCard';
import { useTheme } from '@/hooks/useTheme';
import { workExperiences, projects, personalLinks } from '@/data/portfolioData';

const Index = () => {
  const { theme } = useTheme();

  // Add light/dark mode class to body on initial load
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-12">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-10">
        {/* Introduction */}
        <section className="mb-8 origami-fold">
          <div className="mb-6">
            <h2 className="text-lg font-medium inline-flex items-center">
              <span className="mr-2">👋</span>
              Welcome to Your Portfolio
            </h2>
            <p className="mt-4 text-muted-foreground">
              I'm a passionate professional with experience in engineering and technology.
              Previously, I worked on innovative projects in multiple industries and now
              I'm focused on building cutting-edge solutions.
            </p>
            <p className="mt-4 text-muted-foreground">
              I enjoy traveling between New York and San Francisco, watching great movies,
              and exploring new culinary experiences.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <SectionTitle 
            title="Work Experience" 
            resumeLink="/resume.pdf" 
          />
          
          {workExperiences.map((experience, index) => (
            <RoleCard 
              key={index}
              company={experience.company}
              role={experience.role}
              period={experience.period}
              location={experience.location}
              description={experience.description}
              tags={experience.tags}
            />
          ))}
        </section>

        {/* Projects */}
        <section>
          <SectionTitle title="Projects" />
          
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              logo={<project.logo className="h-4 w-4" />}
              title={project.title}
              description={project.description}
              year={project.year}
              link={project.link}
              details={project.details}
              tags={project.tags}
            />
          ))}
        </section>

        {/* Personal Links */}
        <section>
          <SectionTitle title="Personal Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalLinks.map((link, index) => (
              <LinkCard 
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
              />
            ))}
          </div>
        </section>

        {/* Favorite Films Section */}
        <section>
          <SectionTitle title="Favorite Films" />
          
          <div className="grid grid-cols-4 gap-3">
            {/* Film placeholders */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item} 
                className="bg-secondary aspect-[2/3] rounded-md paper-shadow hover-transition hover-float"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
