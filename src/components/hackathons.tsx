
'use client';
import { hackathons } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';
import { useRef } from 'react';

export function Hackathons() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {hackathons.map((hackathon) => (
        <HackathonCard key={hackathon.title} hackathon={hackathon} />
      ))}
    </div>
  );
}


function HackathonCard({ hackathon }: { hackathon: (typeof hackathons)[0] }) {
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
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-3 font-headline text-xl">
            <Trophy className="h-5 w-5 text-primary" />
            {hackathon.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                {hackathon.date}
            </div>
        </div>
          <p className="pl-8 text-md font-semibold text-muted-foreground">
          Organized by {hackathon.organizer}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{hackathon.description}</p>
      </CardContent>
    </Card>
  )
}
