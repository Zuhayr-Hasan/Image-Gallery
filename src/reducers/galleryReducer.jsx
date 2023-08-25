import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: [],
    reducers: {
        GET_IMAGES: (state, action) => {
            return action.payload
        },
        ADD_IMAGES: (state, action) => {
            return action.payload
        },
        REMOVE_IMAGES: (state, action) => {
            return action.payload
        },
        LOAD_MORE: (state, action) => {
            return action.payload
        }
    }
})
