import "./ExerciseList.css";

function Exercise({ title, subject, difficulty }) {
  return (
    <div className="exercise-container">
      <div className="exercise-metadata">
        <p className="exercise-title">{title}</p>
        <p className="exercise-subject">{subject}</p>
      </div>
      <div className="exercise-difficulty">{difficulty}</div>
    </div>
  );
}

function ExerciseList({ exercises }) {
  return exercises.map((exercise) => {
    return (
      <div className="exercises-container" key={"exercise-" + exercise.title}>
        <Exercise {...exercise} key={exercise.title} />
        <hr className="exercise-divider" />
      </div>
    );
  });
}

export default ExerciseList;
