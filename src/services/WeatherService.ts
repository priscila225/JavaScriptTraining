import axios from "axios";
import { WeatherResponse } from "../interfaces/WeatherInterface";

export class WeatherService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.OPENWEATHER_API_KEY || "";
  }

  public async getWeather(
    city: string,
  ): Promise<{ description: string; temperature: number }> {
    try {
      const response = await axios.get<WeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: this.apiKey,
            units: "metric",
          },
        },
      );

      // Log the full response to check the API's response
      console.log("OpenWeather Response:", response.data);

      const data = response.data; // TypeScript now knows `data` is `WeatherResponse`
      return {
        description: data.weather[0].description,
        temperature: data.main.temp,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error("Failed to fetch weather data");
    }
  }
}
