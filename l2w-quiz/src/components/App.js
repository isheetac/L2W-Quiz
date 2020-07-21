import React from "react";
import Button from "./Button";
import Score from "./Score";
import Card from "./Card";
import { getQuizApi, getSession } from "../api/getQuizApi";

const quizType = [
  { id: 18, title: "Science: Computers" },
  { id: 30, title: "Science: Gadgets" },
  { id: 19, title: "Science: Mathematics" },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
    this.sessionToken = null;
  }

  componentDidMount() {
    getSession().then((session) => {
      this.sessionToken = session.token;
    });
  }

  fetchCategory(categoryId) {
    return () => {
      const { setQuiz, setCategory } = this.props;
      getQuizApi(categoryId, this.sessionToken)
        .then((quizData) => setQuiz(quizData.results))
        .then(() => setCategory());
    };
  }

  restartQuiz() {
    const { resetQuiz } = this.props;
    resetQuiz();
  }

  checkAnswer(answer, correctAnswer) {
    const { countCorrect, updateCurrent, currentQuestion } = this.props;
    return () => {
      if (answer === correctAnswer) {
        countCorrect();
      }
      updateCurrent(currentQuestion);
    };
  }

  showCard = (record, index) => {
    const { correct_answer, incorrect_answers, question } = record;
    return (
      <Card
        key={index}
        checkAnswerFn={this.checkAnswer}
        question={atob(question)}
        duration={10}
        correctAnswer={atob(correct_answer)}
        wrongAnswers={incorrect_answers.map((x) => atob(x))}
      />
    );
  };

  render() {
    const {
      quizData,
      selectCategory,
      correctAnswers,
      currentQuestion,
    } = this.props;
    return (
      <div className="app">
        {!selectCategory && <h1>Pick a Category</h1>}
        {!selectCategory &&
          quizType.map((item, i) => {
            return (
              <Button
                key={i}
                onClick={this.fetchCategory(item.id)}
                id={item.id}
              >
                {item.title}
              </Button>
            );
          })}
        {quizData && currentQuestion < 10
          ? this.showCard(quizData[currentQuestion], currentQuestion)
          : ""}
        {quizData && currentQuestion === 10 ? (
          <Score score={correctAnswers} refresh={this.restartQuiz} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
