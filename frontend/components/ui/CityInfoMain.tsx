import { Separator } from "@radix-ui/react-separator";

interface CityInfoInterface {
  temperature: number;
  weatherUnit: string;
  weather: string;
  highTemperature: number;
  lowTemperature: number;
  name: string;
  country: string;
}

const CityInfo = ({ city }: { city: CityInfoInterface }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p>{city.name}</p>
        <Separator />
      </div>
    </div>
  );
};

export default CityInfo;
