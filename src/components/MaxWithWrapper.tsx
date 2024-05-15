import { ReactNode } from "react";

interface IMaxWithWrapperProps{
    children:ReactNode;
    className?:string
}
const MaxWithWrapper = ({children,className}:IMaxWithWrapperProps) => {
    return (
        <div className={`mx-auto w-full my-auto  max-w-screen-2l px-2,5 md:px-72 ${className}`}>
            {children}
        </div>
    );
}

export default MaxWithWrapper;