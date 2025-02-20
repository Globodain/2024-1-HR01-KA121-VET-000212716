import { Sun, Cloud, CloudRain, CloudLightning, CloudFog } from "lucide-react"
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

export default function CityInfoMain({ data }: Props) {
  return (
    <div className="w-full space-y-2">
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

      {/* Note: Hourly and weekly forecast data would need to come from a different API endpoint */}
      <div className="text-center p-4">
        Feels like: {Math.round(data.temperature.feelsLike)}°C
      </div>
    </div>
  )
}

