import {
  getCardEmbellishmentScore,
  getProgressEmbellishmentScore,
} from "../data/embellishments";
import { useReward } from "react-rewards";
import Graph from "./Graph";
import "./SubjectCard.css";
import { useEffect, useId, useState } from "react";
import EmbellishedView from "./EmbellishedView";

function SubjectCard({
  subject,
  current,
  exercises,
  embellished = false,
  contextualised = false,
}) {
  const [points, setPoints] = useState(0);
  const ref = useId();
  const { reward, isAnimating } = useReward(ref, "confetti");

  const [showClickMe, setShowClickMe] = useState(true);

  useEffect(() => {
    setPoints(
      exercises.reduce((sum, exercise) => {
        return sum + exercise.award;
      }, 0)
    );
  }, [exercises]);

  useEffect(() => {
    if (isAnimating) setShowClickMe(false);
  }, [isAnimating]);

  return (
    <div className="subject-container">
      <div className="subject-title">{subject}</div>
      <div className="subject-description">
        Indien je deze{" "}
        {exercises.length > 1
          ? exercises.length + " oefeningen"
          : " 1 oefening"}{" "}
        oplost, ga je met <b>{points} punten</b> vooruit!{" "}
        {embellished && getProgressEmbellishmentScore(points)}
      </div>
      {embellished && (
        <button onClick={reward} className="progress-emoji">
          <span id={ref} />
          {getCardEmbellishmentScore(points)}
          {showClickMe && <div className="progress-text">Klik</div>}
        </button>
      )}
      {embellished && !contextualised ? (
        <EmbellishedView current={current} points={points} />
      ) : (
        <Graph
          current={current}
          points={points}
          embellished={embellished}
          contextualised={contextualised}
        />
      )}
    </div>
  );
}

export default SubjectCard;
