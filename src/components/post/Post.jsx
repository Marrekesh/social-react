import './Post.css'
import MyButton from "../UI/button/MyButton"
import { useDispatch } from 'react-redux'
import { deletePostAction } from '../../store/posts/postReducer'

const Post = ({text, id}) => {

    const dispatch = useDispatch()

    const deletePost = (post) => {
        dispatch(deletePostAction(post))
    }

    return (
        <div className="post">
            <div className='post__text'>{text}</div>
            <MyButton className="my-button" onClick={() => deletePost(id)}>Удалить</MyButton>
        </div>
    )
}

export default Post