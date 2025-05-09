
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface RoleCardProps {
  logo?: React.ReactNode;
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  tags?: string[];
}

const RoleCard = ({
  logo,
  company,
  role,
  period,
  location,
  description,
  tags
}: RoleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const headerContent = (
    <div className="flex items-center space-x-3">
      {logo && <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-secondary">
        {logo}
      </div>}
      <div>
        <h3 className="font-bold">{company}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );

  return (
    <div className="mb-3 origami-fold dashed-border rounded-lg hover-transition hover:bg-accent/10">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {headerContent}
        </div>
        <div className="text-right">
          <p className="text-sm">{period}</p>
          {location && <p className="text-xs text-muted-foreground">{location}</p>}
        </div>
      </div>
      
      <div className={cn("origami-fold-content overflow-hidden transition-all duration-500", 
        isOpen ? "origami-fold-open" : "origami-fold-closed")}>
        <div className="p-4 pt-2 border-t border-dashed px-[16px] my-0 py-[20px]">
          {description && <p className="text-sm mb-3">{description}</p>}
          
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
    </div>
  );
};

export default RoleCard;
