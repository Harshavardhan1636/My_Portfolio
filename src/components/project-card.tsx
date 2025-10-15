'use client';

import Image from 'next/image';
import type { Project } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';

type ProjectCardProps = {
  project: Project;
  image?: ImagePlaceholder;
};

export default function ProjectCard({ project, image }: ProjectCardProps) {
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
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card-glow-effect group flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10"
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="relative z-20 object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <CardHeader>
          <CardTitle className="font-headline text-xl">
            {project.title}
          </CardTitle>
          <CardDescription className="pt-2 text-base">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
