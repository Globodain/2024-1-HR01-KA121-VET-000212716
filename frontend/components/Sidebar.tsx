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
    <div className="flex flex-wrap items-center justify-center p-2 shadow-lg w-1/4 shadow-2xs m-5 rounded-xl h-auto bg-[#add8e6]">
      {sampleData.map((city, index) => (
        <Card key={index} className="flex justify-between p-2 m-1 bg-[#007cbd] border-none w-full h-auto rounded-full shadow-md">
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