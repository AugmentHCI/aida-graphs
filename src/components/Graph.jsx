import "./Graph.css";
import { useEffect, useState } from "react";
import {
  getProgressEmbellishmentScore,
  getScoreEmbellishmentScore,
} from "../data/embellishments";

function Graph({
  current,
  points,
  embellished = false,
  contextualised = false,
}) {
  // Sets the amount of bars visible in graph
  const barCount = 20;
  const resolution = 100 / barCount;

  const [bars, setBars] = useState([]);
  // Goal is simply the current score + points
  const [goal, setGoal] = useState(current + points);

  useEffect(() => {
    let newBars = [];
    const calculatedGoalBar = Math.round((current + points) / resolution);

    for (let i = 0; i < barCount; i++) {
      // TODO: Randomly assigns height to each bar, perhaps draw from distribution
      const height = Math.floor(Math.random() * 40);
      newBars.push(
        contextualised ? (
          <div
            key={"bar-" + i}
            className={
              "graph-bar" + (i === calculatedGoalBar ? " current-bar" : "")
            }
            style={{ height: height + "px" }}
          />
        ) : (
          <div key={"tick-" + i} className="graph-tick" />
        )
      );
    }
    setBars(newBars);
    setGoal(current + points);
  }, [points, current, resolution, contextualised]);

  const arrowWidth =
    Math.round((goal - current) / resolution) * resolution + 4 + "%";
  const arrowTextWidth = (goal - current) / 2 + current * 2 + 5 + "%";

  return (
    <div className="graph-container">
      <div className="graph-anchor" style={{ left: current - 5 + "%" }}>
        {embellished ? getScoreEmbellishmentScore(current) : ""} {current}{" "}
        punten
      </div>
      <div
        className="graph-line goal"
        style={{ left: Math.round(goal / resolution) * resolution + 3 + "%" }}
      />
      <div className="graph-anchor goal" style={{ left: goal - 2 + "%" }}>
        {embellished ? getScoreEmbellishmentScore(goal) : ""} {goal} punten
      </div>
      <div className="graph-line" style={{ left: current - 1.8 + "%" }} />
      <div className="graph-bars">{bars}</div>
      <div className="graph-text">
        <div
          className="arrow"
          style={{
            left: current - 1 + "%",
            width: arrowWidth,
          }}
        />
        <p
          className="arrow-text"
          style={{
            width: arrowTextWidth,
          }}
        >
          + {points} punten{" "}
          {embellished ? getProgressEmbellishmentScore(points) : ""}
        </p>
        <p>Laag level (0)</p>
        <p>Hoog level (100)</p>
      </div>
    </div>
  );
}

export default Graph;
