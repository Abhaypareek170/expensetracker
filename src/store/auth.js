import {  createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');
const user = localStorage.getItem('user')
const initialAuthState={
    isAuthenticated:!!token,
    token:token,
    user:user
}
const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout(state){
            state.isAuthenticated=false;
            state.token = null;
            state.user = null;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

