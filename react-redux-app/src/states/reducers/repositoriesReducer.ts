import Action_types from "../action_types";
import {NewAction} from "../actions";

export interface RepositoryState{
    loading: boolean;
    error: string | null;
    data: string[]
}

const initialState: RepositoryState = {
    loading: false,
    data: [],
    error: null
}
const reducer = (state: RepositoryState = initialState,action?:NewAction) : RepositoryState=> {
    switch (action?.type) {
        case Action_types.SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: null,
                data: []
            };
        case Action_types.SEARCH_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case Action_types.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            if(state !== undefined)
               return state;
            else
                return initialState
    }
}

export default reducer
