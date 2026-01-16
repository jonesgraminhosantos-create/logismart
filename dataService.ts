
import { supabase } from './supabaseClient';
import { Vehicle, Driver, Trip, WeatherAlert, Incident } from './types';
import { MOCK_VEHICLES, MOCK_DRIVERS, MOCK_TRIPS, MOCK_ALERTS, MOCK_INCIDENTS } from './constants';

export const dataService = {
  async getVehicles(): Promise<Vehicle[]> {
    const { data, error } = await supabase.from('vehicles').select('*');
    if (error) {
      console.warn('Erro ao buscar veículos, usando mocks:', error.message);
      return MOCK_VEHICLES;
    }
    return data as Vehicle[];
  },

  async getDrivers(): Promise<Driver[]> {
    const { data, error } = await supabase.from('drivers').select('*');
    if (error) {
      console.warn('Erro ao buscar motoristas, usando mocks:', error.message);
      return MOCK_DRIVERS;
    }
    return data as Driver[];
  },

  async getTrips(): Promise<Trip[]> {
    const { data, error } = await supabase.from('trips').select('*').order('id', { ascending: false });
    if (error) {
      console.warn('Erro ao buscar viagens, usando mocks:', error.message);
      return MOCK_TRIPS;
    }
    return data as Trip[];
  },

  async getAlerts(): Promise<WeatherAlert[]> {
    const { data, error } = await supabase.from('weather_alerts').select('*');
    if (error) {
      console.warn('Erro ao buscar alertas, usando mocks:', error.message);
      return MOCK_ALERTS;
    }
    return data as WeatherAlert[];
  },

  async getIncidents(): Promise<Incident[]> {
    const { data, error } = await supabase.from('incidents').select('*').order('timestamp', { ascending: false });
    if (error) {
      console.warn('Erro ao buscar incidentes, usando mocks:', error.message);
      return MOCK_INCIDENTS;
    }
    return data as Incident[];
  },

  async createTrip(trip: Omit<Trip, 'id'>): Promise<Trip | null> {
    const { data, error } = await supabase.from('trips').insert([trip]).select().single();
    if (error) {
      console.error('Erro ao criar viagem:', error.message);
      return null;
    }
    return data as Trip;
  }
};
