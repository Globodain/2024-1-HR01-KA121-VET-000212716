// app/api/city/[cityName]/route.ts
import { NextResponse } from "next/server";

// Get your API key by signing up at OpenWeatherMap
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

const unitsAllowed = ["metric", "imperial"];

export async function GET(
  request: Request,
  { params }: { params: { cityName: string } }
) {
  try {
    const cityName = params.cityName;
    const { searchParams } = new URL(request.url);
    const requestedUnits = searchParams.get("units") || "metric";
    const units = unitsAllowed.includes(requestedUnits) ? requestedUnits : "metric";

    if (!OPENWEATHER_API_KEY) {
      return NextResponse.json(
        { error: "OpenWeather API key is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${OPENWEATHER_BASE_URL}/weather?q=${cityName}&units=${units}&appid=${OPENWEATHER_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to fetch weather data" },
        { status: response.status }
      );
    }

    const weatherData = await response.json();

    const formattedResponse = {
      city: weatherData.name,
      country: weatherData.sys.country,
      units: units,
      coordinates: {
        lat: weatherData.coord.lat,
        lon: weatherData.coord.lon,
      },
      weather: {
        main: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        iconUrl: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
      },
      temperature: {
        current: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        min: weatherData.main.temp_min,
        max: weatherData.main.temp_max,
      },
      wind: {
        speed: weatherData.wind.speed,
        direction: weatherData.wind.deg,
      },
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      visibility: weatherData.visibility,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      timestamp: weatherData.dt,
      timezone: weatherData.timezone,
    };

    return NextResponse.json(formattedResponse);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}

// Optional: Add support for query parameters
// This allows for: /api/city/london?units=imperial
export async function generateStaticParams() {
  return [
    { cityName: "london" },
    { cityName: "new-york" },
    { cityName: "tokyo" },
  ];
}
