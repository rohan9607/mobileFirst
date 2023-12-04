import { privateApi } from "@/axios/privateApi";
import publicApi from "@/axios/publicApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Thunk to upload new image
export const uploadImage = createAsyncThunk(
    "home/upload-image",
    async (payload : {file : any}) => {
      try {
        const res = await privateApi.post("/home/upload-image", payload,{
          headers: {
            Accept: "application/json",
            "Content-Type": 'multipart/form-data',
          },
        } );
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);

//Thunk to fetch all images
export const getAllImages = createAsyncThunk(
    "home/fetch-all-images",
    async () => {
      try {
        const res = await publicApi.get("/home/images");
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
);
