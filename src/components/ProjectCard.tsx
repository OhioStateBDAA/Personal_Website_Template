
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  logo?: React.ReactNode;
  title: string;
  description: string;
  year: string;
  link?: string;
  details?: string;
  tags?: string[];
}

const ProjectCard = ({
  logo,
  title,
  description,
  year,
  link,
  details,
  tags
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const headerContent = (
    <div className="flex items-center space-x-3">
      {logo && <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-secondary">
        {logo}
      </div>}
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-sm">{year}</div>
    </div>
  );

  return (
    <div className={cn(
      "mb-3 origami-fold dashed-border rounded-lg hover-transition hover:bg-accent/10",
      "hover-float"
    )}>
      <div 
        className="p-4 flex justify-between items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {headerContent}
          </a>
        ) : (
          headerContent
        )}
      </div>
      
      {(details || tags) && (
        <div className={cn("origami-fold-content overflow-hidden transition-all duration-400", 
          isOpen ? "origami-fold-open" : "origami-fold-closed")}>
          <div className="p-4 pt-2 border-t border-dashed px-[16px] my-0 py-[16px]">
            {details && <p className="text-sm mb-3">{details}</p>}
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md hover-transition">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
