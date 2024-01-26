import { useTimersContext } from "./store/Timer-Context";
import Timer from "./Timer";
export default function Timers() {
  const {timers} = useTimersContext();
  return <ul>
    {timers && timers.map((item) => {
      return <li key={item.name}>
        <Timer name={item.name} duration={item.duration} />
      </li>
    })
    
    }</ul>;
}
