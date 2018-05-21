import { createAction } from 'redux-actions';

export const getUsers = createAction("getUsers");
export const setUsers = createAction("setUsers");
export const setUser = createAction("setUser");
export const deleteUser = createAction("deleteUser");
export const updateUser = createAction("updateUser");
