import { createAction } from "@reduxjs/toolkit";


export const fetchCitiesRequest = createAction("cities/fetchCitiesRequest");
export const fetchCitiesSuccess = createAction("cities/fetchCitiesSuccess"); 
export const fetchCitiesFailure = createAction("cities/fetchCitiesFailure");