import * as types from "../execut/constant";
import sweetAlert from "../../../../utils/sweetAlert";
import axios from "axios";
export const addUser = user => {
    return {
        type: types.ADD_USER,
        user
    };
};
export const openModalUser = id => {
    return {
        type: types.OPEN_USER,
        id
    };
};
export const getIdUser = id => {
    return {
        type: types.GET_ID_USER,
        id
    };
};
// return default reset
export const resetForm = () => {
    return {
        type: types.RESET_FORM
    };
};
// reset data form
export const resetData = () => {
    return {
        type: types.RESET_USER
    };
};
// All errors return request
export const errors = errors => {
    return {
        type: types.ERROR_USER,
        errors
    };
};
export const getUser = (users,total,per_page,current_page)=>{
    return{
        type:types.FETCH_USER,
        users,
        total,
        per_page,
        current_page
    }
}
export const loadUserPagi=(numberPage)=>{
    return (dispatch)=>dispatch(getUserRequest(numberPage));
}
export const getUserRequest = (numberPage)=>{
    return(dispatch)=>{
        axios.get('/api/user/?page='+numberPage).then(response=>{
            // console.log(response);
            dispatch(getUser(response.data.data,response.data.total,response.data.per_page,response.data.current_page));
        })
    }
}
/**
 * Post data user request
 * @param {*} user
 */
export const addUserRequest = user => {
    return (dispatch) => {
        axios.post('/api/user',user).then(response=>{
            dispatch(addUser(response.data.data));
            dispatch(resetData());
            sweetAlert.success(response);
        }).catch(error=>{
            dispatch(errors(error.response.data.errors));
            sweetAlert.warning()
        })
    };
};
// Put data user request
export const updateUserRequest = (id, user) => {
    return dispatch => {
        axios.put('/api/user/'+id,user).then(response=>{
            dispatch(sweetAlert.success(response));
            dispatch(getUserRequest(user));
        }).then(error=>{
            dispatch(error.response.data.errors);
            sweetAlert.warning();
        })
    };
};
export const deleteUser = (id)=>{
    return{
        type:types.DELETE_USER,
        id
    };
};
/**
 * Delete data user request
 * @param {*} id
 */
export const deleteIdUserRequest = id => {
    return (dispatch) => {
        axios.delete('/api/user/'+id).then(response=>{
            sweetAlert.success(response);
            dispatch(deleteUser(id));
        })
    };
};
