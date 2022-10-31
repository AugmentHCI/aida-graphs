import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import ExerciseList from "../components/ExerciseList";
import SubjectCard from "../components/SubjectCard";
import { exercises, subjects } from "../data/dummyData";

function RecommendationPage() {
  let [searchParams] = useSearchParams();
  const embellished = searchParams.get("embellished") === "true" ? true : false;
  const contextualised =
    searchParams.get("contextualised") === "true" ? true : false;

  return (
    <div className="page">
      <div className="two-column">
        <div className="left-column">
          <div className="column-header">Voorgestelde oefeningen</div>
          <div className="column-content">
            <ExerciseList exercises={exercises} />
            <div className="exercise-buttons">
              <Button className="primary">Los reeks op</Button>
              <Button className="secondary">Vraag nieuwe reeks</Button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="column-header">
            Als ik deze oefeningen juist oplos...
          </div>
          <div className="column-content">
            {Object.entries(subjects).map(([_, subject]) => {
              return (
                <SubjectCard
                  key={"subject-" + subject}
                  subject={subject.title}
                  // TODO: Current (students current level) is still hard coded
                  current={subject.score}
                  exercises={exercises.filter((exercise) => {
                    return exercise.subject === subject.title;
                  })}
                  embellished={embellished ? true : false}
                  contextualised={contextualised ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationPage;
