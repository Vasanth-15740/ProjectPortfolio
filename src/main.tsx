import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add intersection observer for section animations
const observeSections = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('section-fade-in');
      observer.observe(section);
    });
  }, 100);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize animations after the app has rendered
window.addEventListener('load', observeSections);