"use client";

import { ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
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
                href="/cv"
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
