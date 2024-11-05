import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../store/reducers/cityReducer.js";
import itineraryReducer from "../store/reducers/itineraryReducer.js";

const store = configureStore({
    reducer: {
        cities: cityReducer,
        itineraries: itineraryReducer, 
    },
});

export default store;
