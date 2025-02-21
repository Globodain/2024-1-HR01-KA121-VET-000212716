"use client";

import { useState } from "react";
import MainInfoContainer from "@/components/MainInfo";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "@/components/Footer";
import type { WeatherData } from "@/app/api/city/[cityName]/route";

export default function Home() {
  const [selectedCityData, setSelectedCityData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCityClick = async (cityName: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/city/${cityName}`);
      if (!response.ok) throw new Error("Failed to fetch city data");
      const data = await response.json();
      setSelectedCityData(data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar onCityClick={handleCityClick} />
        <MainInfoContainer data={selectedCityData} loading={loading} />
      </div>
      <Footer />
    </main>
  );
}