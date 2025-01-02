import axios from 'axios';
import { OpenAIResponse } from '../interfaces/OpenAIInterface';

export class OpenAIService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || '';
  }

  public async getAIResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post<OpenAIResponse>(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003', // or another model like 'gpt-3.5-turbo'
          prompt: prompt,
          max_tokens: 100,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      const data = response.data; // TypeScript now knows `data` is `OpenAIResponse`
      return data.choices[0].text.trim();
    } catch (error) {
      throw new Error('Failed to fetch response from OpenAI');
    }
  }
}
