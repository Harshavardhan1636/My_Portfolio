
import { AIFaceLogo } from "@/components/ai-face-logo";
import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { ExperienceTimeline } from "@/components/experience-timeline";
import ProjectCard from "@/components/project-card";
import { SkillsDisplay } from "@/components/skills-display";
import { Certifications } from "@/components/certifications";
import { Hackathons } from "@/components/hackathons";
import { VisionAndInterests } from "@/components/vision-and-interests";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { projects } from "@/lib/data";
import { BrainCircuit, Code, Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className={`w-full py-20 md:py-32 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="transform text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold">Harsha Vardhan D.</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#hackathons">Hackathons</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#vision-and-interests">Vision & Interests</NavLink>
          </nav>
          <Button asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 z-0 bg-grid-glow"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="relative mx-auto mb-8 h-32 w-32">
                <AIFaceLogo className="h-full w-full" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Harsha Vardhan Dyavanapelli
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
             AI & ML Engineer solving real-world challenges through intelligent, cloud-powered technologies.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  <Code className="mr-2 h-5 w-5" /> View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Section id="about" className="bg-secondary/50">
          <SectionTitle>About Me</SectionTitle>
          <AboutMe />
        </Section>
        
        <Section id="skills">
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsDisplay />
        </Section>

        <Section id="projects" className="bg-secondary/50">
          <SectionTitle>Featured Projects</SectionTitle>
          <p className="-mt-8 mb-12 text-center text-lg text-muted-foreground">
            AI Projects That Define Me
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === project.imageId
              );
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  image={image}
                />
              );
            })}
          </div>
        </Section>

        <Section id="experience">
          <SectionTitle>Professional Experience</SectionTitle>
          <p className="-mt-8 mb-12 text-center text-lg text-muted-foreground">
            My Journey So Far
          </p>
          <ExperienceTimeline />
        </Section>

        <Section id="hackathons" className="bg-secondary/50">
          <SectionTitle>Hackathons</SectionTitle>
          <Hackathons />
        </Section>

        <Section id="certifications">
          <SectionTitle>Certifications</SectionTitle>
          <Certifications />
        </Section>

        <Section id="vision-and-interests" className="bg-secondary/50">
          <SectionTitle>Vision & Interests</SectionTitle>
          <VisionAndInterests />
        </Section>

        <Section id="contact">
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactForm />
        </Section>
      </main>

      <footer className="w-full border-t border-border/40 py-8">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center md:px-6">
          <TooltipProvider>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:dpharshavardhan.1636@gmail.com"
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>dpharshavardhan.1636@gmail.com</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="tel:+917981248113"
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
                    aria-label="Phone"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>+91 7981248113</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hyderabad,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
                    aria-label="Location"
                  >
                    <MapPin className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hyderabad, India</p>
                </TooltipContent>
              </Tooltip>
            
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/harshavardhandyavanapelli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/Harshavardhan1636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

           <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsha Vardhan Dyavanapelli. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
