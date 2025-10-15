
'use client';
import { certifications } from '@/lib/certifications-and-interests';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import { useRef } from 'react';

export function Certifications() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {certifications.map((category) => (
        <CertificationCard key={category.issuer} category={category} />
      ))}
    </div>
  );
}

function CertificationCard({ category }: { category: (typeof certifications)[0] }) {
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
      className="card-glow-effect transition-all duration-300 hover:scale-[1.02]"
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-xl">
          <Award className="h-5 w-5 text-primary" />
          {category.issuer}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.courses.map((course) => (
            <Badge
              key={course}
              variant="secondary"
              className="cursor-default px-3 py-1 text-sm font-medium"
            >
              {course}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
