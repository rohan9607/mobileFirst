import { createSlice } from "@reduxjs/toolkit";
import { getAllImages, uploadImage } from "../thunks/main";

export const main = createSlice({
    name : "main",
    initialState : {
        uploadIsLoading : false,
        getImagesLoading: false,
        isDeleted : true
    },
    reducers : {
      resetIsDeleted : (state) => {
        state.isDeleted = false;
      }
    }
    ,extraReducers: (builder) => {
        builder
        //upload Image
        .addCase(uploadImage.pending, (state, action) => {
          state.uploadIsLoading = true;
        })
        .addCase(uploadImage.fulfilled, (state, action) => {
          state.uploadIsLoading = false;
        })
        .addCase(uploadImage.rejected, (state, action) => {
          state.uploadIsLoading = false;
        }) 
        
        // Get all images
        .addCase(getAllImages.pending, (state, action) => {
          state.getImagesLoading = true;
        })
        .addCase(getAllImages.fulfilled, (state, action) => {
          state.getImagesLoading = false;
        })
        .addCase(getAllImages.rejected, (state, action) => {
          state.getImagesLoading = false;
        }) 
    }
})

export default main.reducer;

export const {resetIsDeleted} = main.actions