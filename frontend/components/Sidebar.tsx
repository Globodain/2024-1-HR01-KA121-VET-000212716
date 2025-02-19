import { Card } from "./ui/card";
import { SunMedium, Cloud, CloudRain } from 'lucide-react';

type CityData = {
  temperature: number;
  weather: string;
  name: string;
};

const sampleData: CityData[] = [
  {
    temperature: 25,
    weather: "Cloudy",
    name: "Toronto",
  },
  {
    temperature: 30,
    weather: "Sunny",
    name: "New York",
  },
  {
    temperature: 20,
    weather: "Rainy",
    name: "London",
  },
  {
    temperature: 28,
    weather: "Sunny",
    name: "Los Angeles",
  },
  {
    temperature: 22,
    weather: "Cloudy",
    name: "Vancouver",
  },
  {
    temperature: 35,
    weather: "Sunny",
    name: "Miami",
  },
  {
    temperature: 18,
    weather: "Rainy",
    name: "Seattle",
  },
  {
    temperature: 27,
    weather: "Cloudy",
    name: "Chicago",
  },
  {
    temperature: 23,
    weather: "Rainy",
    name: "Boston",
  },
  {
    temperature: 32,
    weather: "Sunny",
    name: "Houston",
  }
];

const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case "Sunny":
      return <SunMedium color="#ffed24" size={22} />;
    case "Cloudy":
      return <Cloud color="#b0c4de" size={22} />;
    case "Rainy":
      return <CloudRain color="#4682b4" size={22} />;
    default:
      return null;
  }
};

const Sidebar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-2 shadow-xl w-1/3 m-5 rounded-3xl h-auto bg-[#add8e6] space-y-1">
      {sampleData.map((city, index) => (
        <Card key={index} className="flex justify-between p-1.5 bg-[#007cbd] border-none w-full h-auto rounded-2xl shadow-md">
          <h1 className="text-white text-lg font-extralight pl-1">{city.name}</h1>
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