import {store} from '../states'
import {Provider} from "react-redux";
import RepositoriesList from "./RepositoriesList";

const App = () => {
    return (
        <Provider store={store}>
            <div className='container items-center bg-blue-300'>
                <h1 className='text-2xl'>Search for Package</h1>
                <RepositoriesList/>
            </div>
        </Provider>
    )
}

export default App
