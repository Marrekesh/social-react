
const initialState = {
    postText: '',
    posts: [],
    loadingPostStatus: 'idle'
}

const SAVE_POST_TEXT = "SAVE_POST_TEXT"
const CLEAR_POST_TEXT = "CLEAR_POST_TEXT"
const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const ADD_ALL_POST = "ADD_ALL_POST"


export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_POST_TEXT:
            return {...state, postText: action.payload}
        case CLEAR_POST_TEXT:
            return {...state, postText: ''}
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case ADD_ALL_POST:
            return {...state, posts: [...state.posts, ...action.payload]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        default:
            return state
    }
}

// ACTIONS

export const savePostTextAction = (payload) => ({type: SAVE_POST_TEXT, payload})
export const clearPostTextAction = () => ({type: CLEAR_POST_TEXT})
export const addPostAction = (payload) => ({type: ADD_POST, payload})
export const deletePostAction = (payload) => ({type: DELETE_POST, payload})
export const addAllPostAction = (payload) => ({type: ADD_ALL_POST, payload})
