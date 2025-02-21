'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import CityInfoMain from "./ui/CityInfoMain";
import type { WeatherData } from "../app/api/city/[cityName]/route";
import Navbar from "./Navbar";

const MainInfoContainer = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/city/seville');
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

  return (
    <>
      <div className={`flex items-center p-6 w-full h-full m-5 rounded-xl ${!loading && 'shadow-lg shadow-2xs bg-[#add8e6]'}`}>
        {loading ? (
          <div className="flex items-center justify-center fixed inset-0 z-50">
            <Image src="/loading.gif" alt="loading svg" width={380} height={380} />
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : weatherData ? (
          <CityInfoMain data={weatherData} loading={loading} />
        ) : (
          <div>No data available</div>
        )}
      </div>
    </>
  );
};

export default MainInfoContainer;