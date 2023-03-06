import { configureStore } from "@reduxjs/toolkit";
import { infoSliceReducer } from "./infoSlice";


export const store = configureStore({
    reducer: {
        addItems: infoSliceReducer
    },
})