import { Sun, Cloud, CloudRain, CloudLightning, CloudFog, Wind, Droplets } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { WeatherData } from "@/app/api/city/[cityName]/route"

interface Props {
  data: WeatherData
}

const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain.toLowerCase()) {
    case "clear":
      return <Sun className="w-5 h-5" />
    case "clouds":
      return <Cloud className="w-5 h-5" />
    case "rain":
    case "drizzle":
      return <CloudRain className="w-5 h-5" />
    case "thunderstorm":
      return <CloudLightning className="w-5 h-5" />
    case "fog":
    case "mist":
      return <CloudFog className="w-5 h-5" />
    default:
      return <Sun className="w-5 h-5" />
  }
}

const formatTime = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true
  });
};

export default function CityInfoMain({ data }: Props) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-start">
        <div className="bg-[#007cdf] text-white p-4 mb-2 rounded-3xl shadow-xl">
          <div className="text-3xl font-bold">
            {Math.round(data.temperature.current)}°C {data.city}
          </div>
          <div className="text-xl">{data.country}</div>
          <div className="flex items-center gap-2">
            <span>{data.weather.description}</span>
            {getWeatherIcon(data.weather.main)}
          </div>
          <div className="text-sm">
            H: {Math.round(data.temperature.max)}° L: {Math.round(data.temperature.min)}°
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Unit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="celsius">°C</SelectItem>
            <SelectItem value="fahrenheit">°F</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
        <div className="bg-[#007cdf] p-4 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-lg">Feels Like</span>
            <span className="text-2xl font-bold">{Math.round(data.temperature.feelsLike)}°C</span>
          </div>
        </div>
        <div className="bg-[#007cdf] p-4 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-lg flex items-center gap-2">
              <Wind className="w-5 h-5" />
              Wind Speed
            </span>
            <span className="text-2xl font-bold">{data.wind.speed} m/s</span>
          </div>
        </div>
        <div className="bg-[#007cdf] p-4 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-lg flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Humidity
            </span>
            <span className="text-2xl font-bold">{data.humidity}%</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Today's Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 overflow-x-auto">
          {data.hourlyForecast.map((hour, index) => (
            <div
              key={hour.time}
              className="bg-[#007cdf] text-white p-3 rounded-xl shadow-lg 
                       hover:shadow-xl transition-all duration-200 
                       transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="font-medium">
                  {formatTime(hour.time)}
                </div>
                <img 
                  src={`http://openweathermap.org/img/wn/${hour.weather.icon}@2x.png`}
                  alt={hour.weather.description}
                  className="w-12 h-12 mx-auto"
                />
                <div className="text-2xl font-bold">
                  {Math.round(hour.temp)}°
                </div>
                <div className="text-xs capitalize">
                  {hour.weather.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-[#007cdf] p-4 rounded-2xl shadow-lg text-white">
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
            <div className="text-lg font-bold">{data.wind.direction}°</div>
          </div>
        </div>
      </div>
    </div>
  )
}

