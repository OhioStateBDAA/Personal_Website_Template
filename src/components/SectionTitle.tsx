
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface SectionTitleProps {
  title: string;
  className?: string;
  resumeLink?: string;
}

const SectionTitle = ({ title, className, resumeLink }: SectionTitleProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className={cn("text-xl font-bold", className)}>
        {title}
      </h2>
      {resumeLink && (
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="border border-dashed hover-transition">
            Resume
          </Button>
        </a>
      )}
    </div>
  );
};

export default SectionTitle;
