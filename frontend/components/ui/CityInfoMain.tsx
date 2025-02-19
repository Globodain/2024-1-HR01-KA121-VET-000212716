import { Sun, Cloud, CloudRain } from "lucide-react"

interface CityData {
  temperature: number
  weatherUnit: string
  weather: string
  highTemperature: number
  lowTemperature: number
  name: string
  country: string
}

interface Props {
  data: CityData[]
}

const getWeatherIcon = (weather: string) => {
  switch (weather.toLowerCase()) {
    case "sunny":
      return <Sun className="w-5 h-5" />
    case "cloudy":
      return <Cloud className="w-5 h-5" />
    case "rainy":
      return <CloudRain className="w-5 h-5" />
    default:
      return <Sun className="w-5 h-5" />
  }
}

const hourlyForecast = [
  { time: "12:00", temp: 15 },
  { time: "13:00", temp: 16 },
  { time: "14:00", temp: 18 },
  { time: "15:00", temp: 16 },
]

const weeklyForecast = [
  { day: "Mon, 1/18", temp: 16 },
  { day: "Tue, 2/18", temp: 18 },
  { day: "Wed, 3/18", temp: 3 },
  { day: "Thu, 4/18", temp: 5 },
  { day: "Fri, 5/18", temp: 9 },
  { day: "Sat, 6/18", temp: 12 },
  { day: "Sun, 7/18", temp: 16 },
]

export default function CityInfoMain({ data }: Props) {
  const currentCity = data[0] // Using first city as current

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-start">
        <div className="bg-[#0080c0] text-white p-4 rounded-3xl shadow-xl">
          <div className="text-3xl font-bold">
            {currentCity.temperature}°C {currentCity.name}
          </div>
          <div className="text-xl">{currentCity.country}</div>
          <div className="text-sm">
            H: {currentCity.highTemperature} L: {currentCity.lowTemperature}
          </div>
        </div>
        <select className="p-2 rounded-2xl border border-gray-300">
          <option value="celsius">C°</option>
          <option value="fahrenheit">F°</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white p-4 rounded-3xl shadow-xl space-y-2">
          {hourlyForecast.map((hour) => (
            <div key={hour.time} className="bg-[#0080c0] text-white p-3 rounded-2xl shadow-lg flex justify-between items-center">
              <span>{hour.time}</span>
              <div className="flex items-center gap-2">
                {hour.temp}° <Sun className="w-5 h-5" />
              </div>
            </div>
          ))}
          <div className="flex justify-center pt-2">
            <div className="w-8 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-xl space-y-2">
          {weeklyForecast.map((day) => (
            <div key={day.day} className="bg-[#0080c0] text-white p-2 rounded-2xl shadow-lg flex justify-between items-center">
              <span>{day.day}</span>
              <div className="flex items-center gap-2">
                {day.temp}° <Sun className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

