import { createSlice } from "@reduxjs/toolkit"

// import useHTTP from "../../components/hooks/useHTTP.hook"
// import { createAsyncThunk } from "@reduxjs/toolkit"



// const SAVE_POST_TEXT = "SAVE_POST_TEXT"
// const CLEAR_POST_TEXT = "CLEAR_POST_TEXT"
// const ADD_POST = "ADD_POST"
// const DELETE_POST = "DELETE_POST"
// const ADD_ALL_POST = "ADD_ALL_POST"
// const FETCHING_POSTS = "FETCHING_POST"

// CREATE ACTIONS
// export const savePostTextAction = createAction(SAVE_POST_TEXT)
// export const clearPostTextAction = createAction(CLEAR_POST_TEXT)
// export const addPostAction = createAction(ADD_POST)
// export const deletePostAction = createAction(DELETE_POST)
// export const addAllPostAction = createAction(ADD_ALL_POST)
// export const fetchingPosts = createAction(FETCHING_POSTS)

const initialState = {
    postText: '',
    posts: [],
    loadingPostStatus: 'idle'
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        savePostTextAction: (state, action) =>  {
            state.postText = action.payload
        },
        clearPostTextAction: state => {state.postText = ''},
        fetchingPosts: state => {state.loadingPostStatus = 'loading'},
        addAllPostAction: (state, action) => {
            state.posts = action.payload
            state.loadingPostStatus = 'idle'
        },
        addPostAction: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePostAction: (state, action) => {
           state.posts = state.posts.filter(post => post.id !== action.payload)
        }

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchPosts.pending, state => {state.loadingPostStatus = 'loading'})
    //         .addCase(fetchPosts.fulfilled, (state, action) => {
    //             state.loadingPostStatus = 'idle'
    //             state.posts = action.payload
    //         })
    //         .addCase(fetchPosts.rejected, () => {})
    //         .addDefaultCase(() => {})
            
    // }       
})

const {reducer, actions} = postsSlice

export default reducer

export const {
    savePostTextAction,
    clearPostTextAction,
    fetchingPosts,
    addPostAction,
    deletePostAction,
    addAllPostAction
} = actions

// export const postReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case SAVE_POST_TEXT:
//             return {...state, postText: action.payload}
//         case CLEAR_POST_TEXT:
//             return {...state, postText: ''}
//         case FETCHING_POSTS:
//             return {...state, loadingPostStatus: 'loading'}
//         case ADD_POST:
//             return {...state, posts: [...state.posts, action.payload]}
//         case ADD_ALL_POST:
//             return {...state, posts: [...action.payload], loadingPostStatus: 'idle'}
//         case DELETE_POST:
//             return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
//         default:
//             return state
//     }
// }


//ACTIONS

// export const savePostTextAction = (payload) => ({type: SAVE_POST_TEXT, payload})
// export const clearPostTextAction = () => ({type: CLEAR_POST_TEXT})
// export const addPostAction = (payload) => ({type: ADD_POST, payload})
// export const deletePostAction = (payload) => ({type: DELETE_POST, payload})
// export const addAllPostAction = (payload) => ({type: ADD_ALL_POST, payload})
