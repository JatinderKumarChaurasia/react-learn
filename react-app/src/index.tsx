import './index.css'
import {createRoot} from "react-dom/client";
import {UserSearchRef} from "./refs/UserSearchRef";

const App  = () => {
    return (
        <div>
            <p className="text-5xl">Hello World</p>
            {/*<EventComponent/>*/}
            {/*<GuestList/>*/}
            {/*<UserSearch/>*/}
            <UserSearchRef/>
            {/*<Parent/>*/}
            {/*<hr/>*/}
            {/*<Guests/>*/}
        </div>
    )
}

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App/>)
// ReactDOM.render(<App/>,document.querySelector('#root'))
