import { createSlice } from "@reduxjs/toolkit";
import { fetchItinerariesRequest, fetchItinerariesSuccess, fetchItinerariesFailure } from "../actions/itineraryActions.js";

const initialState = {
    itineraries: [],
    loading: false,
    error: null,
};

const itinerarySlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItinerariesRequest, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItinerariesSuccess, (state, action) => {
                state.loading = false;
                state.itineraries = action.payload;
            })
            .addCase(fetchItinerariesFailure, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default itinerarySlice.reducer;
