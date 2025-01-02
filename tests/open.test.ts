import { OpenAIService } from '../src/services/OpenAIService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpenAIService', () => {
  let service: OpenAIService;

  beforeEach(() => {
    service = new OpenAIService();
  });

  it('should get AI response for a valid input', async () => {
    const mockResponse = { data: { choices: [{ text: 'Mocked AI response' }] } };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await service.getAIResponse('valid input');
    expect(response).toBe('Mocked AI response');
  });

  it('should handle errors gracefully', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Failed to fetch response from OpenAI'));

    await expect(service.getAIResponse('valid input')).rejects.toThrow('Failed to fetch response from OpenAI');
  });
});