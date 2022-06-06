import { useSelector } from 'react-redux'
import Post from '../post/Post'


const Posts = () => {

    const posts = useSelector(state => state.posts.posts)
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