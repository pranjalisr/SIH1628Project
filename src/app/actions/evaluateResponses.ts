export function evaluateResponses(questions: any[], responses: any[]) {
    let totalMarks = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
  
    responses.forEach(({ question, selectedOption }) => {
      const originalQuestion = questions.find((q) => q.question === question);
      if (originalQuestion) {
        if (originalQuestion.correct_option === selectedOption) {
          totalMarks += 1;
          correctAnswers += 1;
        } else {
          incorrectAnswers += 1;
        }
      }
    });
  
    return {
      totalMarks,
      correctAnswers,
      incorrectAnswers,
    };
  }
  