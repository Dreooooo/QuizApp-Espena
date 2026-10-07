import "./QuestionCard.css";
import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer
}) {
  return (
    <div className="question-card">
      <p className="question-number">
        Question {questionNumber}
      </p>

      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            choice={choice}
            selected={selectedAnswer === choice}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;