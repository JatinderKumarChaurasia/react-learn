import Action_types from "../action_types";
import {AnyAction} from "@reduxjs/toolkit";

interface Action extends AnyAction{
    type: string,
    payload?: any,
    error?: any
}

interface Search_Repositories_Action extends Action{
    type: Action_types.SEARCH_REPOSITORIES
}

interface Search_Repositories_Success_Action extends Action{
    type: Action_types.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface Search_Repositories_Error_Action extends Action {
    type: Action_types.SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type NewAction = Search_Repositories_Error_Action | Search_Repositories_Success_Action | Search_Repositories_Action;
