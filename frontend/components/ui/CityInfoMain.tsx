import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudFog,
  Wind,
  Droplets,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { WeatherData } from "@/app/api/city/[cityName]/route";
import { windDirection } from "@/lib/utils";
import Image from "next/image";
import { useTemperature } from "@/context/TemperatureContext";

interface Props {
  data: WeatherData;
  loading?: boolean;
}

const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain.toLowerCase()) {
    case "clear":
      return <Sun className="w-5 h-5" />;
    case "clouds":
      return <Cloud className="w-5 h-5" />;
    case "rain":
    case "drizzle":
      return <CloudRain className="w-5 h-5" />;
    case "thunderstorm":
      return <CloudLightning className="w-5 h-5" />;
    case "fog":
    case "mist":
      return <CloudFog className="w-5 h-5" />;
    default:
      return <Sun className="w-5 h-5" />;
  }
};

const formatTime = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });
};

export default function CityInfoMain({ data, loading }: Props) {
  const { unit, convertTemperature } = useTemperature();
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  const shadowClass = loading ? "" : "shadow-xl";

  return (
    <div className="w-full space-y-4 bg-[#add8e6] p-4 rounded-3xl">
      <div className="flex justify-between items-start ">
        <div className="bg-[#007cdf] text-white p-4 mb-2 rounded-3xl shadow-xl">
          <div className="text-3xl font-bold">
            {convertTemperature(data.temperature.current)}{unitSymbol} {data.city}
          </div>
          <div className="text-xl">
            <Image
              src={`https://flagsapi.com/${data.country}/flat/64.png`}
              alt={`${data.country} flag`}
              width={32}
              height={32}
            />
          </div>
          <div className="flex items-center gap-2">
            <span>{data.weather.description}</span>
            {getWeatherIcon(data.weather.main)}
          </div>
          <div className="text-sm">
            H: {convertTemperature(data.temperature.max)}{unitSymbol} L:{" "}
            {convertTemperature(data.temperature.min)}{unitSymbol}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
        {["Feels Like", "Wind Speed", "Humidity"].map((title) => (
          <div
            key={title}
            className={`bg-[#007cdf] p-4 rounded-2xl ${shadowClass}`}
          >
            {title === "Feels Like" && (
              <div className="flex items-center justify-between">
                <span className="text-lg">Feels Like</span>
                <span className="text-2xl font-bold">
                  {convertTemperature(data.temperature.feelsLike)}{unitSymbol}
                </span>
              </div>
            )}
            {title === "Wind Speed" && (
              <div className="flex items-center justify-between">
                <span className="text-lg flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Wind Speed
                </span>
                <span className="text-2xl font-bold">
                  {data.wind.speed} m/s
                </span>
              </div>
            )}
            {title === "Humidity" && (
              <div className="flex items-center justify-between">
                <span className="text-lg flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Humidity
                </span>
                <span className="text-2xl font-bold">{data.humidity}%</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 overflow-x-auto">
          {data.hourlyForecast.map((hour) => (
            <div
              key={hour.time}
              className={`bg-[#007cdf] text-white p-3 rounded-xl 
                       hover:shadow-xl transition-all duration-200 
                       transform hover:-translate-y-1 ${shadowClass}`}
            >
              <div className="text-center">
                <div className="font-medium">{formatTime(hour.time)}</div>
                <Image
                  src={`http://openweathermap.org/img/wn/${hour.weather.icon}@2x.png`}
                  width={20}
                  height={20}
                  alt={hour.weather.description}
                  className="w-12 h-12 mx-auto"
                />
                <div className="text-2xl font-bold">
                  {convertTemperature(hour.temp)}{unitSymbol}
                </div>
                <div className="text-xs capitalize">
                  {hour.weather.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-6 bg-[#007cdf] p-4 rounded-2xl text-white ${shadowClass}`}
      >
        <h2 className="text-xl font-semibold mb-3">Additional Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="text-sm opacity-80">Pressure</div>
            <div className="text-lg font-bold">{data.pressure} hPa</div>
          </div>
          <div>
            <div className="text-sm opacity-80">Visibility</div>
            <div className="text-lg font-bold">{data.visibility / 1000} km</div>
          </div>
          <div>
            <div className="text-sm opacity-80">Wind Direction</div>
            <div className="text-lg font-bold">
              {data.wind.direction}° {windDirection(data.wind.direction)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
