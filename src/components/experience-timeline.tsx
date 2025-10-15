'use client';
import { experiences } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

export function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="absolute left-4 top-0 h-full w-0.5 bg-border"
        aria-hidden="true"
      />
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: (typeof experiences)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <div className="relative flex items-start gap-6">
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
        <Briefcase className="h-4 w-4 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <Card
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="card-glow-effect transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-lg"
        >
          <CardHeader>
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="font-headline text-xl">
                {experience.role}
              </CardTitle>
              <p className="text-sm font-medium text-primary">
                {experience.year}
              </p>
            </div>
            <p className="text-md font-semibold text-muted-foreground">
              {experience.company}
            </p>
            <CardDescription className="pt-2">
              {experience.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
