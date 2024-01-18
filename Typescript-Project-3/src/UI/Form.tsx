import { type FormEvent, type ComponentPropsWithoutRef, useRef,forwardRef,useImperativeHandle } from "react"

export type FormHandle = {
  Myclear:() => void
}

type FormProps=ComponentPropsWithoutRef<'form'>&{
  onSave:(value:unknown) => void; 
  // unknown isliye ki humko nhi pata ki in Form component below, kis type ka user form data send ker reha hai form parent component to child coponent sy, 
};

const Form = forwardRef<FormHandle,FormProps>(function Form({onSave,children,...otherProps},ref){
const formRef=useRef<HTMLFormElement>(null);

useImperativeHandle(ref,() =>{
  return {
    Myclear(){
      console.log('CLEAR')
      formRef.current?.reset();
    }
  }
})

  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();

  const formData = new FormData(event.currentTarget)
  const data=  Object.fromEntries(formData);
  onSave(data)

  }


  return <form ref={formRef} onSubmit={handleSubmit} {...otherProps}>{children}</form>
})
export default Form;