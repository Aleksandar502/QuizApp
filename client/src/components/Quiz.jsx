import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  function handleSelectAnwser(selectedAnwser) {
    setUserAnswers((curr) => [...curr, selectedAnwser]);
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((anwser) => (
            <li className="answer" key={anwser}>
              <button onClick={() => handleSelectAnwser(anwser)}>
                {anwser}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
