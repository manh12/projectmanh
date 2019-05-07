import *as types from "./constant";
const SliderInitialState = {
    sliders:[],
    errors:[],
    reset:false,
    errors:[],
    idModal:-1,
    edit:"",
    pagination:{
        total:null,
        per_page:null,
        current_page:null
    },
};
const sliders = (state = SliderInitialState,action)=>{

    switch (action.type) {
        case types.FECTH_SLIDER:
            state.sliders = action.sliders;
            state.pagination.total = action.total;
            state.pagination.per_page = action.per_page;
            state.pagination.current_page = action.current_page;
            return{
                ...state
            };
        case types.ADD_SLIDER:
            state.sliders.unshift(action.sliders);
            return {
                ...state,
                sliders:[...state.sliders]
            };
        case types.RESET_FORM:

            return {
                ...state,
                reset:true
            };
        case types.RESET_DATA:
            state.reset = false;
            return { ...state
            };
        case types.ERROR_SLIDER:
            return {
                ...state,
                errors:action.errors
            };
        case types.DELETE_SLIDER:
            const index = _.findIndex(state.sliders,task =>{return task.id === action.id});
            state.sliders.splice(index,1);
            return {
                ...state,
                sliders:[...state.sliders]
            };
        case types.EDIT_SLIDER:
            const indexEdit = _.findIndex(state.sliders,task =>{
                return task.id === action.id;
            });
            return {
                ...state,
                idModal:action.id,
                edit:state.sliders[indexEdit]
            };
        default:
            return state;
    }

};
export default sliders;
