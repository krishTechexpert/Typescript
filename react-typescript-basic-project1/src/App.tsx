import {useState} from 'react';
import CourseGoal from "./components/CourseGoal.tsx";
import logo from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title:string,
  description:string,
  id:number
}

export default function App() {

  const [goals,setGoals]=useState<CourseGoal[]>([])

function handleAddGoal(newGoal:CourseGoal){
  setGoals((prevGoals) => {
      return [...prevGoals,newGoal]
  })
}

function handleDeleteGoal(id:number){
  setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
}

  return <main>
    <Header image={{src:logo,alt:'logo'}}>
      <h1>Your course goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals = {goals}  onDeleteGoal={handleDeleteGoal}/>
    
    </main>
}
