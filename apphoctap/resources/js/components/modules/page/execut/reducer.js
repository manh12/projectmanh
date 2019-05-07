import *as types from "../execut/constant";
import _ from "lodash";
const pageInitialState = {
pages:[],
reset:"",
    edit: {
        id: null,
        data: null
    },
status:null,
    errors:[],
pagination:{
    total:null,
    per_page:null,
    current_page:null
}
};
const pages = (state = pageInitialState,action)=>{
    switch (action.type) {
        case types.FETCH_PAGE:
            state.pages = action.pages;
                state.pagination.total = action.total;
                state.pagination.per_page = action.per_page;
                state.pagination.current_page = action.current_page;
                return{
                    ...state
                };
        case types.ADD_PAGE:
            return {...state,
                errors:[]
            }
        case types.ERROR_PAGE:
            state.errors = action.errors;
            return {
                ...state
            }
        case types.GET_ID_PAGE:
            const indexEdit = _.findIndex(state.pages,task=>{
                return task.id === action.id;
            });
            state.edit.id = action.id;
            state.edit.data = state.pages[indexEdit];
            return {
              ...state
            }
        case types.UPDATE_PAGE:
            state.edit.id = "";
            state.edit.data = "";
            return {
                ...state
            }
        case types.DELETE_PAGE:
            const index = _.findIndex(state.pages,task=>{
                 return task.id === action.id
            });
            state.pages.splice(index,1);
            return {
                ...state,
                pages:[...state.pages]
            }
        default:
            return state;
    }
}
export default pages;
