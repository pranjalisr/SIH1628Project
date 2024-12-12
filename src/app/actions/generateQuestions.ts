import { Configuration, OpenAI } from "openai";

// Ensure you use the correct import and configuration for the OpenAI library


const openai = new OpenAI({ apiKey: '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',dangerouslyAllowBrowser: true  });

export async function generateQuestions(skill: string, numQuestions: number = 5) {
  const prompt = `
    Create ${numQuestions} multiple-choice questions for the skill '${skill}'.
    Each question should have 3 options, one of which is correct.
    Return the result in JSON format like:
    [
        { "question": "What does 'len()' function do in Python?", "options": ["Adds elements", "Returns the length", "Deletes elements"], "correct_option": 1 },
        ...
    ]`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    // Parse the JSON response
    const jsonString = response.data.choices[0]?.message?.content || "[]";
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error generating questions:", error);
    throw new Error("Failed to generate questions");
  }
}
