import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        error: false,
        isLoggedIn: false,
        user: JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers: {
        loginHandler(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            console.log(state.user, state.isLoggedIn);
        },
        userInfo(state, action) {
            state.fullName = action.payload;
        },
        logoutHandler(state) {
            state.user = localStorage.removeItem("user") || null;
            state.isLoggedIn = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;