import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Roadmap complète pour développeurs</span>
          </div>
          
          {/* Title */}
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Guide pour{" "}
            <span className="text-gradient">Aspirants Développeurs</span>
          </h1>
          
          {/* Description */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Recommandations pour se former efficacement, construire un vrai portfolio, 
            et acquérir les compétences clés recherchées en entreprise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-effect"
              onClick={() => document.getElementById('basics')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code2 className="h-5 w-5" />
              Commencer l'apprentissage
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById('frontend')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorer la roadmap
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-10">
            <div>
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="mt-1 text-sm text-muted-foreground">Sections clés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Ressources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">Gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};