
export enum ViewType {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
  FLEET = 'FLEET',
  PLANNER = 'PLANNER',
  RISKS = 'RISKS',
  REPORTS = 'REPORTS',
  SETTINGS = 'SETTINGS',
  PROFILE = 'PROFILE',
  AUDIT = 'AUDIT',
  NEW_OPERATION = 'NEW_OPERATION'
}

export type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';

export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  status: 'active' | 'maintenance' | 'idle';
  lastLocation: [number, number];
}

export interface Driver {
  id: string;
  name: string;
  license: string;
  status: 'available' | 'on-trip' | 'off';
}

export interface Trip {
  id: string;
  origin: string;
  destination: string;
  status: 'planned' | 'in-transit' | 'delivered' | 'alert';
  riskScore: number;
  eta: string;
  cargo: string;
}

export interface Incident {
  id: string;
  tripId: string;
  type: string;
  severity: RiskLevel;
  location: string;
  timestamp: string;
  description: string;
}

export interface WeatherAlert {
  id: string;
  type: 'rain' | 'wind' | 'flood' | 'operational';
  severity: RiskLevel;
  region: string;
  message: string;
}

export interface AIAnalysis {
  reliabilityScore: number;
  recommendations: string[];
  climateImpact: string;
  financialRiskEstimate: string;
  alternativeRouteNeeded: boolean;
}

export interface AuditEntry {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'info' | 'warning' | 'critical';
}
