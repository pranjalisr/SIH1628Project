'use client';

import { useState } from 'react';
import { checkAnswers } from './checkAnswers';

interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
}

interface QuizComponentProps {
  questions: Question[];
}

export function QuizComponent({ questions }: QuizComponentProps) {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [result, setResult] = useState<{ score: number; correctAnswers: string[] } | null>(null);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const updateScore = async (userId: string, credibilityScore: number): Promise<void> => {
    const apiUrl = 'http://localhost:5000/update-user';
    const payload = { userId, credibilityScore };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      console.log('Score update successful');
    } catch (error) {
      console.error('Error updating credibility score:', error);
    }
  };

  const handleSubmit = async () => {
    const checkResult = await checkAnswers(questions, userAnswers);
    setResult(checkResult);

    if (checkResult && checkResult.score !== undefined) {
      await updateScore('tanuj', checkResult.score);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-6 text-center">Quiz</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow">
          <p className="font-semibold mb-3">{q.question}</p>
          {Object.entries(q.options).map(([key, value]) => (
            <div
              key={key}
              className={`flex items-center mb-2 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                userAnswers[index] === key
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
              }`}
              onClick={() => handleAnswerChange(index, key)}
            >
              <input
                type="radio"
                id={`q${index}-${key}`}
                name={`q${index}`}
                value={key}
                checked={userAnswers[index] === key}
                onChange={() => handleAnswerChange(index, key)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 cursor-pointer"
              />
              <label htmlFor={`q${index}-${key}`} className="ml-3 text-gray-700">
                {key}: {value}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
      >
        Submit Answers
      </button>
      {result && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-lg">
          <p className="font-semibold mb-4">Competency Details:</p>
          <p className="mb-2">
            Weighted metrics:
            <ul className="ml-4 list-disc">
              <li>Communication: 30%</li>
              <li>Problem-solving: 20%</li>
              <li>Teamwork: 50%</li>
            </ul>
          </p>
          <p className="mb-2">Correct answers:</p>
          <ul className="list-disc ml-4 mb-4">
            {questions.map((q, index) => (
              <li key={index} className="text-gray-700">
                Question {index + 1}: {result.correctAnswers[index]}
              </li>
            ))}
          </ul>
          <p className="font-bold text-lg text-green-700">
            Your Competency Score: {result.score * 20} / 100
          </p>
        </div>
      )}
    </div>
  );
}
