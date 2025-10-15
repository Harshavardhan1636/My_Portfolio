
export type Project = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  tags: string[];
};

export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
};

export type Skills = {
  [key: string]: string[];
};

export type Hackathon = {
  title: string;
  organizer: string;
  date: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 'agri-assist',
    title: 'AgriAssist – AI-Powered Smart Agriculture Platform',
    description: 'A farmer-centric AI platform integrating ML-based crop prediction, pest detection, AI based advanced crop planning and yield forecasting. Features voice and chatbot interfaces for multilingual farmer interaction and IoT-driven field insights.',
    imageId: 'project-4',
    tags: ['AI', 'Machine Learning', 'IoT', 'NLP', 'Agriculture'],
  },
  {
    id: 'aiva-docs',
    title: 'AIVA Document Verification System',
    description: 'Automated document verification system under the AIVA ecosystem using OCR, NLP, and AI-driven forgery detection. Enhances digital trust by validating identity, format, and authenticity of uploaded documents.',
    imageId: 'project-5',
    tags: ['OCR', 'NLP', 'AI', 'Forgery Detection', 'Security'],
  },
  {
    id: 'scene-captioning',
    title: 'Real-Time Detection with Scene Captioning',
    description: 'A real-time object detection and scene captioning system using YOLOv10, OpenCV, and LLMs for contextual scene understanding.',
    imageId: 'project-6',
    tags: ['Computer Vision', 'YOLOv10', 'OpenCV', 'LLM', 'Real-Time'],
  },
  {
    id: 'aiva-assistant',
    title: 'AI Virtual Assistant (AIVA)',
    description: 'Intelligent assistant enabling automation, media control, web scraping, emotional interaction, and system-level operations using Python, NLP, and OpenCV.',
    imageId: 'project-1',
    tags: ['Virtual Assistant', 'Python', 'NLP', 'OpenCV', 'Automation'],
  },
  {
    id: 'biometric-auth',
    title: 'Biometric Authentication System',
    description: 'Triple-layered authentication using Face + Fingerprint Recognition with a secure, encrypted backend — developed using OpenCV and face_recognition.',
    imageId: 'project-7',
    tags: ['Biometrics', 'Security', 'OpenCV', 'Face Recognition'],
  },
  {
    id: 'book-recommender',
    title: 'Book Recommendation System',
    description: 'Dynamic recommendation engine supporting API-based book search, personalized filtering, and PDF download integration.',
    imageId: 'project-8',
    tags: ['Recommender Systems', 'API', 'Personalization', 'Filtering'],
  },
  {
    id: 'sms-classifier',
    title: 'SMS Spam Classifier',
    description: 'Machine learning–based spam detection system using NLP and Scikit-learn, with a clean UI and high accuracy in message classification.',
    imageId: 'project-9',
    tags: ['NLP', 'Machine Learning', 'Scikit-learn', 'Spam Detection'],
  },
    {
    id: 'water-quality',
    title: 'Water Quality Predictor',
    description: 'AI model for predicting water purity levels using environmental parameters, created under Edunet Foundation’s Green AI Initiative.',
    imageId: 'project-10',
    tags: ['AI', 'Prediction', 'Environmental', 'Green AI'],
  },
  {
    id: 'finance-chatbot',
    title: 'Finance Chatbot',
    description: 'AI chatbot for financial intent classification and conversation flow management using Python ML libraries and NLP models.',
    imageId: 'project-11',
    tags: ['Chatbot', 'AI', 'Finance', 'NLP', 'Python'],
  },
];

export const experiences: Experience[] = [
  {
    year: 'July 2025 - Present',
    role: 'GenAI Intern',
    company: 'TheSmartbridge (in collab with Google Cloud)',
    description: 'Selected for Google Cloud’s GenAI Virtual Internship. Learning advanced concepts through Cloud Skills Boost Labs and building real-world GenAI applications using Google Cloud services. Completing projects on model deployment, image generation, and NLP solutions.',
  },
  {
    year: 'May 2025 - Aug 2025',
    role: 'AI Developer Intern',
    company: 'VISWAM.AI',
    description: 'Contributed to AI development projects involving Python and model fine-tuning. Collaborated in a hybrid setup with developers and researchers on open-source initiatives and gained hands-on training in advanced AI concepts.',
  },
  {
    year: 'Aug 2025 - Sept 2025',
    role: 'Frontend Web Developer Intern',
    company: 'Edunet Foundation (in collab with IBM SkillBuild)',
    description: 'Developed and maintained front-end components for various web applications, gaining experience in modern web technologies and agile development practices.',
  },
  {
    year: 'June 2025',
    role: 'AI & Green Skills Intern',
    company: 'Edunet Foundation (in collab with IBM SkillBuild)',
    description: 'Focused on AI applications in sustainability. Built a prototype to solve environmental challenges, collaborating with industry mentors from Shell and AICTE.',
  },
  {
    year: 'June 2025 - July 2025',
    role: 'AI & Machine Learning Intern',
    company: 'Edunet Foundation (in collab with IBM SkillBuild)',
    description: 'Built and deployed a full-stack Employee Salary Predictor using Gradient Boosting and Streamlit, achieving 85% accuracy and enabling batch predictions.',
  },
  {
    year: 'May 2025 - July 2025',
    role: 'Salesforce Developer Intern',
    company: 'TheSmartBridge (in collab with Salesforce)',
    description: 'Completed a virtual internship focused on Salesforce CRM, gaining hands-on exposure to cloud business tools, Lightning App Builder, and Apex logic in real-time environments.',
  },
];

export const skills: Skills = {
  'Languages & Databases': ['Python', 'Java', 'C', 'SQL', 'DBMS'],
  'AI & Machine Learning': [
    'Generative AI',
    'Computer Vision',
    'Natural Language Processing',
    'LLM Fine-Tuning',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
  ],
  'Libraries & Frameworks': [
    'OpenCV',
    'Selenium',
    'BeautifulSoup',
    'React',
    'Next.js',
    'FastAPI',
    'Streamlit',
  ],
  'Cloud, DevOps & Tools': [
    'Google Cloud (GenAI)',
    'Salesforce',
    'Git',
    'Version Control',
    'Docker',
    'CI/CD',
    'Jira',
  ],
  'Core Competencies': [
    'Data Structures & Algorithms',
    'OOP',
    'Problem Solving',
    'Web Development',
    'Automation',
    'Rapid Prototyping',
    'Collaboration',
    'Public Speaking',
  ],
};

export const hackathons: Hackathon[] = [
  {
    title: 'Smart India Hackathon (SIH) 2025 - Internal Round',
    organizer: 'Vidya Jyothi Institute of Technology',
    date: 'September 2025',
    description: 'Shortlisted for the national level of the Smart India Hackathon 2025 after competing in the internal institutional round.',
  },
  {
    title: 'Agentic Ethereum Hackathon India',
    organizer: 'Reskill',
    date: 'July 2025',
    description: 'Participated in a 30-hour innovation marathon celebrating the convergence of Ethereum and AI, building solutions for the future of decentralized intelligence.',
  },
  {
    title: 'HackWithHyderabad',
    organizer: 'HackWithIndia',
    date: 'September 2025',
    description: 'Actively participated in the HackWithHyderabad Hackathon held at Microsoft Office, Hyderabad, contributing with creativity, collaboration, and a true spirit of innovation.',
  },
];
