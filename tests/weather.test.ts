import axios from "axios";
import { WeatherService } from "../src/services/WeatherService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("WeatherService", () => {
  let weatherService: WeatherService;

  beforeEach(() => {
    weatherService = new WeatherService();
  });

  it("should return weather data for a valid city", async () => {
    const mockResponse = {
      data: {
        weather: [{ description: "clear sky" }],
        main: { temp: 15 },
      },
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await weatherService.getWeather("London");
    expect(result).toEqual({ description: "clear sky", temperature: 15 });
  });

  it("should throw an error for an invalid city", async () => {
    mockedAxios.get.mockRejectedValue(new Error("City not found"));

    await expect(weatherService.getWeather("InvalidCity")).rejects.toThrow(
      "Failed to fetch weather data",
    );
  });
});
