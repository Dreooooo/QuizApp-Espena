import "./QuizHeader.css";

function QuizHeader({ currentQuestion, totalQuestions, score }) {
  return (
    <div className="quiz-header">
      <p>
        Question {currentQuestion} of {totalQuestions}
      </p>

      <p>
        Score: {score}
      </p>
    </div>
  );
}

export default QuizHeader;