'use client';

import { useEffect, useState } from "react";
import CityInfoMain from "./ui/CityInfoMain";
import type { WeatherData } from "../app/api/city/[cityName]/route";

const MainInfoContainer = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/city/london'); // Default city
        if (!response.ok) throw new Error('Failed to fetch weather data');
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>No data available</div>;

  return (
    <div className="flex items-center p-6 shadow-lg w-full h-full shadow-2xs m-5 rounded-xl bg-[#add8e6]">
      <CityInfoMain data={weatherData} />
    </div>
  );
};

export default MainInfoContainer;