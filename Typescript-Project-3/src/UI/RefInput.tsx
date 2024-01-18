import { type ComponentPropsWithoutRef, useRef,forwardRef } from "react";

type InputProps = ComponentPropsWithoutRef<'input'>

const RefInput =forwardRef<HTMLInputElement,InputProps> (function RefInput({...props},ref){
  return <>
  <label>Enter name</label>
  <p><input ref={ref} {...props} /></p>
  </>
})
export default RefInput;