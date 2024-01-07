let name1:string='krishna';

let a:number=20;

let userId:string|number='101';
userId=122;
console.log(userId)

type User2={
  name:string,
  age:number,
  isAdmin:boolean,
  id:string | number
}

let user3:User2 = {
  name:'krish',
  age:30,
  isAdmin:true,
  id:'121'
}

console.log(user3)

// type generic

type DataStorage<T> = {
  storage:T[];
  add:(data:T) => void
}

const textStorage:DataStorage<string> = {
  storage:[],
  add(data) {this.push(data)}
}

const userStorage:DataStorage<User2> = {
  storage:[],
  add(user){}
}

function merge<T,U>(a:T,b:U){
  return {
    ...a,
    ...b
  }
}

const newUser = merge<{name:string},{score:number}>({name:'krish'},{score:100});
console.log(newUser)


