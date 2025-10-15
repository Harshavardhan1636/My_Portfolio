
export type CertificationCategory = {
  issuer: string;
  courses: string[];
};

export const certifications: CertificationCategory[] = [
  {
    issuer: 'Infosys Springboard',
    courses: [
      'Introduction to Data Science',
      'Introduction to Natural Language Processing',
      'Introduction to Artificial Intelligence',
      'Introduction to Deep Learning',
      'Computer Vision 101',
      'Introduction to Robotic Process Automation',
      'OpenAI GPT Models',
      'GPT-3 for Developers',
      'Generative Models for Developers',
      'Deep Learning for Developers',
      'Artificial Intelligence',
      'Agile Scrum in Practice',
    ],
  },
  {
    issuer: 'Cisco Networking Academy',
    courses: ['Python Essentials 1', 'Python Essentials 2', 'Industrial Networking Essentials'],
  },
  {
    issuer: 'Scaler Topics',
    courses: ['Python for Beginners', 'Netflix Recommender ML Project'],
  },
  {
    issuer: 'Forge',
    courses: ['BCG GenAI Simulation'],
  },
  {
    issuer: 'GitHub',
    courses: ['Open Source Contributor (Viswam.ai, Edunet Foundation)'],
  },
];

export const interests: string[] = [
  'Entrepreneurship',
  'Autonomous AI Systems',
  'Cloud-AI Integration',
  'Multi-Modal AI Solutions',
  'Green AI & Sustainability',
  'AI for Social Good',
  'Open-Source Contributions',
  'Community Building',
];
