
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for theme preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

createRoot(document.getElementById("root")!).render(<App />);
