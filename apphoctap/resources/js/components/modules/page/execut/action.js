import axios from "axios";
import sweetAlert from "../../../../utils/sweetAlert";
import *as types from "../execut/constant";
export const getPage = (pages,total,per_page,current_page)=>{
    return{
        type:types.FETCH_PAGE,
        pages,
        total,
        per_page,
        current_page
    }
}
export const fetchPageRequest = (numberPage) =>{
    return (dispatch)=>{
        axios.get('/api/page?page='+numberPage).then(response=>{
            dispatch(getPage(response.data.data,response.data.total,response.data.per_page,response.data.current_page));
        });
    }
}
export const loadPagiPage = (numberPage)=>{
    return (dispatch)=>{
        dispatch(fetchPageRequest(numberPage));
    }
}

export const addPage = () =>{
    return {
        type:types.ADD_PAGE
    }
}
export const addPageRequest =(page)=>{
    return (dispatch)=>{
        axios.post('/api/page/',page).then(response=>{
            dispatch(addPage());
            sweetAlert.success(response);
        }).catch(error=>{
            dispatch(errors(error.response.data.errors));
            sweetAlert.warning();
        })
    }
}
export const errors =(errors)=>{
    return{
        type:types.ERROR_PAGE,
        errors
    }
}
export const getIdPage = (id) => {
    return {
        type: types.GET_ID_PAGE,
        id
    }
}
export const updateIdPage = () => {
    return { type: types.UPDATE_PAGE
    };
}
export const updatePageRequest = (id, page) => {
    return (dispatch)=> {
        axios.put('/api/page/'+id,page).then(response=>{
            dispatch(updateIdPage());
            sweetAlert.success(response);
        }).catch(error=>{
            dispatch(errors(error.response.errors));
            sweetAlert.warning();
        })
    }
}

export const deleteIdPage = (id) => {
    return {
        type: types.DELETE_PAGE,
        id
    }
}
export const deletePageRequest =(id)=>{
    return (dispatch)=>{
        axios.delete('/api/page/'+id).then(response=>{
            dispatch(deleteIdPage(id));
            sweetAlert.success(response);
        })
    }
}
