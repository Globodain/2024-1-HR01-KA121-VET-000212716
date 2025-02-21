"use client";

import CityInfoMain from "./ui/CityInfoMain";
import type { WeatherData } from "@/app/api/city/[cityName]/route";

interface MainInfoContainerProps {
  data: WeatherData | null;
  loading: boolean;
}

const MainInfoContainer = ({ data, loading }: MainInfoContainerProps) => {
  if (!data && !loading) {
    return (
      <div className="flex-1 p-5 flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Select a city from the sidebar to view weather details
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 p-5 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-5">
      <CityInfoMain data={data!} loading={loading} />
    </div>
  );
};

export default MainInfoContainer;