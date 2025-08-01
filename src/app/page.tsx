import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="font flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 p-4 md:w-1/2 sm:w-full mx-auto">
        {/* Name and about section. */}
        <div className="border text-2xl font-sans w-4/5 sm:flex sm:items-center px-4 py-2 text-left mx-auto">
          <div>
            <h1 className="text-accent"><b>name</b></h1>
            <h2 className="text-foreground">Master student at <span className="text-accent">TU Delft</span></h2>
            <br />
            <p>Welcome to my personal page! Stay tuned for more updates. Keep an eye on the page for new content!</p>
          </div>
        </div>
        {/* Right Column - Links */}
        <div className="border flex text-2xl flex-col font-sans items-start p-4 sm:py-0 sm:px-4 w-1/3 mx-auto text-left">
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
