import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { postReducer } from "./posts/postReducer";

const store = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: [thunk]
})

export default store