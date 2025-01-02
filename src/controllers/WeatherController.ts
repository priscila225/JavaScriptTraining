import { Request, Response } from "express";
import { WeatherService } from "../services/WeatherService";
import { OpenAIService } from "../services/OpenAIService";
import { ActivityResponse } from "../interfaces/WeatherInterface";

export class WeatherController {
  private weatherService: WeatherService;
  private openAIService: OpenAIService;

  constructor() {
    this.weatherService = new WeatherService();
    this.openAIService = new OpenAIService();
  }

  async getActivity(req: Request, res: Response): Promise<void> {
    const { city } = req.query;

    if (!city || typeof city !== "string") {
      res.status(400).json({ error: "City is required and must be a string" });
      return;
    }

    try {
      const weatherData = await this.weatherService.getWeather(city);
      const activity = await this.openAIService.getAIResponse(
        weatherData.description,
      );

      const response: ActivityResponse = {
        city,
        weather: weatherData.description,
        temperature: weatherData.temperature,
        activity,
      };

      res.json(response);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
