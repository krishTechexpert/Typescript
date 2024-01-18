import type {ComponentPropsWithoutRef, ElementType,ReactNode} from 'react';
type IconProps={

icon:ElementType;
onClick: () =>void;
children:ReactNode;
} & ComponentPropsWithoutRef<'button'>;

function IconButton({icon:Icon,children,...props}:IconProps){
    // icon is aliased to Icon because it should be used like a custom component name

  return (<button {...props}>
    <span><Icon/></span>
    <span>{children}</span></button>)
}
export default IconButton;


export function HeartIcon(){
  return <span>❤️</span>
}