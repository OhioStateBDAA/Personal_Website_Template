
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import IconLink from './IconLink';

const Header = () => {
  return (
    <header className="py-6 flex justify-between items-center w-full max-w-4xl mx-auto px-6">
      <h1 className="text-2xl font-bold">Your Name</h1>
      
      <div className="flex items-center space-x-2">
        <IconLink 
          href="https://github.com" 
          icon={<Github className="h-5 w-5" />} 
          label="GitHub"
        />
        <IconLink 
          href="https://linkedin.com" 
          icon={<Linkedin className="h-5 w-5" />} 
          label="LinkedIn"
        />
        <IconLink 
          href="https://twitter.com" 
          icon={<Twitter className="h-5 w-5" />} 
          label="Twitter"
        />
        <IconLink 
          href="mailto:your-email@example.com" 
          icon={<Mail className="h-5 w-5" />} 
          label="Email"
        />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
