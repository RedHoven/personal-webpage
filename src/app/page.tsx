import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="font flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 p-4 md:w-2/3 sm:w-full mx-auto">
        {/* Name and about section. */}
        <div className="text-2xl font-sans sm:flex sm:items-center px-4 py-2 text-left mx-auto">
          <div>
            <h1 className="text-accent"><b>Yahor Dziomin</b></h1>
            <p className="text-muted-foreground text-xl md:text-2xl">Eager to advance <span className="text-accent">AI technology</span> and its applications.</p> 
            <p className="text-muted-foreground text-xl md:text-2xl">I&apos;m a master student at <span className="text-accent">TU Delft</span>, Developer Trainee at <span className="text-accent">SyreSync</span> (Visma). </p>
          </div>
        </div>
        {/* Right Column - Links */}
        <div className="flex text-2xl flex-col font-sans items-start p-4 sm:py-0 sm:px-4 w-full md:w-1/2 mx-auto text-left">
            <a
              href="/RedHoven/cv/"
              target="_blank"
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
  );
}
