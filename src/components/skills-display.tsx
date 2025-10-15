'use client';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers } from 'lucide-react';
import { useRef } from 'react';

export function SkillsDisplay() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCard key={category} category={category} skillList={skillList} />
      ))}
    </div>
  );
}

function SkillCard({ category, skillList }: { category: string, skillList: string[] }) {
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
    <Card ref={cardRef} onMouseMove={handleMouseMove} className="card-glow-effect transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-xl">
          <Layers className="h-5 w-5 text-primary" />
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="cursor-default px-3 py-1 text-sm font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
