import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actionCreators} from '../states'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators,dispatch)
}
