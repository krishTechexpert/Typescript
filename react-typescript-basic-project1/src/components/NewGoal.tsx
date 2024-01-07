import { type FormEvent } from "react"
import { type CourseGoal } from "../App"
import { useRef } from "react";
type NewGoalprops={
  onAddGoal:(data:CourseGoal) => void
}

export default function NewGoal({onAddGoal}:NewGoalprops){

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    let newGoal = {title:enteredGoal,description:enteredSummary,id:Math.random()}
     onAddGoal(newGoal)
     event.currentTarget.reset()
    
    // const fd=new FormData(event.currentTarget)
    // let val = Object.fromEntries(fd.entries())
    // let newGoal = {...val,id:Math.random()}
    // onAddGoal(newGoal)

      
  }
  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your goal</label>
      <input id="goal" type="text" name="title" ref={goal} required/>
    </p>
    <p>
      <label htmlFor="summary">Your summary</label>
      <input id="summary" type="text" name="description" ref={summary} required/>
    </p>
    <p>
      <button>Add Goal</button>
    </p>
  </form>
}