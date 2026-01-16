
import { Vehicle, Driver, Trip, WeatherAlert, Incident } from './types';

export const MOCK_VEHICLES: Vehicle[] = [
  { id: '1', plate: 'ABC-1234', model: 'Scania R450', status: 'active', lastLocation: [-30.0346, -51.2177] },
  { id: '2', plate: 'XYZ-9876', model: 'Volvo FH 540', status: 'idle', lastLocation: [-29.1678, -51.1794] },
  { id: '3', plate: 'LOG-0001', model: 'Mercedes Actros', status: 'maintenance', lastLocation: [-29.6842, -53.8069] },
  { id: '4', plate: 'RS-9988', model: 'Volkswagen Constellation', status: 'active', lastLocation: [-29.9189, -51.1781] },
];

export const MOCK_DRIVERS: Driver[] = [
  { id: '1', name: 'João Silva', license: 'D-12345', status: 'on-trip' },
  { id: '2', name: 'Maria Santos', license: 'E-67890', status: 'available' },
  { id: '3', name: 'Pedro Souza', license: 'D-54321', status: 'off' },
  { id: '4', name: 'Ana Oliveira', license: 'E-11223', status: 'on-trip' },
];

export const MOCK_TRIPS: Trip[] = [
  { id: 'TR-101', origin: 'Porto Alegre', destination: 'Caxias do Sul', status: 'in-transit', riskScore: 15, eta: '14:30', cargo: 'Componentes Eletrônicos' },
  { id: 'TR-102', origin: 'Pelotas', destination: 'Santa Maria', status: 'alert', riskScore: 85, eta: '18:00', cargo: 'Grãos' },
  { id: 'TR-103', origin: 'Uruguaiana', destination: 'Passo Fundo', status: 'delivered', riskScore: 5, eta: '09:15', cargo: 'Combustível' },
  { id: 'TR-104', origin: 'Erechim', destination: 'Canoas', status: 'planned', riskScore: 22, eta: 'Amanhã 08:00', cargo: 'Maquinário Agrícola' },
];

export const MOCK_ALERTS: WeatherAlert[] = [
  { id: 'A1', type: 'flood', severity: 'critical', region: 'Vale do Taquari', message: 'Bloqueio total na BR-386 devido a alagamento iminente.' },
  { id: 'A2', type: 'rain', severity: 'moderate', region: 'Serra Gaúcha', message: 'Neblina densa e chuva moderada reduzem visibilidade na RS-122.' },
  { id: 'A3', type: 'wind', severity: 'low', region: 'Litoral Norte', message: 'Ventos fortes previstos para a Freeway (BR-290).' },
];

export const MOCK_INCIDENTS: Incident[] = [
  { id: 'INC-001', tripId: 'TR-102', type: 'Bloqueio Climático', severity: 'high', location: 'BR-116, km 230', timestamp: '2h atrás', description: 'Queda de barreira obstruindo meia pista.' },
  { id: 'INC-002', tripId: 'TR-101', type: 'Falha Mecânica', severity: 'moderate', location: 'Caxias do Sul', timestamp: '45min atrás', description: 'Superaquecimento do motor reportado via telemetria.' },
];
