import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label:string,
  id:string
} & ComponentPropsWithoutRef<'input'> // ...props k liye y used kiya hai

function Input({label,id,...props}:InputProps){
  return <p>
    <label htmlFor={id}>{label}</label>
    <input  id={id} name={id} {...props} />
  </p>
}
export default Input;