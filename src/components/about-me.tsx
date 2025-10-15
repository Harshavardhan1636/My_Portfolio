
'use client';

import Image from 'next/image';
import {
  BrainCircuit,
  Briefcase,
  Calendar,
  Clock,
  Code,
  Globe,
  GraduationCap,
  Heart,
  Laptop,
  MapPin,
  Network,
  Rocket,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useRef } from 'react';

const quickFacts = [
    { icon: Laptop, text: '3+ years of experience in AI/ML & Python projects' },
    { icon: BrainCircuit, text: 'Focus: Computer Vision, NLP, Emotion AI, and Intelligent Automation' },
    { icon: GraduationCap, text: 'B.Tech CSE (AI & ML), VJIT, Hyderabad (Expected 2027)' },
    { icon: MapPin, text: 'Location: Hyderabad, India' },
    { icon: Clock, text: 'Active Timezone: Asia/Kolkata' },
]

export function AboutMe() {
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
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto h-48 w-48 flex-shrink-0 md:h-64 md:w-64">
          <div className="group relative h-full w-full">
            <Image
              src="/profile.jpg"
              alt="Harsha Vardhan Dyavanapelli"
              width={256}
              height={256}
              className="relative z-20 h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg transition-transform duration-300 group-hover:scale-109"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background transition-all duration-300 group-hover:ring-primary"></div>
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left">
           <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold text-foreground">
                Who I Am
            </h2>
             <p className="text-lg text-foreground/90">
              A visionary coder and AI researcher in the making — passionate about building intelligent systems that make human life easier, safer, and more emotionally aware.
            </p>
          </div>
          <div className='space-y-4 text-muted-foreground'>
            <p>
                I’ve been working on AI since my early academic years, developing projects that combine computer vision, NLP, and automation — integrating intelligence across systems.
            </p>
            <p>
                Beyond coding, I’m resilience-driven, perfection-oriented, and deeply invested in the impact of AI on society.
            </p>
          </div>
        </div>
      </div>

       <Card 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="card-glow-effect border-border bg-card shadow-sm transition-all duration-300 hover:scale-[1.02]"
       >
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">
            Quick Facts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-3">
                <fact.icon className="h-5 w-5 flex-shrink-0 text-primary/80" />
                <span className="text-muted-foreground">{fact.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
