import * as types from "./constant";
import _ from "lodash";

const usersInitialState = {
    users: [],
    idModal: -1,
    errors: [],
    reset: false,
    userEdit: "",
    pagination: {
        total: null,
        per_page: null,
        current_page: null
    }
};
const users = (state = usersInitialState, action) => {

    switch (action.type) {
        case types.RESET_USER:
            return { ...state,
                reset: !state.reset
            };
        case types.ERROR_USER:
            state.errors = action.errors;
            return { ...state
            };
        case types.FETCH_USER:
            state.users = action.users;
            state.pagination.total = action.total;
            state.pagination.per_page = action.per_page;
            state.pagination.current_page = action.current_page;
            return { ...state
            };

        case types.ADD_USER:
            state.users.unshift(action.user);
            return { ...state,
                users: [...state.users],
                errors: []
            };
        case types.DELETE_USER:
            const index = _.findIndex(state.users, task => {
                return task.id === action.id;
            });
            state.users.splice(index, 1);
        case types.OPEN_USER:
            state.idModal = action.id;
            return { ...state
            };
        case types.GET_ID_USER:
            const indexEdit = _.findIndex(state.users, task => {
                return task.id === action.id;
            });
            state.idModal = indexEdit;
            return { ...state,
                userEdit: state.users[indexEdit]
            };
        case types.RESET_FORM:
            return { ...state,
                reset: false
            };
        default:
            return state;
    }
};
export default users;
