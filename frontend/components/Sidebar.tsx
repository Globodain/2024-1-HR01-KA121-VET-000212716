"use client";
import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { SunMedium, Cloud, CloudRain } from "lucide-react";
import Image from "next/image";
import Search from "./Search";
import { useTemperature } from "@/context/TemperatureContext";

interface CityWeatherData {
  name: string;
  country?: string;
  temperature: number;
  weather: string;
  weatherIcon?: string;
}
interface SidebarProps {
  onCityClick: (cityName: string) => void;
}

const Sidebar = ({ onCityClick }: SidebarProps) => {
  const { unit, convertTemperature } = useTemperature();
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  
  const [cities, setCities] = useState<CityWeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularCities = async () => {
      try {
        const response = await fetch("/api/popular");
        if (!response.ok) throw new Error("Failed to fetch popular cities");
        const data = await response.json();
        setCities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
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

  if (error)
    return (
      <div className="w-1/3 m-5 p-4 bg-red-100 text-red-700 rounded-xl">
        Error: {error}
      </div>
    );

  return (
    <div className={`flex flex-col items-center justify-start pt-3 pb-3 pl-2 pr-2 w-1/3 mt-5 mb-5 ml-5 mr-2 rounded-xl h-auto ${
      cities.length > 0 ? "bg-[#add8e6] shadow-lg shadow-2xs" : ""
    }`}>
      <div className="w-full mb-3">
        <Search onCitySelect={onCityClick} />
      </div>
      <div className="w-full space-y-2">
        {cities?.map((city, index) => (
          <Card
            key={index}
            onClick={() => onCityClick(city.name)}
            className={`flex justify-between p-1.5 bg-[#007cdf] border-none w-full h-auto rounded-2xl hover:bg-[#0066b3] transition-colors duration-200 cursor-pointer ${
              cities.length > 0 ? "shadow-lg" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <h1 className="text-white text-lg font-extralight pl-1">
                {city.name}
              </h1>
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
              <p className="text-white text-sm pr-1">
                {convertTemperature(city.temperature)}{unitSymbol}
              </p>
              {getWeatherIcon(city.weather)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;