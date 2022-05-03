import React from "react";

export const EventComponent:React.FunctionComponent = () => {
    const onChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    const onDragStart =(event: React.DragEvent<HTMLDivElement>) => {
        console.log('dragging me')
    }
    return <>
        <input className='outline-2 border-4' onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me</div>
    </>
};
