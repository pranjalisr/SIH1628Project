"use client";

import { useState } from "react";
import { generateQuestions } from "../../actions/generateQuestions";
import { evaluateResponses } from "../../actions/evaluateResponses";

export default function Home() {
  const [skill, setSkill] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [responses, setResponses] = useState<any[]>([]);
  const [result, setResult] = useState<any | null>(null);

  const handleGenerateQuestions = async () => {
    try {
      const generatedQuestions = await generateQuestions(skill, 5);
      setQuestions(generatedQuestions);
      setResponses([]);
      setResult(null);
    } catch (error) {
      console.error("Error generating questions:", error);
    }
  };

  const handleEvaluateResponses = () => {
    const evaluation = evaluateResponses(questions, responses);
    setResult(evaluation);
  };

  return (
    <main>
      <h1>Competency Test</h1>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button onClick={handleGenerateQuestions}>Generate Questions</button>

      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() =>
                setResponses((prev) => [
                  ...prev.filter((r) => r.question !== q.question),
                  { question: q.question, selectedOption: idx },
                ])
              }
            >
              {option}
            </button>
          ))}
        </div>
      ))}

      {questions.length > 0 && (
        <button onClick={handleEvaluateResponses}>Submit</button>
      )}

      {result && (
        <div>
          <h2>Results</h2>
          <p>Total Marks: {result.totalMarks}</p>
          <p>Correct Answers: {result.correctAnswers}</p>
          <p>Incorrect Answers: {result.incorrectAnswers}</p>
        </div>
      )}
    </main>
  );
}
