export interface CaseStudy {
  id: string;
  newspaper: string;
  badge: string;
  title: string;
  sourceUrl: string;
  image: string;
  aspect: string;
  summary: string;
  aiTechUsed: string[];
  metrics: { label: string; value: string }[];
  highlightQuote: string;
}

export interface WorkflowStep {
  step: string;
  traditional: {
    time: string;
    description: string;
    painPoint: string;
  };
  aiAugmented: {
    time: string;
    description: string;
    benefit: string;
  };
}

export interface SlideData {
  id: number;
  chapter: string;
  badge: string;
  title: string;
  subtitle: string;
  presenterNotes: string;
  contentVariant: 'hero' | 'inma' | 'silos' | 'quote' | 'vietnam' | 'divide' | 'risk' | 'solution' | 'priority' | 'conductor';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}
