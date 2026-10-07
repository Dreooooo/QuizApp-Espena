import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../Data/questions";
import QuestionCard from "../Components/QuestionCard";
import QuizHeader from "../Components/QuizHeader";
import ProgressBar from "../Components/ProgressBar";
import "./Quiz.css";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      navigate("/result", {
        state: {
          score:
            selectedAnswer === question.answer
              ? score + 1
              : score,
          total: questions.length
        }
      });

      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <QuizHeader
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            score={score}
        />

        <ProgressBar
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
        />

        <QuestionCard
          question={question}
          questionNumber={currentQuestion + 1}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
        />

        <button
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;