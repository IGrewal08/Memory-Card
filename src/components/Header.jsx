import "/src/styles/Header.css";

export default function Header({ currScore = 0, bestScore = 0 }) {
  return (
    <header>
      <h1>Animal Memory-Card</h1>
      <div className="scores">
        <h3>Current Score: {currScore}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </header>
  );
}
