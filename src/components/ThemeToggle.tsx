
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full flex items-center justify-center origami-fold hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 animate-mode-toggle" />
      ) : (
        <Sun className="h-5 w-5 animate-mode-toggle" />
      )}
    </button>
  );
};

export default ThemeToggle;
