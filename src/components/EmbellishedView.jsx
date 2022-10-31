import {
  getProgressEmbellishmentScore,
  getScoreEmbellishmentScore,
} from "../data/embellishments";

import "./EmbellishedView.css";

function EmbellishedView({ current, points }) {
  return (
    <div className="embellishment-container">
      <div className="embellishment-card current">
        <div className="embellished-emoji">
          {getScoreEmbellishmentScore(current)}
        </div>
        <div className="embellished-text">
          <p>Nu:</p>
          <b>{current} punten</b>
        </div>
      </div>
      <div className="arrow-container">
        <div className="embellished-arrow" />
        <p className="embellished-arrow-text">
          + {points} punten {getProgressEmbellishmentScore(points)}
        </p>
      </div>
      <div className="embellishment-card">
        <div className="embellished-emoji">
          {getScoreEmbellishmentScore(current + points)}
        </div>
        <div className="embellished-text">
          <p>Na de reeks:</p>
          <b>{current + points} punten</b>
        </div>
      </div>
    </div>
  );
}

export default EmbellishedView;
