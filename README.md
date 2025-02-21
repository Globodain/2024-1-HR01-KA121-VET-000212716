# SkyCAST

SkyCAST is a fast and lightweight web-based weather forecasting site built with Next.js and Shadcn UI. It provides accurate, user-friendly weather information with a focus on reliability and simplicity.

## Features

### Weather Forecast
- 24-hour and 7-day accurate weather forecasts
- High precision with 98.2% accuracy rate
- Real-world weather information retrieved through OpenWeather API
- Conversion between celsuius and farrenheit

## Technology Stack

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)

## Deployment Instructions

### Prerequisites

Before deploying SkyCAST, ensure you have the following:
1. Node.js (version 18.0.0 or higher)
2. npm (version 8.0.0 or higher)
3. An OpenWeather API key (obtain from [OpenWeather](https://openweathermap.org/api))

### Setting Up Environment Variables

1. Create a `.env.local` file in the root directory of your project
2. Add your OpenWeather API key:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/manuelradaljac/globodain-internship.git
cd skycast
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Start the production server:
```bash
npm start
```

For development mode, use:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Troubleshooting Common Deployment Issues

1. If you see API errors, verify that:
   - Your OpenWeather API key is correctly set in `.env.local`
   - The API key has been activated (can take up to 2 hours after registration)
   - You're not exceeding API rate limits

2. For build errors, ensure:
   - All dependencies are properly installed
   - Node.js and npm versions meet the minimum requirements
   - Your `.env.local` file exists and is properly formatted

## API Integration

SkyCAST uses OpenWeather API for retrieving weather data. Make sure to:
- Register for an API key at OpenWeather
- Stay within the API usage limits of your plan
- Handle API responses appropriately in your code

## Legal Information

### Terms of Use
- Users must create an account for certain features
- Weather information is provided "as is" and "as available"
- Users should verify critical weather-related decisions with official government services
- Full terms available in the application

### Privacy Policy
Please refer to our Privacy Policy section in the application for detailed information about data handling and user privacy.

## Disclaimer

While we strive for accuracy in our weather forecasts:
- All weather data is provided "as is" and "as available"
- SkyCAST does not guarantee 100% accuracy of weather information
- Users should cross-reference critical weather-related decisions with official sources

## Support

For additional information, please refer to:
- FAQ section in the application
- Privacy policy in the application

## License

All content, features, and functionality of SkyCAST are protected by international copyright, trademark, and other intellectual property laws.

---

Last Updated: February 21, 2025
