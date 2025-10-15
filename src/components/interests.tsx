

'use client';
import { interests } from '@/lib/certifications-and-interests';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export function Interests() {
  return (
    <div className="mx-auto max-w-4xl">
       <Card className="card-glow-effect transition-all duration-300 hover:scale-[1.02]">
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <Sparkles className="h-5 w-5 text-primary" />
                Interests
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
