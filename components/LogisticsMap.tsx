
import React, { useEffect, useRef } from 'react';
import { MOCK_VEHICLES } from '../constants';

const LogisticsMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletInstance = useRef<any>(null);

  useEffect(() => {
    // Only load if not initialized
    if (mapRef.current && !leafletInstance.current) {
      // @ts-ignore
      const L = window.L;
      if (L) {
        leafletInstance.current = L.map(mapRef.current).setView([-30.0346, -51.2177], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(leafletInstance.current);

        // Add mock vehicles as markers
        MOCK_VEHICLES.forEach(v => {
          const color = v.status === 'active' ? '#3b82f6' : v.status === 'maintenance' ? '#ef4444' : '#94a3b8';
          const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${color}; width: 12px; height: 12px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3)"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          });
          L.marker(v.lastLocation, { icon }).addTo(leafletInstance.current)
            .bindPopup(`<strong>${v.plate}</strong><br>Modelo: ${v.model}<br>Status: ${v.status}`);
        });
      }
    }

    return () => {
      if (leafletInstance.current) {
        leafletInstance.current.remove();
        leafletInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-100">
      <div ref={mapRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-lg text-xs">
        <h4 className="font-bold mb-2">Legenda de Operação</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Em Trânsito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-slate-400"></div>
            <span>Ocioso / Pátio</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Manutenção</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsMap;
