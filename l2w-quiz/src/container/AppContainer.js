import React from "react";
import App from "../components/App";
import { connect } from "react-redux";
import {
  setQuiz,
  setCategory,
  resetQuiz,
  countCorrect,
  updateCurrent,
  currentQuestion,
} from "../redux/actions/actions";

const mapStateToProps = (state) => {
  return {
    quizData: state.quizData,
    selectCategory: state.selectCategory,
    currentQuestion: state.currentQuestion,
    correctAnswers: state.correctAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuiz: (quizData) => dispatch(setQuiz(quizData)),
    setCategory: () => dispatch(setCategory()),
    resetQuiz: () => dispatch(resetQuiz()),
    countCorrect: () => dispatch(countCorrect()),
    updateCurrent: (currentQuestion) =>
      dispatch(updateCurrent(currentQuestion)),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
