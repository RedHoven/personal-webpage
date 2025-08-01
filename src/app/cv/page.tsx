import { ExternalLink } from "lucide-react";

export default function Viewer() {
  const prefix = process.env.NODE_ENV === "production" ? "/personal-webpage" : "";
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile */}
      <div className="block md:hidden text-center font-sans w-full max-w-md mx-auto">
        <div className="text-2xl font-sans px-6 py-4 text-left">
          <p className="text-foreground mb-4 text-lg">
            You can download my CV below. For best viewing experience, use a computer.
          </p>
          <a
            href="/dziomin-cv-tudelft-2025.pdf"
            download
            className="flex items-center text-muted-foreground hover:text-accent transition-colors text-lg"
          >
            <span className="mr-2">Download CV</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full h-screen">
        <object
          data={`${prefix}/dziomin-cv-tudelft-2025.pdf`}
          type="application/pdf"
          className="w-full h-full"
        >
          <p className="text-center p-4 text-foreground font-sans">
            Your browser can&apos;t display PDFs.{" "}
            <a
              href={`${prefix}/dziomin-cv-tudelft-2025.pdf`}
              className="text-accent underline"
            >
              Download the CV here
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
}
