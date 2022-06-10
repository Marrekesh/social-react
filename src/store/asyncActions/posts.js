import useHTTP from "../../components/hooks/useHTTP.hook"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { addAllPostAction } from "../posts/postReducer"


// export const fetchPosts = createAsyncThunk(
//     'posts/fetchPosts',
//     () => {
//         const {request} = useHTTP()
//         request('https://jsonplaceholder.typicode.com/posts?_limit=3&_page=1')
//     }
// )

//Posts
export const fetchPosts = (request) => {

    return async function(dispatch) {
        const response = await request('https://jsonplaceholder.typicode.com/posts?_limit=3&_page=1')
        dispatch(addAllPostAction(response))

    }
}

//Auth