"use client";

import { ExternalLink, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    setDarkMode(newMode);
  };

  const prefix = process.env.NODE_ENV === 'production' ? '/personal-webpage' : '';
  return (
    <div className="bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <label className="relative inline-flex items-center cursor-pointer transform scale-100 md:scale-120">
          {/* hidden checkbox */}
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={toggleTheme}
          />
          {/* rail */}
          <div className="w-14 h-8 bg-muted-foreground peer-hover:bg-accent peer-focus:ring-accent rounded-full peer transition-colors"></div>
          {/* ball */}
          <div
            className={`
              absolute left-1 top-1 bg-background w-6 h-6 rounded-full
              transform transition-transform
              peer-checked:translate-x-6
            `}
          >
            {/* dynamic icon inside ball */}
            {darkMode ? (
              <Sun className="w-4 h-4 text-yellow-500 m-1" />
            ) : (
              <Moon className="w-4 h-4 text-accent m-1" />
            )}
          </div>
        </label>
      </div>
      <div className="font flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 p-4 md:w-3/4 sm:w-full mx-auto">
          {/* Name and about section. */}
          <div className="text-2xl font-sans sm:flex sm:items-center px-4 py-2 text-left mx-auto">
            <div>
              <h1 className="text-accent"><b>Yahor Dziomin</b></h1>
              <p className="text-muted-foreground text-xl md:text-2xl">Eager to advance <span className="text-accent">AI technology</span> and its applications.</p> 
              <p className="text-muted-foreground text-xl md:text-2xl">Master student at&nbsp;
                <span className="text-accent"> 
                  <a href="https://www.tudelft.nl/en/">
                    TU Delft
                    <ExternalLink className="w-4 h-4 inline-block align-center mx-1" />
                  </a>
                </span>, 
                Developer Trainee at <span className="text-accent">
                  <a href="https://suresync.nl/en/">
                    SureSync
                    <ExternalLink className="w-4 h-4 inline-block align-center mx-1" />
                  </a>
                </span>(Visma).
              </p>
            </div>
          </div>
          {/* Right Column - Links */}
          <div className="flex text-2xl flex-col font-sans items-start p-4 sm:py-0 sm:px-4 w-full md:w-1/4 mx-auto text-left">
              <a
                href={`${prefix}/cv`}
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="mr-2">CV</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/RedHoven"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="mr-2">GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/yahor-dziomin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="mr-2">LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="mailto:yahor.dziomin@gmail.com"
                target="_blank"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="mr-2">Email</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
