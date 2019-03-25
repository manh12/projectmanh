import *as types from './../constants/ActionType'
import axios from 'axios';
export const toggleForm = ()=>{
    return{
        type:types.TOGGLE_FORM
    }
};
export const openForm=()=>{
    return {
        type:types.OPEN_FORM
    }
};
export const closeForm = ()=>{
    return {
        type:types.CLOSE_FORM
    }
};
