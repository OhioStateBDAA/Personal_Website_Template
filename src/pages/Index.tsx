
import { useEffect } from 'react';
import Header from '@/components/Header';
import RoleCard from '@/components/RoleCard';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import LinkCard from '@/components/LinkCard';
import { useTheme } from '@/hooks/useTheme';
import { Code, Database, Globe, MessageSquare, PenTool, Play } from 'lucide-react';

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
          
          <RoleCard 
            company="Technology Inc"
            role="Engineering, AI"
            period="2023 - Present"
            location="San Francisco, CA"
            description="Leading the development of real-time multimodal intelligence solutions. Working with cutting-edge AI models and diverse data sources."
            tags={["Python", "TensorFlow", "React", "AWS"]}
          />
          
          <RoleCard 
            company="Innovation Labs"
            role="Software Engineer"
            period="2022 - 2023"
            location="New York, NY"
            description="Developed scalable web applications and APIs. Implemented CI/CD pipelines and contributed to system architecture decisions."
            tags={["JavaScript", "Node.js", "Docker", "PostgreSQL"]}
          />
          
          <RoleCard 
            company="Global Tech"
            role="ML Engineer"
            period="2021 - 2022"
            description="Built machine learning models for demand forecasting with millions of users. Improved prediction accuracy by 32%."
            tags={["Python", "Scikit-learn", "PyTorch", "Kafka"]}
          />
          
          <RoleCard 
            company="Data Solutions"
            role="Data Scientist"
            period="2020"
            description="Analyzed large datasets to extract business insights. Created interactive dashboards for executive leadership."
            tags={["R", "SQL", "Tableau", "Big Data"]}
          />
        </section>

        {/* Projects */}
        <section>
          <SectionTitle title="Projects" />
          
          <ProjectCard 
            logo={<PenTool className="h-4 w-4" />}
            title="AI Creative Assistant"
            description="AI platform for generating creative content"
            year="2023"
            link="#"
          />
          
          <ProjectCard 
            logo={<Globe className="h-4 w-4" />}
            title="Open Source Intelligence"
            description="Framework for LLMs focused on bias detection"
            year="2023"
            link="#"
          />
          
          <ProjectCard 
            logo={<Play className="h-4 w-4" />}
            title="Smart Media Platform"
            description="AI-powered content creation tool"
            year="2022"
            link="#"
          />
          
          <ProjectCard 
            logo={<MessageSquare className="h-4 w-4" />}
            title="Conversation AI"
            description="Advanced dialogue system for healthcare"
            year="2022"
            link="#"
          />
          
          <ProjectCard 
            logo={<Database className="h-4 w-4" />}
            title="Data Analytics Suite"
            description="ML algorithms for financial analysis"
            year="2021"
            link="#"
          />
        </section>

        {/* Personal Links */}
        <section>
          <SectionTitle title="Personal Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LinkCard 
              title="portfolio.app"
              description="A beautiful tool to showcase your work with modern design"
              url="#"
            />
            
            <LinkCard 
              title="subscriptions.app"
              description="One-page tool for tracking all your subscriptions"
              url="#"
            />
            
            <LinkCard 
              title="chat.app"
              description="Simple personal chat interface with AI assistants"
              url="#"
            />
            
            <LinkCard 
              title="opensource.app"
              description="Open-source multilingual AI playground"
              url="#"
            />
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
