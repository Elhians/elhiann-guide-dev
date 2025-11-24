import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Check } from "lucide-react";

interface LearningGoal {
  title: string;
}

interface Resource {
  title: string;
  url: string;
}

interface LearningSectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  goals?: LearningGoal[];
  resources?: Resource[];
  children?: ReactNode;
}

export const LearningSection = ({
  id,
  icon,
  title,
  description,
  goals,
  resources,
  children,
}: LearningSectionProps) => {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-12 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white glow-effect">
              {icon}
            </div>
            <div className="flex-1">
              <h2 className="mb-3 text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
          </div>

          {/* Custom Content */}
          {children}

          {/* Goals */}
          {goals && goals.length > 0 && (
            <Card className="mb-8 bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Check className="h-5 w-5 text-primary" />
                Objectifs
              </h3>
              <ul className="space-y-3">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{goal.title}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Resources */}
          {resources && resources.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Ressources recommandées</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {resource.title}
                        </span>
                        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};