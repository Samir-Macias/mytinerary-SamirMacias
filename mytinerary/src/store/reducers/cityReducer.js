import { createSlice } from "@reduxjs/toolkit";
import { fetchCitiesFailure, fetchCitiesRequest, fetchCitiesSuccess } from "../actions/cityActions.js";

const initialState = {
    cities: [],
    loading: false,
    error : null,
};



const citySlice = createSlice({
    name: "cities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       
        builder
            .addCase(fetchCitiesRequest, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCitiesSuccess, (state, action) => {
                state.loading = false;
                state.cities = action.payload;
            })
            .addCase(fetchCitiesFailure, (state, action) => {
                state.loading = false;
                state.error = action.payload; 
            });
    },
});

export default citySlice.reducer;