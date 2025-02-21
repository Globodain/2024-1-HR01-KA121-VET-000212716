"use client";

import CityInfoMain from "./ui/CityInfoMain";
import type { WeatherData } from "@/app/api/city/[cityName]/route";
import Image from "next/image";

interface MainInfoContainerProps {
  data: WeatherData | null;
  loading: boolean;
}

const MainInfoContainer = ({ data, loading }: MainInfoContainerProps) => {
  if (!data && !loading) {
    return (
      <div className="flex-1 p-5 flex items-center justify-center bg-[#add8e6] rounded-3xl m-5 shadow-lg">
        <p className="text-white text-4xl text-center font-bold ">
          Select a city from the sidebar to view weather details!
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 p-5 flex items-center justify-center">
        <Image src="/yellow-loading.svg" alt="Yellow Loading" width={160} height={160}></Image>
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