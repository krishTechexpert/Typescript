import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name:string;
  duration:number;
}

type TimerState={
  isRunning:boolean;
  timers:Timer[]
}

type TimersContextValue= TimerState & {
  addTimer:(timerData:Timer) => void,
  startTimers:() => void,
  stopTimers: () => void
}


export const TimersContext = createContext<TimersContextValue | null>(null);

// better to used Accessing Context Type-safe with a Custom hook to check null [solution-2 best approach]
export function useTimersContext(){
  const timersCtx=useContext(TimersContext);
  if(timersCtx === null){
    throw new Error('TimersContext is null- that should not be the case')
  }
  return timersCtx;
}


type TimersContextproviderProps={
  children:ReactNode
}

const initialState:TimerState = {
  timers:[],
  isRunning:true
}

type StartTimerAction = {
  type:'START_TIMER'
}

type StopTimerAction = {
  type:'STOP_TIMER'
}

type AddTimerAction={
  type:'ADD_TIMER',
  payload:Timer

}
//not good approcah try to used type decrmination approach b'coz payload only used in ADD-Timer
// type Action = {
//   type:'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER'
//   payload?:Timer
// }

// type decremination used
type Action =  AddTimerAction |  StartTimerAction | StopTimerAction;


function timerReducer(state:TimerState,action:Action):TimerState{
  if(action.type === 'START_TIMER'){
    return {
      ...state,
      isRunning:true
    }
  }
  if(action.type === 'STOP_TIMER'){
    return {
      ...state,
      isRunning:false
    }
  }
  if(action.type === 'ADD_TIMER'){
    return {
      ...state,
      timers:[...state.timers,{name:action.payload.name,duration:action.payload.duration}]
    }
  }
  return state;
}

export default function TimersContextProvider({children}:TimersContextproviderProps){
  const [timersState,dispatch]= useReducer(timerReducer,initialState);
  const ctx={
    timers:timersState.timers,
    isRunning:timersState.isRunning,
    addTimer(timerData:Timer){
      dispatch({type:'ADD_TIMER',payload:timerData})
    },
    startTimers(){
      dispatch({type:'START_TIMER'})

    },
    stopTimers(){
      dispatch({type:'STOP_TIMER'})

    }
  }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
