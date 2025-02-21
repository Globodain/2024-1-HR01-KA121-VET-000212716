// app/api/city/[cityName]/route.ts
import { NextResponse } from 'next/server';

export interface WeatherData {
  city: string;
  country: string;
  weather: {
    main: string;
    description: string;
    icon: string;
    iconUrl: string;
  };
  temperature: {
    current: number;
    feelsLike: number;
    min: number;
    max: number;
  };
  wind: {
    speed: number;
    direction: number;
  };
  humidity: number;
  pressure: number;
  visibility: number;
  hourlyForecast: Array<{
    time: number;
    temp: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    };
  }>;
}

// Get your API key by signing up at OpenWeatherMap
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

const unitsAllowed = ["metric", "imperial"];

export async function GET(
  request: Request,
  { params }: { params: { cityName: string } }
) {
  try {
    const cityName = await params.cityName;
    const { searchParams } = new URL(request.url);
    const requestedUnits = searchParams.get("units") || "metric";
    const units = unitsAllowed.includes(requestedUnits) ? requestedUnits : "metric";

    if (!OPENWEATHER_API_KEY) {
      return NextResponse.json(
        { error: "OpenWeather API key is not configured" },
        { status: 500 }
      );
    }
    
    // Fetch current weather
    const currentWeatherResponse = await fetch(
      `${OPENWEATHER_BASE_URL}/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!currentWeatherResponse.ok) {
      const errorData = await currentWeatherResponse.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch weather data' },
        { status: currentWeatherResponse.status }
      );
    }

    const weatherData = await currentWeatherResponse.json();

    // Fetch hourly forecast using coordinates
    const hourlyResponse = await fetch(
      `${OPENWEATHER_BASE_URL}/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=metric&appid=${OPENWEATHER_API_KEY}`
    );

    if (!hourlyResponse.ok) {
      const errorData = await hourlyResponse.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch hourly forecast' },
        { status: hourlyResponse.status }
      );
    }

    const hourlyData = await hourlyResponse.json();
    
    // Format the response with just the data we need
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
      hourlyForecast: hourlyData.list.slice(0, 8).map((hour: any) => ({
        time: hour.dt,
        temp: hour.main.temp,
        weather: {
          main: hour.weather[0].main,
          description: hour.weather[0].description,
          icon: hour.weather[0].icon
        }
      }))
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
