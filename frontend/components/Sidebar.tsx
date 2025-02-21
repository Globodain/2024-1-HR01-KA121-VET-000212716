'use client'
import { useState, useEffect } from 'react';
import { Card } from "./ui/card";
import { SunMedium, Cloud, CloudRain } from 'lucide-react';
import Image from 'next/image';

interface CityWeatherData {
  name: string;
  country?: string;
  temperature: number;
  weather: string;
  weatherIcon?: string;
}

const Sidebar = () => {
  const [cities, setCities] = useState<CityWeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularCities = async () => {
      try {
        const response = await fetch('/api/popular');
        if (!response.ok) throw new Error('Failed to fetch popular cities');
        const data = await response.json();
        setCities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularCities();
  }, []);

  const getWeatherIcon = (weather: string) => {
    switch (weather.toLowerCase()) {
      case "clear":
        return <SunMedium color="#ffed24" size={22} />;
      case "clouds":
        return <Cloud color="#b0c4de" size={22} />;
      case "rain":
        return <CloudRain color="#4682b4" size={22} />;
      default:
        return <SunMedium color="#ffed24" size={22} />;
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center w-1/3 h-full m-5">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );

  if (error) return (
    <div className="w-1/3 m-5 p-4 bg-red-100 text-red-700 rounded-xl">
      Error: {error}
    </div>
  );

  return (
    <div className="flex flex-wrap items-center justify-center pt-3 pb-3 pl-2 pr-2 shadow-lg w-1/3 shadow-2xs mt-5 mb-5 ml-5 mr-2 rounded-xl h-auto bg-[#add8e6] space-y-1">
      {cities.map((city, index) => (
        <Card 
          key={index} 
          className="flex justify-between p-1.5 bg-[#007cdf] border-none w-full h-auto rounded-2xl shadow-lg hover:bg-[#0066b3] transition-colors duration-200 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <h1 className="text-white text-lg font-extralight pl-1">{city.name}</h1>
            {city.country && (
                       <Image 
                            src={`https://flagsapi.com/${city.country}/flat/64.png`}
                            alt={`${city.country} flag`}
                            width={16}
                            height={16}
                          />
            )}
          </div>
          <div className="flex items-center justify-center pr-1">
            <p className="text-white text-sm pr-1">{city.temperature}°C</p>
            {getWeatherIcon(city.weather)}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Sidebar;