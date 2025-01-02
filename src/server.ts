import express from "express";
import dotenv from "dotenv";
import { WeatherController } from "./controllers/WeatherController";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const weatherController = new WeatherController();

app.get("/api/activity", (req, res) => weatherController.getActivity(req, res));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app };
