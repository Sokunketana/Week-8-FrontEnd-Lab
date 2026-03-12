import React from "react";

export default function App() {
  const [score, setScore] = React.useState(0);
  function handleScore (e){
    const value = e.target.value;
    setScore(parseInt(value));
  }

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    const scoreColor = `rgb(${score * 243}, ${255 -score * 188}, ${score * 71})`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleScore}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
