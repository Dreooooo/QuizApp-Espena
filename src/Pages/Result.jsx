import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../Components/ResultCard";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 10;

  const retakeQuiz = () => {
    navigate("/quiz");
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="result-page">
      <div className="result-container">

        <ResultCard
          score={score}
          total={total}
        />

        <div className="result-buttons">
          <button onClick={retakeQuiz}>
            Retake Quiz
          </button>

          <button onClick={returnHome}>
            Return Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Result;