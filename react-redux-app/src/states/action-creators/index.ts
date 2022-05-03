import axios from 'axios'
import Action_types from "../action_types";
import {Dispatch} from "react";
import {NewAction} from "../actions";

export const search_repositories = (term: string) => {
    return async (dispatch: Dispatch<NewAction>) => {
        dispatch ({
            type: Action_types.SEARCH_REPOSITORIES
        });
        try {
            const {data,status,statusText} = await axios.get('https://registry.npmjs.org/-/v1/search',{
                params: {
                    text: term
                }
            })
            console.log(`✔️ status check is: ${status} and status message is: ${statusText}`)
            console.log(data)
            const names = data.objects.map((result: any) => {
                return result.package.name
            })
            dispatch({
                type: Action_types.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        } catch (err)  {
            console.log('❌ got into an error while fetching data')
            dispatch ({type: Action_types.SEARCH_REPOSITORIES_ERROR,payload: (err as Error).message})
        }
    }
}
