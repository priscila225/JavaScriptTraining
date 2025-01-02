export interface WeatherData {
    description: string;
    temperature: number;
  }
  
  export interface ActivityResponse {
    city: string;
    weather: string;
    abcd
    temperature: number;
    activity: string;
  }

  export interface WeatherResponse {
    weather: { description: string }[];
    main: { temp: number };
  }