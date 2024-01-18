import Input from "./UI/Input";
import Button from "./UI/Button";
import Container from "./UI/Container";
import IconButton from "./UI/IconButton";
import { HeartIcon } from "./UI/IconButton";
import RefInput from "./UI/RefInput";
import { useRef } from "react";
import Form from "./UI/Form";
import {type FormHandle} from "./UI/Form";
function App() {
const input = useRef<HTMLInputElement>(null);
const customForm=useRef<FormHandle>(null);


function handleSave(data:unknown){
const user = data as {name:string,age: string} 
// yha per humny as used kiya hai..b'coz yha per humko pata ki user ki type ki value send ker reha hai from input element sy such as name,age inside <Form> Component check it below we here defined
// <Input type="text" label="name" id="name"/>
console.log("user=",user)
customForm.current?.Myclear();

// alternate way for using as

// if(!data || typeof data !== 'object' || !('name' in data) || !('age' in data)){
//   return
// }
// at this point, TypeScript knows that data MUST BE an object 
  // with a name and age property
  // otherwise, the previous if statement would have returned
//console.log("user=",data)



}
  return <main>
    <h2>learn some Advance concept here in typescript <a href='https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe' style={{color:'#000'}}>View best Tutorial typescript</a></h2>
              <Input id="name" label="name" placeholder="enter your name" type="text" />
              <Input id="age" label="age" placeholder="enter your age" type="number" />
              <p>
                example of type predicates 
                <p><Button href='https://google.com'>A Button</Button></p>
              </p>
              <p>
                <Button href='https://google.com' target="_blank">A Link</Button>
              </p>
              <p>Generic Polymorphic Component <br></br>
                {/* <Container title="my button" onClick={() =>{}} id="button" as={Button}>Click Me</Container> */}
                {/* <Container title="my input" id="button" as={Input}/> */}
              </p>
              <p>
              <IconButton icon={HeartIcon} onClick={() => console.log('hello world')}>
                Like Me!
              </IconButton>
              </p>
              <h3>forward ref with typescript</h3>
              <RefInput ref={input}  type="text" placeholder="enter your name" />
              <h3>Example of Form Submit</h3>
              <Form onSave={handleSave} ref={customForm}>
                <Input type="text" label="name" id="name"/>
                <Input type="number" label="age" id="age"/>
                <Button>Submit</Button>
              </Form>
  </main>;
}

export default App;
