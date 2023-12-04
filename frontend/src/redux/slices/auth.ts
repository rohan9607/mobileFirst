import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, getUserDetails, login, registerUser } from "../thunks/auth";

export const auth = createSlice({
    name : "auth",
    initialState : {
        isLoading : false,
        user : {}
    },
    reducers : {

    }
    ,extraReducers: (builder) => {
        builder
        //login
        .addCase(login.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false;
        })
        // Registeration
        .addCase(registerUser.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;

        })
      
        // Forgot Password
        .addCase(forgotPassword.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(forgotPassword.fulfilled, (state, action) => {
          state.isLoading = false;
        })
        .addCase(forgotPassword.rejected, (state, action) => {
          state.isLoading = false;

        })
     
        // Fetch User Details
        .addCase(getUserDetails.pending, (state, action) => {
        })
        .addCase(getUserDetails.fulfilled, (state, action) => {
          state.user = action.payload.data
          window.localStorage.setItem('userData', JSON.stringify(state.user))          
        })
        .addCase(getUserDetails.rejected, (state, action) => {
        })
    }
})

export default auth.reducer;
