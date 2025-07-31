import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border border-blue-500">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Name and about section. */}
        <div className="text-left text-2xl border w-full justify-center flex flex-col px-4">
          <h1><b>Yahor Dziomin</b></h1>
          <p>Welcome to my personal page!</p>
        </div>
        {/* Right Column - Links */}
          <div className="border flex flex-col items-start gap-4 sm:text-center p-4">
            <a
              href="/cv"
              className="flex items-center text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="mr-2">CV</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/RedHoven"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="mr-2">GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yahor-dziomin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="mr-2">LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="mailto:yahor.dziomin@gmail.com"
              className="flex items-center text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="mr-2">Email</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
      </div>
    </div>
  );
}
