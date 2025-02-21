'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type TemperatureUnit = 'metric' | 'imperial';

interface TemperatureContextType {
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
  convertTemperature: (celsius: number) => number;
}

const TemperatureContext = createContext<TemperatureContextType | undefined>(undefined);

export function TemperatureProvider({ children }: { children: React.ReactNode }) {
  const [unit, setUnit] = useState<TemperatureUnit>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('temperatureUnit') as TemperatureUnit) || 'metric';
    }
    return 'metric';
  });

  useEffect(() => {
    localStorage.setItem('temperatureUnit', unit);
  }, [unit]);

  const convertTemperature = (celsius: number): number => {
    if (unit === 'imperial') {
      return Math.round((celsius * 9/5) + 32);
    }
    return Math.round(celsius);
  };

  return (
    <TemperatureContext.Provider value={{ unit, setUnit, convertTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
}

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (context === undefined) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};
