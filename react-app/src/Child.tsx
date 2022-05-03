import React from "react";

interface ChildProps {
    color?: string;
    name?: string;
    onclickAction?: () => void;
    children?:any
}


export const Child = ({color ='not provided',name ='not provided',onclickAction}: ChildProps) => {
    return <div>{name} do have color {color}</div>
}

export const ChildFunc:React.FunctionComponent<ChildProps> = ({color='is empty',onclickAction,children}) => {
    return (
        <div>
            {children}
            {color}
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onclickAction}>Add Action</button>
        </div>
    )
}
