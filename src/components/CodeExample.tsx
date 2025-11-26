import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Code } from "lucide-react";

interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
  language?: string;
}

export const CodeExample = ({ title, description, code, language = "javascript" }: CodeExampleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-card to-muted/20">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left transition-colors hover:bg-muted/10"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Code className="h-5 w-5 shrink-0 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-border/40 bg-muted/5">
          <pre className="p-4 overflow-x-auto text-sm">
            <code className="font-mono text-foreground">{code}</code>
          </pre>
        </div>
      )}
    </Card>
  );
};
