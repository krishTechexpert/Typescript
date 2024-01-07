import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoals } from "../App";
type CourseGoalProps = {
  goals:CGoals[],
  onDeleteGoal:(id:number) => void
}
function CourseGoalList({goals,onDeleteGoal}:CourseGoalProps){
  return <ul>
      {goals.map((goal) => {
        return <li>
              <CourseGoal key={goal.id} id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
        </li>
      })}
    </ul>
}
export default CourseGoalList;