import {Child, ChildFunc} from "./Child";

export const Parent  = () => {
    return <div>
        <Child name='hello' color='white' onclickAction={() => console.log('action')}>
            <p>Hello World</p>
        </Child>
        <ChildFunc color='hello' name='main' onclickAction={()=>console.log('clicked')}>
            <p>Hello World</p>
        </ChildFunc>
    </div>
}
