import { useSelector } from 'react-redux'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../store/asyncActions/posts'
import useHTTP from '../hooks/useHTTP.hook'

const Posts = () => {

    const {request, loading} = useHTTP()

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch( fetchPosts(request))
    }, [dispatch])


    return (
        <div className="posts">

            {posts.length 
            ?   posts.map(post => {
                    return <Post key={post.id} id={post.id} text={post.title}/>
                })

            :   <h3>Нет постов</h3>

            }
        
            
        </div>
    )
}

export default Posts