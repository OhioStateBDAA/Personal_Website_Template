
import React from 'react';
import { cn } from '@/lib/utils';

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
  label: string;
}

const IconLink = ({ href, icon, className, label }: IconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors",
        className
      )}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default IconLink;
