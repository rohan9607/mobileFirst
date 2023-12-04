import { privateApi } from "@/axios/privateApi";
import publicApi from "@/axios/publicApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface ILoginPayload {
    email: string;
    password: string;
  }

export interface RegisterPayload {
  email: string;
  password: string;
  blood_group : string;
  username:string
}
export interface verifyEmailPayload {
  token : string
  email : string
}
  
export interface changePassword {
  token : string
  password : string
  email :string
}

export interface forgotPasswordPayload {
  email : string
}
//Thunk to handel login
export const login = createAsyncThunk(
    "auth/login",
    async (payload: ILoginPayload) => {
      try {
        const res = await publicApi.post("/auth/login", payload);
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);

//Thunk to handel login
export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload: RegisterPayload) => {
      try {
        const res = await publicApi.post("/auth/register", payload);
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);

//Thunk to handel login
export const verifyEmail = createAsyncThunk(
    "auth/verifyEmail",
    async (payload: verifyEmailPayload) => {
      try {
        const res = await publicApi.post("/auth/verify-email?token=" + payload.token + "&email=" + payload.email);
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);
//Thunk to handel login
export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (payload: forgotPasswordPayload) => {
      try {
        const res = await publicApi.post("/auth/forgot-password/"+payload.email);
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);
//Thunk to handel login
export const resetPassword = createAsyncThunk(
    "auth/changePassword",
    async (payload: changePassword) => {
      try {
        const res = await publicApi.post("/auth/reset-password-token", {...payload});
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);

//Thunk to handel login
export const getUserDetails = createAsyncThunk(
    "auth/user-details",
    async () => {
      try {
        const res = await privateApi.post("/auth/fetch-user-details");
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);