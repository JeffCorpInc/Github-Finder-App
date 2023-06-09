import React, {useReducer} from "react";
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {SET_ALERT,REMOVE_ALERT} from '../types';

const AlertState = (props) => {

    const initialState = null;

    // Set Alert
    const setAlert = (msg,type) => {
        
        dispatch({
            type: SET_ALERT,
            payload: {msg,type}
        })
        // timeout to remove alert 
        setTimeout (() => dispatch({ type: REMOVE_ALERT }) , 2500);
    }
    

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    
    return <AlertContext.Provider value= 

        {{alert: state,setAlert}}> 
        {props.children} 
        
    </AlertContext.Provider>
}

export default AlertState;