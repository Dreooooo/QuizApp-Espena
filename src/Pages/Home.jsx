import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Quiz App</h1>

        <p>
          Test your knowledge with our 10-question quiz.
          Choose the correct answer and see how well you score!
        </p>

        <button onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;