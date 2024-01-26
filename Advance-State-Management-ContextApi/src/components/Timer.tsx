import {useState,useEffect,useRef} from 'react';
import Container from './UI/Container.tsx';
import { Timer as Timerprops, useTimersContext } from './store/Timer-Context.tsx';



export default function Timer({name,duration}:Timerprops) {

  const [remainingTime,setRemainingTime] = useState(duration * 1000);
  const interval=useRef<number | null>(null);
  const {isRunning}  = useTimersContext();
  
  if(remainingTime <=0 && interval.current){
    clearInterval(interval.current)
  }


  useEffect(() => {
    let timer:number;
    if(isRunning){

    timer=setInterval(() => {
      setRemainingTime(prevTime => {
        if(prevTime<=0){
          return prevTime
        }
        return prevTime - 50
      })
    },50)
    interval.current=timer;

    }
    else if(interval.current){

      clearInterval(interval.current)
    }

     return () =>{ 
      console.log('cleaun up timer')
      clearInterval(timer)
    
    }
  },[isRunning])

  const formatedRemainTime = (remainingTime/1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>time remain: {formatedRemainTime}</p>
    </Container>
  );
}
