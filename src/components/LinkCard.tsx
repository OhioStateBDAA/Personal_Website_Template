
import { ExternalLink } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
}

const LinkCard = ({ title, description, url }: LinkCardProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-3 p-4 rounded-lg dashed-border hover-transition hover:bg-accent/10 hover-float group"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-400" />
      </div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </a>
  );
};

export default LinkCard;
