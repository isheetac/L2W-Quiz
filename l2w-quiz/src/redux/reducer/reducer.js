import {
  setQuiz,
  setCategory,
  countCorrect,
  updateCurrent,
  resetQuiz,
} from "../actions/actions";

export const initialState = {
  quizData: null,
  selectCategory: false,
  correctAnswers: 0,
  currentQuestion: 0,
};

//Reducer
export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUIZ":
      return {
        ...state,
        quizData: action.quizData,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectCategory: true,
      };
    case "COUNT_CORRECT":
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    case "UPDATE_CURRENT":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "RESET_QUIZ":
      return {
        initialState,
      };
    default:
      return state;
  }
};
