import axios from "axios";
import { OpenAIResponse } from "../interfaces/OpenAIInterface";

export class OpenAIService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || "";
  }

  public async getAIResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post<OpenAIResponse>(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      const data = response.data;
      return data.choices[0].message.content.trim();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
      throw new Error("Failed to fetch response from OpenAI");
    }
  }
}
