import {combineReducers} from 'redux';
import RepositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    repositories : RepositoriesReducer
})

// export default reducers
