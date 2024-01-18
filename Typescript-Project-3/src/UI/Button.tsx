import { type ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'>&{
  href?:never // we are sure ki button k ander href ki property kabi nhi aygi
}

type AnchorProps =  ComponentPropsWithoutRef<'a'> & {
  href?:string
};

function isAnchorProps(props:ButtonProps | AnchorProps): props is AnchorProps{
  return 'href' in props
}

function Button(props:ButtonProps | AnchorProps){
  //const {name,...otherProps}=props; // before check condition, otherprops yha per anchor or button dono m s kuch bi ho sekti hai..error aa rehi hai
  if(isAnchorProps(props)){
    return <a  className='button' {...props}></a>
  }
    return <button className='button' {...props}></button>
}

export default Button;