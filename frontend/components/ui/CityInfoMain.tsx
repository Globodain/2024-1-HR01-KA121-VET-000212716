import { Separator } from "@radix-ui/react-separator";

export interface CityInfoInterface {
    temperature: number;
    weatherUnit: string;
    weather: string;
    highTemperature: number;
    lowTemperature: number;
    name: string;
    country: string;
}

interface CityInfoMainProps {
    city: CityInfoInterface;
}

const CityInfoMain = ({ city }: CityInfoMainProps) => {
    return (
        <div>
            <h3>{city.name}</h3>
            <p>{city.country}</p>
            <p>{city.weather} - {city.temperature}°{city.weatherUnit}</p>
        </div>
    );
};

export default CityInfoMain;