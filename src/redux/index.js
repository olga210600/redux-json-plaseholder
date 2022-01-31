import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slices/blockSlices";

const store = configureStore({
    reducer: postSlice.reducer
})

export default store