import CityInfoMain from "./ui/CityInfoMain";

interface CityData {
  temperature: number;
  weatherUnit: string;
  weather: string;
  highTemperature: number;
  lowTemperature: number;
  name: string;
  country: string;
}

const sampleData: CityData[] = [
  {
    temperature: 25,
    weatherUnit: "celsius",
    weather: "Cloudy",
    highTemperature: 30,
    lowTemperature: 20,
    name: "Toronto",
    country: "Canada",
  },
  {
    temperature: 30,
    weatherUnit: "celsius",
    weather: "Sunny",
    highTemperature: 35,
    lowTemperature: 25,
    name: "New York",
    country: "USA",
  },
  {
    temperature: 20,
    weatherUnit: "celsius",
    weather: "Rainy",
    highTemperature: 25,
    lowTemperature: 15,
    name: "London",
    country: "UK",
  },
];

const MainInfoContainer: React.FC = () => {
  return (
    <div className="flex items-center p-6 shadow-lg w-full h-full shadow-2xs m-5 rounded-xl bg-[#add8e6]">
      <CityInfoMain data={sampleData} />
    </div>
  );
};

export default MainInfoContainer;
