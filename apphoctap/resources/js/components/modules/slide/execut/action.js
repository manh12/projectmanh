import *as types from "./constant";
import axios from "axios";
import sweetAlert from "./../../../../utils/sweetAlert";
export const getslider = (sliders,total,per_page,current_page) => {
    return {
        type:types.FECTH_SLIDER,
        sliders,
        total,
        per_page,
        current_page
    };
};
export const  getSliderRequest = (numberPage)=>{
    return (dispatch) =>{
        axios.get('/api/slider?page='+numberPage).then(response=>{

            dispatch(getslider(response.data.data,response.data.total,response.data.per_page,response.data.current_page));
        });
    };
};
export const loadSliderPagi = (numberPage)=>{
    return (dispatch)=>{
        dispatch(getSliderRequest(numberPage));
    };
};
export const addslider=(sliders)=>{
   return{
       type:types.ADD_SLIDER,
       sliders
   };
};
export const errors = (errors)=>{
    return{
        type:types.ERROR_SLIDER,
        errors
    };
};
export const resetForm = ()=>{
    return{
        type:types.RESET_FORM
    };
};
export const resetdata = () => {
    return {
        type: types.RESET_DATA
    };
};
export const addSlideRequest=(slider)=>{
    return(dispatch) =>{
        axios.post('/api/slider',slider).then(response=>{
            dispatch(addslider(response.data.data));
            dispatch(resetdata());
            sweetAlert.success(response);
        }).catch(error=>{
            dispatch(errors(error.response.data.errors));
            sweetAlert.warning();
        });
    };
};
export const deleteslider =(id)=>{
    return{
        type:types.DELETE_SLIDER,
        id
    }
}
export const deleteSliderRequest = (id) =>{
    return (dispatch)=>{
        axios.delete('/api/slider/'+id).then(response=>{
            dispatch(deleteslider(id));
            sweetAlert.success(response);
        });
    };
};
export const editslider = (id) =>{
    return{
        type:types.EDIT_SLIDER,
        id
    }
}
export const updateSliderRequest = (id,slider)=>{
    return (dispatch)=>{
        axios.put('/api/slider/'+id).then(response=>{
            console.log(response);
            dispatch(getSliderRequest(slider));
            dispatch(resetForm());
            sweetAlert.success(response);
        }).catch(error=>{
            dispatch(errors(error.response.data.errors));
            sweetAlert.warning();
        })
    }
}
