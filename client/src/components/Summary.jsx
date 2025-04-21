import QuizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare =
    Math.round(skippedAnswers.length / userAnswers.length) * 100;
  const correctAnswersShare =
    Math.round(correctAnswers.length / userAnswers.length) * 100;

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={QuizComplete} alt="quiz completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, ind) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[ind].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={ind}>
              <h3>{ind + 1}</h3>
              <p className="question">{QUESTIONS[ind].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
        <li></li>
      </ol>
    </div>
  );
};

export default Summary;
