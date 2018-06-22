export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SHOW_USER_MODAL = 'SHOW_USER_MODAL';
export const HIDE_USER_MODAL = 'HIDE_USER_MODAL';

export const addUser = (userInfo) => {
    return { type: ADD_USER, userInfo };
}

export const editUser = (userInfo) => {
    return { type: EDIT_USER, userInfo };
}

export const deleteUser = (id) => {
    return { type: DELETE_USER, id };
}

export const showUserModal = (id) => {
    return { type: SHOW_USER_MODAL, id };
}

export const hideUserModal = () => {
    return { type: HIDE_USER_MODAL };
}