import Container from './UI/Container.tsx';
import { Timer as Timerprops } from './store/Timer-Context.tsx';
export default function Timer({name,duration}:Timerprops) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
