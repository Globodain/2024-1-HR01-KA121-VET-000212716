import Navbar from "../../../components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, Search, Settings, RefreshCw } from "lucide-react";

const HelpPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-[#007cdf] mb-8">Help Center</h1>
        
        <div className="grid gap-8">
          {/* Getting Started Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-[#007cdf]" />
              <h2 className="text-2xl font-semibold">Getting Started</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Welcome to SkyCast! Here&apos;s how to get the most out of our weather application:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>View current weather conditions for your location</li>
              <li>Check hourly and daily forecasts</li>
              <li>Track multiple cities in your sidebar</li>
              <li>Toggle between Celsius and Fahrenheit</li>
            </ul>
          </section>

          {/* Search Features Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6 text-[#007cdf]" />
              <h2 className="text-2xl font-semibold">Search Features</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Find weather information for any city:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use the search bar at the top of the page</li>
              <li>Type city name and press Enter</li>
              <li>View detailed weather information</li>
              <li>Add cities to your quick access sidebar</li>
            </ul>
          </section>

          {/* Settings & Preferences */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-[#007cdf]" />
              <h2 className="text-2xl font-semibold">Settings & Preferences</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Customize your weather viewing experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Switch between temperature units (°C/°F)</li>
              <li>Customize your location preferences</li>
              <li>Manage your saved cities</li>
              <li>Set up weather alerts (coming soon)</li>
            </ul>
          </section>

          {/* Data Updates */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="w-6 h-6 text-[#007cdf]" />
              <h2 className="text-2xl font-semibold">Data Updates</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our weather data is regularly updated to ensure accuracy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Weather data refreshes every hour</li>
              <li>Forecasts are updated every 3 hours</li>
              <li>Historical data is archived daily</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HelpPage;