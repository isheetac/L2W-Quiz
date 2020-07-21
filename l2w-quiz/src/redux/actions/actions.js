export const setQuiz = (data) => {
  return {
    type: "SET_QUIZ",
    quizData: data,
  };
};

export const countCorrect = () => {
  return {
    type: "COUNT_CORRECT",
  };
};

export const updateCurrent = (currentQuestion) => {
  return {
    type: "UPDATE_CURRENT",
    currentQuestion,
  };
};

export const setCategory = () => {
  return {
    type: "SET_CATEGORY",
  };
};

export const resetQuiz = () => {
  return {
    type: "RESET_QUIZ",
  };
};
