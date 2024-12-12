'use server'

interface Question {
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: string
}

export async function checkAnswers(questions: Question[], userAnswers: string[]) {
  let score = 5
  let qno=0
  const correctAnswers = questions.map((q) => q.correctAnswer)

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      if(qno<3){score=score+0.3};
      if(qno<6){score=score+0.2};
      if(qno<9){score=score+0.5}
      qno++;

    }
  }
 

  return { score, correctAnswers }
}

