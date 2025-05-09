
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  logo?: React.ReactNode;
  title: string;
  description: string;
  year: string;
  link?: string;
}

const ProjectCard = ({
  logo,
  title,
  description,
  year,
  link
}: ProjectCardProps) => {
  const content = (
    <>
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
    </>
  );

  return (
    <div className={cn(
      "mb-4 p-4 rounded-lg bg-card hover-transition paper-shadow hover:bg-accent/50",
      "hover-float"
    )}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ProjectCard;
