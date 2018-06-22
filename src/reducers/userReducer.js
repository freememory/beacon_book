import { ADD_USER, EDIT_USER, DELETE_USER } from "../actions/actions";

const initialState = {
    users: [],
    nextId: 1
};

const userReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case ADD_USER:
            const user = {
                id: state.nextId,
                ...action.userInfo
            };
            return {
                ...state,
                users: [...state.users, user],
                nextId: state.nextId + 1,
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(item => { 
                    if(item.id !== action.userInfo.id)
                        return item;
                    return {
                        ...item,
                        ...action.userInfo
                    };
                })
            };
        case DELETE_USER: 
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.id)
            };
        default:
            return state;
    }
}

export default userReducer;