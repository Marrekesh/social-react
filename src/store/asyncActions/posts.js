

import { addAllPostAction } from "../posts/postReducer"


export const fetchPosts = (request) => {

    return  async function(dispatch) {
        const response = await request('https://jsonplaceholder.typicode.com/posts?_limit=3&_page=1')
            dispatch(addAllPostAction(response))

    }
}