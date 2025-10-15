
'use client';
import { interests } from '@/lib/certifications-and-interests';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Target } from 'lucide-react';
import { useRef } from 'react';

export function VisionAndInterests() {
  const interestsCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = interestsCardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Card className="border-transparent bg-transparent shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl text-primary">
            My Vision in AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center text-lg text-foreground/90">
          <p>
            I’m not just training models — I’m building machines that understand emotions, actions, and purpose.
          </p>
          <p className="font-semibold">
            My dream is to integrate Artificial Intelligence with Emotional Intelligence, creating systems that see, feel, and assist humans intuitively.
          </p>
          <p>
            I aim to lead innovations in Human-Centric AI, bridging the gap between computation and compassion.
          </p>
        </CardContent>
      </Card>
      
       <Card 
        ref={interestsCardRef}
        onMouseMove={handleMouseMove}
        className="card-glow-effect transition-all duration-300 hover:scale-[1.02]"
       >
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <Sparkles className="h-5 w-5 text-primary" />
                Core Interests
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
                <Badge
                key={interest}
                variant="secondary"
                className="cursor-default px-3 py-1 text-sm font-medium"
                >
                {interest}
                </Badge>
            ))}
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
