# JavaScriptTraining

Chapter 7

# Weather Service API

## Overview

This Weather Service API allows you to fetch weather information for a given city, integrating with an external weather service to retrieve current weather data. It gracefully handles both valid and invalid city requests. This API is built using **Node.js** with **TypeScript** and **Axios** for HTTP requests.

Additionally, the service uses the **Open Weather API** and **OpenAI API** to enhance its responses, such as generating weather descriptions or suggestions based on weather conditions. This integration allows for a more dynamic user experience.

## Features

- Fetch current weather information for a given city.
- Returns weather data like description, temperature, and more.
- Handles errors gracefully for invalid city names.
- Uses OpenAI API to generate descriptive text based on the weather data.

## API Endpoints

### GET `/api/activity`

This endpoint returns weather information for a specified city.

#### Query Parameters:

- `city`: The name of the city to fetch weather data for.

#### Example Request:

```http
GET /api/activity?city=London
```

#### Example Response (200 - Success):

```json
{
  "description": "Clear sky",
  "temperature": 15
}
```

#### Example Response (500 - Error):

```json
{
  "error": "Failed to fetch weather data"
}
```

## OpenAI API Integration

The service integrates with the **OpenAI API** to provide more descriptive weather information based on conditions. This could include adding fun or dynamic descriptions, enhancing the user experience.

- **When a valid city is requested**, the OpenAI API can generate additional weather descriptions, suggesting activities based on current weather conditions.
- **For invalid cities**, the OpenAI API may return a more detailed message or suggest alternatives.

### Setup Instructions

#### Prerequisites

- **Node.js** (v14 or later)
- **TypeScript**
- **Axios** (for making HTTP requests)
- **OpenAI API Key** (for enhanced weather descriptions)

#### 1. Install Dependencies

Clone the repository and install the required dependencies:

```bash
npm install
```

#### 2. Configure API Keys

To enable OpenAI API integration, you'll need to configure your OpenAI API key. Create a `.env` file in the root of the project and add the following:

```env
OPENWEATHER_API_KEY=#get your free open weather api key here: https://home.openweathermap.org/api_keys
OPENAI_API_KEY=#get your open ai api key here free account: https://platform.openai.com/settings/organization/api-keys
```

#### 3. Run the Application

To start the server:

```bash
npm start
```

You can access the Weather API at `http://localhost:3000/api/activity`.

### Running Tests

To run the tests:

```bash
npm test
```

## Testing

This API has been tested using **Jest** to ensure that it behaves as expected under various scenarios:

- Fetching weather data for a valid city.
- Handling errors when an invalid city is requested.

### Test Scenarios

1. **Valid City Request**: Fetching weather data for a city such as "London".
2. **Invalid City Request**: Handling invalid city names like "InvalidCity" and returning appropriate error messages.

### Test Dependencies

- **jest**: JavaScript testing framework.
- **ts-jest**: TypeScript preprocessor for Jest.
- **axios**: HTTP client for making requests.
- **supertest**: HTTP assertions for testing APIs.

### Running Tests

To run the tests:

```bash
npx jest
```

This will run all the tests and output the results in the terminal.
