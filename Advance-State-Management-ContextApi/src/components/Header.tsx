import Button from './UI/Button.tsx';
import { TimersContext, useTimersContext } from './store/Timer-Context.tsx';

export default function Header() {
  //const timerCtx = useContext(TimersContext); // This will give you access to that context      object  and that is now either null or this TimersContextValue. now it should be actually never be Null

  // yha per timerCtx null nhi hona chiye b'coz 


// because we're wrapping the entire app with that provider component.And therefore, since in this TimersContextProvider component,

// we do set a value to our context. The context actually never should be null when we try to access it here. yha per humny default value in value={timerCtx} set ker di hai it means ab Null ani ana chiya

// But of course, TypeScript doesn't really understand all these connections in our app and how that all works.

// For TypeScript, this could be null here. Now one way of working around that is to add an exclamation mark here to convince TypeScript

// that this will never be null. Therefore, now the type is inferred to be just TimersContextValue and not potentially be null.

// An alternative would be to add a guard here and check if timersCtx is equal to null. And if it is, throw an error

// because that really should not happen. So something went wrong here and then thereafter, after this, if check TypeScript would understand that it's now not null anymore,that there is no scenario where this could be null.

// solution-1
// if(timerCtx === null) {
//   throw new Error('Something went wrong!')
// } or better to used Accessing Context Type-safe with a Custom hook [solution-2 best approach]

const timerCtx=useTimersContext();

    return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timerCtx.isRunning ? timerCtx.stopTimers: timerCtx.startTimers}>{timerCtx.isRunning ? 'Stop Timers':'Start Timers'}</Button>
    </header>
  );
}
