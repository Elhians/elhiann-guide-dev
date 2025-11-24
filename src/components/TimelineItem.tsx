import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  url: string;
}

interface TimelineItemProps {
  badge: string;
  title: string;
  description?: string;
  resources?: Resource[];
  alternatives?: { name: string; url: string }[];
  isLast?: boolean;
}

export const TimelineItem = ({
  badge,
  title,
  description,
  resources,
  alternatives,
  isLast,
}: TimelineItemProps) => {
  return (
    <div className="relative pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary glow-effect">
          <span className="font-mono text-xs font-bold text-white">{badge}</span>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="mb-2 text-2xl font-bold">{title}</h3>
          {description && (
            <p className="mb-4 text-muted-foreground">{description}</p>
          )}

          {/* Resources */}
          {resources && resources.length > 0 && (
            <div className="mb-4 space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {resource.title}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Alternatives */}
          {alternatives && alternatives.length > 0 && (
            <Card className="bg-muted/30 p-4">
              <h4 className="mb-2 text-sm font-semibold">Alternatives</h4>
              <div className="flex flex-wrap gap-2">
                {alternatives.map((alt, index) => (
                  <a
                    key={index}
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-background px-3 py-1.5 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {alt.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};