import {type PropsWithChildren} from 'react';
type Headerprops1={
  image:{
    src:string,
    alt:string
  }
}

type Headerprops = PropsWithChildren<Headerprops1>


const Header:React.FC<Headerprops> = ({image,children}) => {
  return <header>
    {children}
    <img {...image}/>
  </header>
}
export default Header;