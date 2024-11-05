import { createAction } from "@reduxjs/toolkit";


export const fetchItinerariesRequest = createAction("itineraries/fetchItinerariesRequest");
export const fetchItinerariesSuccess = createAction("itineraries/fetchItinerariesSuccess");
export const fetchItinerariesFailure = createAction("itineraries/fetchItinerariesFailure");
