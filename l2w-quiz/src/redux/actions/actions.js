//Sets Quiz Questions
export const setQuiz = (data) => {
  return {
    type: "SET_QUIZ",
    quizData: data,
  };
};

//Select Category
export const setCategory = () => {
  return {
    type: "SET_CATEGORY",
  };
};

//Count Correct Answers
export const countCorrect = () => {
  return {
    type: "COUNT_CORRECT",
  };
};

//Update Current Question
export const updateCurrent = (currentQuestion) => {
  return {
    type: "UPDATE_CURRENT",
    currentQuestion: currentQuestion,
  };
};

//Reset Quiz
export const resetQuiz = () => {
  return {
    type: "RESET_QUIZ",
  };
};
