import { GoogleGenerativeAI } from '@google/generative-ai';
import { streamText } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = streamText({
      model: {
        invoke: async (input) => {
          const result = await model.generateContent(input);
          return result.response.text();
        },
      },
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'An error occurred while processing your request.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

