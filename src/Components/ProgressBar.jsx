import "./ProgressBar.css";

function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{Math.round(progress)}% Complete</p>
    </div>
  );
}

export default ProgressBar;