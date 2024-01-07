import { type ReactNode } from 'react';
import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {

  
  if(goals.length ===0){
    return <InfoBox mode="hint">
      you have no course goal yet.Starting add some goal
    </InfoBox>
  }

  let warning:ReactNode;

  if(goals.length>=4){
    warning=<InfoBox mode="warning" badge='high'>You can add only 4 Goals.</InfoBox>
  }


  return <>
    {warning}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
}
