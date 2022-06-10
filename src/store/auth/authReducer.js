import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true,

}

export const authSlice = ({
    name: 'auth',
    initialState,
    reducers: {
        isAuthenticatedAction: (state, action) => {state.isAuthenticated = action.payload},
    }
})