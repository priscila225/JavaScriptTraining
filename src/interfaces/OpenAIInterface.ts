export interface OpenAIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
      message: {
        role: 'system' | 'user' | 'assistant';
        content: string;
      };
      finish_reason: string;
      index: number;
    }>;
  }
  
