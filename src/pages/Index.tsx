import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningSection } from "@/components/LearningSection";
import { TimelineItem } from "@/components/TimelineItem";
import { 
  BookOpen, 
  Users, 
  GitBranch, 
  Layout, 
  Server, 
  Palette,
  Terminal,
  Rocket,
  Lightbulb,
  ExternalLink,
  Shield,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />

        {/* Bonnes Pratiques */}
        <LearningSection
          id="basics"
          icon={<Lightbulb className="h-6 w-6" />}
          title="Bonnes pratiques pour apprendre"
          description="Les fondamentaux pour progresser efficacement dans votre apprentissage du développement."
          goals={[
            { title: "Construire des projets, même petits" },
            { title: "Toujours lire la documentation officielle" },
            { title: "Découper les problèmes en petites parties" },
            { title: "Refaire régulièrement ce qu'on a appris" },
            { title: "Travailler en équipe (pair programming)" },
          ]}
          resources={[
            { title: "Comment bien apprendre à coder", url: "https://www.youtube.com/watch?v=D9M66IseQwc" },
            { title: "Progresser rapidement en programmation", url: "https://youtu.be/TYTOWdgG4LQ" },
            { title: "Les erreurs des débutants", url: "https://www.youtube.com/watch?v=kkgXlUJFnVw" },
          ]}
        />

        {/* Soft Skills */}
        <div className="bg-gradient-to-b from-background to-muted/20">
          <LearningSection
            id="soft-skills"
            icon={<Users className="h-6 w-6" />}
            title="Soft Skills"
            description="Compétences essentielles pour devenir un bon développeur professionnel."
            resources={[
              { title: "MDN - Soft Skills Guide", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills" },
            ]}
          >
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Communication",
                "Autonomie",
                "Curiosité",
                "Rigueur",
                "Apprendre vite",
                "Travail en équipe",
              ].map((skill) => (
                <Card key={skill} className="bg-gradient-to-br from-card to-muted/20 p-4 text-center font-medium hover-lift">
                  {skill}
                </Card>
              ))}
            </div>
          </LearningSection>
        </div>

        {/* Git & GitHub */}
        <LearningSection
          id="git"
          icon={<GitBranch className="h-6 w-6" />}
          title="Git & GitHub"
          description="L'outil OBLIGATOIRE pour tout développeur moderne."
          goals={[
            { title: "Savoir créer un repo" },
            { title: "Faire des commits propres" },
            { title: "Créer une branche" },
            { title: "Faire une pull request" },
            { title: "Résoudre des conflits" },
          ]}
          resources={[
            { title: "Documentation officielle Git", url: "https://git-scm.com/doc" },
            { title: "GitHub Getting Started", url: "https://docs.github.com/en/get-started" },
            { title: "Cours complet Git", url: "https://www.youtube.com/watch?v=3fUbBnN_H2c" },
            { title: "GitHub pour débutants", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
          ]}
        />

        {/* Front-End Timeline */}
        <div className="bg-gradient-to-b from-background to-muted/20">
          <section id="frontend" className="py-20 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white glow-effect">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Timeline Front-End</h2>
                  <p className="text-lg text-muted-foreground">
                    Parcours d'apprentissage progressif pour maîtriser le développement front-end
                  </p>
                </div>

                <div className="space-y-0">
                  <TimelineItem
                    badge="01"
                    title="HTML / CSS / JavaScript"
                    description="Les fondamentaux du développement web"
                    resources={[
                      { title: "MDN Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/" },
                      { title: "JavaScript.info - Cours moderne", url: "https://javascript.info/" },
                      { title: "freeCodeCamp - HTML/CSS", url: "https://www.freecodecamp.org/learn/" },
                      { title: "TailwindCSS Documentation", url: "https://tailwindcss.com/docs" },
                    ]}
                  />

                  <TimelineItem
                    badge="02"
                    title="Framework Front-End"
                    description="React, Vue ou Angular pour construire des applications modernes"
                    resources={[
                      { title: "React Documentation", url: "https://react.dev/learn" },
                      { title: "Apprendre React en 1h", url: "https://www.youtube.com/watch?v=LDB4uaJ87e0" },
                      { title: "Projet React + Firebase", url: "https://www.youtube.com/watch?v=zgGhzuBZOQg" },
                    ]}
                    alternatives={[
                      { name: "VueJS", url: "https://vuejs.org/guide/introduction.html" },
                      { name: "Angular", url: "https://angular.dev/guide/intro" },
                    ]}
                    isLast
                  />
                </div>

                <Card className="mt-8 bg-primary/5 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Objectifs Front-End
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Créer des pages responsives
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Comprendre DOM, events, fetch()
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Savoir faire des composants
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Routing et appels API
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Gestion d'état (Redux/Zustand/Context)
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>
        </div>

        {/* Back-End Timeline */}
        <section id="backend" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-16 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white glow-effect">
                  <Server className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Timeline Back-End</h2>
                <p className="text-lg text-muted-foreground">
                  Développez des APIs robustes et des applications serveur performantes
                </p>
              </div>

              <div className="space-y-0">
                <TimelineItem
                  badge="01"
                  title="Bases Back-End"
                  description="Concepts fondamentaux du développement côté serveur"
                  resources={[
                    { title: "REST API expliqué", url: "https://www.youtube.com/watch?v=Q-BpqyOT3a8" },
                    { title: "Postman Course", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
                  ]}
                />

                <TimelineItem
                  badge="02"
                  title="Technologie Back-End"
                  description="Choisissez le langage dans lequel vous êtes le plus à l'aise"
                  resources={[
                    { title: "Node.js Documentation", url: "https://nodejs.org/en/learn" },
                    { title: "ExpressJS", url: "https://expressjs.com/" },
                  ]}
                  alternatives={[
                    { name: "Spring Boot (Java)", url: "https://spring.io/projects/spring-boot" },
                    { name: "Laravel (PHP)", url: "https://laravel.com/docs" },
                  ]}
                  isLast
                />
              </div>

              <Card className="mt-8 bg-secondary/5 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <Server className="h-5 w-5 text-secondary" />
                  Objectifs Back-End
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Créer une API CRUD complète
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Se connecter à une base SQL
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Implémenter l'authentification
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    Gérer l'upload de fichiers
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <div className="bg-gradient-to-b from-background to-muted/20">
          <section id="bonus" className="py-20 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white glow-effect">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Compétences Bonus</h2>
                  <p className="text-lg text-muted-foreground">
                    Élargissez vos compétences avec ces outils et technologies essentiels
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Palette className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Design & Prototypes</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Maîtrisez Figma pour créer des interfaces professionnelles
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://www.figma.com/resources/learn-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Figma Learn Design
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=FTFaQWZBqQ8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Apprendre Figma en 45min
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>

                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Linux & Terminal</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Devenez efficace avec la ligne de commande
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://ubuntu.com/tutorials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                      >
                        Ubuntu Tutorials
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>

                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Server className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">DevOps & Cloud</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Docker, CI/CD et déploiement d'applications
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://docs.docker.com/get-started/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        Docker Getting Started
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>

                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Déploiement</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Hébergez vos projets sur le web
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://vercel.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Vercel Documentation
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Netlify Guide
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>

                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Cybersécurité</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Sécurisez vos applications et comprenez les failles
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://owasp.org/www-project-top-ten/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                      >
                        OWASP Top 10
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://portswigger.net/web-security"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                      >
                        Web Security Academy
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>

                  <Card className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 p-6 hover-lift">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Intelligence Artificielle</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Intégrez l'IA dans vos applications modernes
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://platform.openai.com/docs/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        OpenAI Documentation
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="https://www.deeplearning.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        DeepLearning.AI
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/40 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Guide créé pour aider les aspirants développeurs dans leur parcours d'apprentissage.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Bonne chance dans votre aventure du code ! 🚀
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;