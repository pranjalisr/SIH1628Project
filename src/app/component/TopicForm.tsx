'use client'

import { useState } from 'react'

import { QuizComponent } from './QuizComponent'
import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI("AIzaSyCG36T3FqqguAOXq9aea3IlORJ6zg6Fz7A");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function generateQuestions() {
  const prompt = `you are a competency analyzer Generate new 3 multiple-choice questions for a person to check their communication , 3 question on problem-solving and 3 questions to check teamwork in the respective order. Format the response as a JSON array. Ensure there are no backticks or any non-JSON characters. The structure should be:
  [
    {
      "question": "The question text",
      "options": {
        "A": "Option A text",
        "B": "Option B text",
        "C": "Option C text",
        "D": "Option D text"
      },
      "correctAnswer": "The correct option letter (A, B, C, or D)"
    }
  ]
  `;
  

 
    
    const result = await model.generateContent(prompt);
    

    return result.response.text();
  
}
export function TopicForm() {
  
  const [questions, setQuestions] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('');
    
   
      const genn = await generateQuestions();
      const generatedQuestions=JSON.parse(genn);


      console.log(genn);
      setQuestions(generatedQuestions);
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? 'Generating...' : 'Give Competency test'}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {questions && <QuizComponent questions={questions} />}
    </div>
  )
}

