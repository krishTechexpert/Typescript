import { type ComponentPropsWithRef, type ElementType, type ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as:T;
  children:ReactNode;
} & ComponentPropsWithRef<T>

export default function Container<C extends ElementType>({as,children,...props}:ContainerProps<C>){
  let {Component} = as || 'div';
  return (<Component className='abc' {...props}>{children}</Component>)
}
