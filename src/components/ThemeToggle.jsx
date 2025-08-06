'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const stored = localStorage.getItem('theme');
      if (stored) return; // user has manually set theme

      const isDark = media.matches;
      setDarkMode(isDark);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(isDark ? 'dark' : 'light');
    };

    media.addEventListener?.('change', handleChange);
    return () => media.removeEventListener?.('change', handleChange);
  }, []);

  const toggle = (()  => {
    setDarkMode(prev => {
      const next = !prev;

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(next ? 'dark' : 'light');

      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (next === systemDark) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      }

      return next;
    });
  });


  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={toggle}
      />
      <div className="w-14 h-8 bg-muted-foreground rounded-full peer transition-colors" />
      <div className="absolute left-1 top-1 w-6 h-6 rounded-full transform transition-transform peer-checked:translate-x-6 bg-background">
        {darkMode ? (
          <Sun className="w-4 h-4 text-yellow-500 m-1" />
        ) : (
          <Moon className="w-4 h-4 text-accent m-1" />
        )}
      </div>
    </label>
  );
}
