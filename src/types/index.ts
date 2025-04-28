
export interface Vehicle {
  id?: string;
  userId?: string;
  make: string;
  model: string;
  year: number;
  mileage?: number;
  engineType?: string;
  transmission?: 'automatic' | 'manual' | 'cvt' | string;
  color?: string;
  notes?: string;
  createdAt?: string;
}

export interface User {
  id?: string;
  email: string;
  name?: string;
  role: 'user' | 'mechanic' | 'admin';
  vehicles?: Vehicle[];
}

export interface Answer {
  id: string;
  text: string;
  nextQuestionId?: string;
  isTerminal?: boolean;
  resultId?: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  systemCategory?: string;
}

export interface Result {
  id: string;
  title: string;
  description: string;
  possibleCauses: string[];
  recommendedSolutions: string[];
  severityLevel: 'low' | 'medium' | 'high' | 'critical';
  systemCategory: string;
  applicableVehicles?: {
    makes?: string[];
    models?: string[];
    years?: number[];
  };
}

export interface Symptom {
  id: string;
  name: string;
  description?: string;
  firstQuestionId: string; // Points to the first question in the troubleshooting flow
  systemCategory: string;
  imageUrl?: string;
  commonMakes?: string[];
  commonModels?: string[];
}

export interface SystemCategory {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
}

export interface TroubleshootingSession {
  id?: string;
  userId?: string;
  vehicleId?: string;
  symptomId: string;
  startedAt: string;
  completedAt?: string;
  resultId?: string;
  path: {
    questionId: string;
    answerId: string;
  }[];
}
