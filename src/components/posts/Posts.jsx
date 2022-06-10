import { useSelector } from 'react-redux'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../store/asyncActions/posts'

import { fetchingPosts } from '../../store/posts/postReducer'
import useHTTP from '../hooks/useHTTP.hook'
import Spinner from '../UI/spinner/Spinner'
const Posts = () => {

    const {request} = useHTTP()

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.posts.loadingPostStatus)

    useEffect(() => {
        dispatch(fetchingPosts())
        dispatch(fetchPosts(request))
    }, [])

    if (loading === 'loading') {
        return <Spinner/>
    }

    const render = () => {

        if (posts.length === 0) {
            return <h3>Добавьте посты</h3>
        } 

        return posts.map(post => 
            <Post key={post.id} id={post.id} text={post.title}/>
        )


    }
    return (
        <div className="posts">
            {render()}
        </div>
    )
}

export default Posts