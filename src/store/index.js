import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { postReducer } from "./posts/postReducer";
import reducer from "./posts/postReducer";

const store = configureStore({
    reducer: {
        posts: reducer
    },
    middleware: [thunk]
})

export default store