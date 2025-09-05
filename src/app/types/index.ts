export interface FormData {
  age: string;
  gender: string;
  country: string;
  language: string;
  concerns: string[];
  otherConcern: string;
  stressLevel: number;
  priorHelp: string;
}

export interface FormErrors {
  age?: string;
  gender?: string;
  country?: string;
  language?: string;
  concerns?: string;
  priorHelp?: string;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isValid?: boolean;
}
