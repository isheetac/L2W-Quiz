import React from "react";
import App from "../components/App";
import { connect } from "react-redux";
import {
  setQuiz,
  setCategory,
  countCorrect,
  updateCurrent,
  resetQuiz,
  currentQuestion,
} from "../redux/actions/actions";

const mapStateToProps = (state) => {
  return {
    quizData: state.quizData,
    currentQuestion: state.currentQuestion,
    correctAnswers: state.correctAnswers,
    selectCategory: state.selectCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuizData: (quizData) => dispatch(setQuiz(quizData)),
    setCategory: () => dispatch(setCategory()),
    countCorrect: () => dispatch(countCorrect()),
    updateCurrent: () => dispatch(updateCurrent(currentQuestion)),
    resetQuiz: () => dispatch(resetQuiz()),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
