import "./ResultCard.css";

function ResultCard({ score, total }) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-card">
      <h1>Quiz Complete!</h1>

      <div className="score-display">
        <h2>
          {score} / {total}
        </h2>

        <p>{percentage}%</p>
      </div>

      <div className="result-details">
        <p>
          <strong>Total Questions:</strong> {total}
        </p>

        <p>
          <strong>Correct Answers:</strong> {score}
        </p>

        <p>
          <strong>Incorrect Answers:</strong> {incorrect}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;