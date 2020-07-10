import React from "react";
import Button from "./Button";
import Score from "./Score";
import Card from "./Card";
import { getQuizApi, getSession } from "../api/getQuizApi";

const quizType = [
  { id: 18, title: "Science:Computers" },
  { id: 30, title: "Science:Gadgets" },
  { id: 19, title: "Science:Mathematics" },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.sessionToken = null;
  }

  //Fetch Category of Quiz
  fetchCategory = (categoryId) => {
    const { setQuizData, setCategory } = this.props;
    getQuizApi(categoryId, this.sessionToken)
      .then((quizData) => setQuizData(quizData.results))
      .then(() => setCategory());
  };

  //Check Answer
  checkAnswer = (answer, correctAnswer) => {
    const { countCorrect, updateCurrent, currentQuestion } = this.props;
    if (answer === correctAnswer) {
      countCorrect();
    }
    updateCurrent(currentQuestion);
  };

  //Show Card
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

  //Get Session Token
  componentDidMount = () => {
    getSession().then((session) => {
      this.sessionToken = session.token;
    });
  };

  //Restart Quiz
  restartQuiz = () => {
    const { resetQuiz } = this.props;
    resetQuiz();
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
        {!selectCategory && <h1>Select a Category</h1>}{" "}
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
          <Score score={rightAnswers} refresh={this.restartGame} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
