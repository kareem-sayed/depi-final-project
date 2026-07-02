import Quiz from './quiz.model.js';

export const getQuizByProphetSlug = async (slug: string) => {
  return await Quiz.findOne({ slug });
};

export const submitQuiz = async (slug: string, answers: number[]) => {
  const quiz = await Quiz.findOne({ slug });

  if (!quiz) {
    const error = new Error(`Quiz for prophet with slug '${slug}' not found`);
    (error as any).statusCode = 404;
    throw error;
  }

  if (answers.length !== quiz.questions.length) {
    const error = new Error(`Expected ${quiz.questions.length} answers, received ${answers.length}`);
    (error as any).statusCode = 400;
    throw error;
  }

  const score = quiz.questions.reduce((total, question, index) => {
    return answers[index] === question.correctAnswer ? total + 1 : total;
  }, 0);
  const totalQuestions = quiz.questions.length;

  return {
    score,
    totalQuestions,
    percentage: totalQuestions === 0 ? 0 : (score / totalQuestions) * 100,
  };
};
