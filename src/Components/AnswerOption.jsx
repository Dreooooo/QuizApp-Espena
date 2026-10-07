import "./AnswerOption.css";

function AnswerOption({ choice, selected, onSelect }) {
  return (
    <button
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={() => onSelect(choice)}
    >
      {choice}
    </button>
  );
}

export default AnswerOption;