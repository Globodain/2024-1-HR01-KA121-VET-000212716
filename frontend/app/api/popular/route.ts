import { NextResponse } from 'next/server';

interface CityWeatherData {
  name: string;
  country?: string;
  temperature: number;
  weather: string;
  weatherIcon?: string;
}

// TODO - add user favorites cities fetch from db if user is logged in 
const POPULAR_CITIES = [
  "Lovorje",
  "Buk-Vlaka",
  "Metković",
  "Komin",
  "Desne",
  "Mostar",
  "Čapljina",
  "Ljubuški",
  "Staševica",
  "Mihalj",
];

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function fetchCityWeather(cityName: string): Promise<CityWeatherData | null> {
  try {
    const response = await fetch(
      `${OPENWEATHER_BASE_URL}/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`,
      { next: { revalidate: 60 } } // Cache for 1 minute
    );
    
    if (!response.ok) {
      console.error(`Failed to fetch weather for ${cityName}: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    return {
      name: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      weather: data.weather[0].main,
      weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
  } catch (error) {
    console.error(`Error fetching weather for ${cityName}:`, error);
    return null;
  }
}

export async function GET() {
  if (!OPENWEATHER_API_KEY) {
    return NextResponse.json(
      { error: 'OpenWeather API key is not configured' },
      { status: 500 }
    );
  }
  
  try {
    const weatherPromises = POPULAR_CITIES.map(city => fetchCityWeather(city));
    const weatherResults = await Promise.all(weatherPromises);
    
    const citiesData = weatherResults.filter(result => result !== null);
    
    if (citiesData.length === 0) {
      return NextResponse.json(
        { error: 'Failed to fetch weather data for all cities' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(citiesData);
  } catch (error) {
    console.error('Error fetching popular cities weather:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
}